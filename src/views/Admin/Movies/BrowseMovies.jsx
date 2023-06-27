import React, { useState, useEffect } from 'react'

import { useQuery } from '@tanstack/react-query'
import { useNavigate } from 'react-router-dom'
import { m } from 'framer-motion'
import { io } from 'socket.io-client'

import * as CONSTANT from 'common/constant'
import * as API from 'common/api'
import * as UTILITY from 'common/utility'
import BaseAnimation from 'components/common/BaseAnimation'
import MoviesRowComponent from 'components/admin/FeaturedMovies'
import ListMoviesComponent from 'components/admin/ListMovies'
import HeroMovieComponent from 'components/admin/HeroMovie'

const BrowseMovies = () => {
  const navigate = useNavigate()
  const [movies, setMovies] = useState([])

  const isMountedRef = UTILITY.USE_IS_MOUNTED_REF()
  useQuery([API.QUERY_KEY_MOVIES], API.ADMIN_GET_MOVIES, {
    onSuccess: (response) => {
      if (isMountedRef.current) {
        if (response?.data) {
          setMovies(response.data)
        }
      }
    },
    onError: (error) => {
      if (error?.response?.status === COMMONS.RESPONSE_PERMISSION_ERROR) {
        navigate(COMMONS.PERMISSION_ERROR_ROUTE)
      } else if (error?.response?.status === COMMONS.RESPONSE_SESSION_ERROR) {
        message.warning({
          content: COMMONS.ERROR_SESSION_MSG,
          key: COMMONS.MESSAGE_SESSION_ERROR_KEY,
        })
        navigate(COMMONS.ADMIN_LOGIN_ROUTE)
      } else if (error?.response?.status === COMMONS.RESPONSE_SYSTEM_ERROR) {
        message.error({
          content: COMMONS.ERROR_SYSTEM_MSG,
          key: COMMONS.MESSAGE_SYSTEM_ERROR_KEY,
        })
      } else {
        message.error({
          content: COMMONS.ERROR_SYSTEM_MSG,
          key: COMMONS.MESSAGE_SYSTEM_ERROR_KEY,
        })
      }
    },
  })

  useEffect(() => {
    const socket = io(API.SITE_URL, { path: API.SOCKET_PATH })

    socket.on(API.SOCKET_MOVIES, () => {
      queryClient.invalidateQueries({
        queryKey: [API.QUERY_KEY_MOVIES],
      })
    })

    return () => {
      socket.off(API.SOCKET_MOVIES)
      socket.disconnect()
    }

    // eslint-disable-next-line
  }, [])
  return (
    <BaseAnimation>
      <m.div
        variants={CONSTANT.ANIMATION_VARIANT_STAGGER_CONTAINER}
        initial='hidden'
        animate='show'
        exit='hidden'
        className='mx-24 '
      >
        <HeroMovieComponent movies={movies} />
        <MoviesRowComponent movies={movies} />
        <ListMoviesComponent movies={movies} />
      </m.div>
    </BaseAnimation>
  )
}

export default BrowseMovies
