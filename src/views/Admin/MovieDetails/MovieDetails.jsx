import React, { useState, useEffect } from 'react'
import { useQuery } from '@tanstack/react-query'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { io } from 'socket.io-client'

import { Col, Row, Image, Button, message, Avatar } from 'antd'
import { m } from 'framer-motion'

import * as CONSTANT from 'common/constant'
import * as API from 'common/api'
import BaseAnimation from 'components/common/BaseAnimation'

const MovieDetails = () => {
  const navigate = useNavigate()
  const [movieDetail, setMovieDetail] = useState([])
  const [peopleData, setPeopleData] = useState([])
  const [names, setNames] = useState([])

  const { id } = useParams()
  const isMountedRef = CONSTANT.USE_IS_MOUNTED_REF()

  useQuery(
    [
      API.QUERY_KEY_MOVIE_DETAILS,
      {
        id: id,
      },
    ],
    () => API.ADMIN_GET_MOVIE_DETAILS(id),
    {
      onSuccess: (response) => {
        if (isMountedRef.current) {
          if (response?.data) {
            setMovieDetail(response.data)
          }
          if (response?.data?.people) {
            setPeopleData(response.data.people)
          }
        }
      },
      onError: (error) => {
        if (error?.response?.status === CONSTANT.RESPONSE_PERMISSION_ERROR) {
          navigate(CONSTANT.PERMISSION_ERROR_ROUTE)
        } else if (error?.response?.status === CONSTANT.RESPONSE_SESSION_ERROR) {
          message.warning({
            content: CONSTANT.ERROR_SESSION_MSG,
            key: CONSTANT.MESSAGE_SESSION_ERROR_KEY,
          })
          navigate(CONSTANT.ADMIN_LOGIN_ROUTE)
        } else if (error?.response?.status === CONSTANT.RESPONSE_SYSTEM_ERROR) {
          message.error({
            content: CONSTANT.ERROR_SYSTEM_MSG,
            key: CONSTANT.MESSAGE_SYSTEM_ERROR_KEY,
          })
        } else {
          message.error({
            content: CONSTANT.ERROR_SYSTEM_MSG,
            key: CONSTANT.MESSAGE_SYSTEM_ERROR_KEY,
          })
        }
      },
    },
  )

  useEffect(() => {
    const socket = io(API.SITE_URL, { path: API.SOCKET_PATH })

    socket.on(API.SOCKET_MOVIES_DETAILS, () => {
      queryClient.invalidateQueries({
        queryKey: [API.QUERY_KEY_MOVIE_DETAILS],
      })
    })

    return () => {
      socket.off(API.SOCKET_MOVIES)
      socket.disconnect()
    }

    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    const fetchNames = async () => {
      try {
        const fetchNameData = async (url) => {
          const response = await axios.get(url)
          if (response.status === 200) {
            return response.data.name
          }
          return null
        }

        const namePromises = peopleData.map((url) => fetchNameData(url))
        const fetchedNames = await Promise.all(namePromises)
        setNames(fetchedNames.filter((name) => name !== null))
        console.log(fetchedNames)
      } catch (error) {
        console.error('Error fetching names:', error.message)
      }
    }

    fetchNames()
  }, [peopleData])

  return (
    <BaseAnimation>
      <m.div className='sm:mx-24 py-4 lg:w-1/5 bg-primary '>
        <Button
          onClick={() => navigate(`${CONSTANT.BROWSE_MOVIES_ROUTE}`)}
          className='uppercase w-full'
          size='small'
          ghost
        >
          Browse Movies / 映画を閲覧する
        </Button>
      </m.div>
      <m.div
        variants={CONSTANT.ANIMATION_VARIANT_STAGGER_CONTAINER}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='sm:mx-24 p-4 bg-primary-light '
      >
        <Row className='w-full h-auto flex justify-center'>
          <Col xs={24} lg={12}>
            <div className='mt-32 sm:ml-12 '>
              <h1 className='text-primary text-4xl font-bold'>{movieDetail.title}</h1>
              <p className='text-primary-text uppercase text-xs'>
                {movieDetail.original_title_romanised} / {movieDetail.original_title}
              </p>
              <p className='text-primary  text-xs mt-1'>
                Year: {movieDetail.release_date} / Director: {movieDetail.director} / Runtime :
                {movieDetail.running_time}
                mins
              </p>
            </div>

            <div className=' mt-4 sm:ml-24'>
              <p className='text-primary text-sm mt-1'>{movieDetail.description}</p>
            </div>
            <div className=' mt-4 sm:ml-12'>
              <p className='text-primary-text uppercase text-xs'>
                actors and actresses / 俳優と女優
              </p>
            </div>
            <div className=' mt-4 sm:ml-12 flex justify-start overflow-x-auto w-full'>
              {names.map((name, index) => (
                <div className='px-3 mx-2 inline-flex ' key={index}>
                  <Avatar
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClMUkIkAKGx8fE35q596ZTHztwri5f0To5g&usqp=CAU'
                    style={{
                      verticalAlign: 'middle',
                    }}
                    size='large'
                  />
                  <p className='text-primary font-bold'>{name}</p>
                </div>
              ))}
            </div>
          </Col>

          <Col xs={24} lg={12} className='p-4'>
            <div className='w-full  flex justify-end sm:px-12'>
              <Image src={movieDetail.image} />
            </div>
          </Col>
        </Row>
      </m.div>
    </BaseAnimation>
  )
}

export default MovieDetails
