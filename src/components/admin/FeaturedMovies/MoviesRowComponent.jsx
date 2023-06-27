import React from 'react'
import { m } from 'framer-motion'
import * as CONSTANT from 'common/constant'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

export const MoviesRow = styled.div`
  &::-webkit-scrollbar {
    display: none;
  }
`
const MoviesRowComponent = (props) => {
  const { movies } = props
  const navigate = useNavigate()
  return (
    <>
      <m.div
        variants={CONSTANT.ANIMATION_VARIANT_STAGGER_CONTAINER}
        initial='hidden'
        animate='show'
        exit='hidden'
      >
        <p className='uppercase'>Featured / 注目</p>
        <MoviesRow
          initial='hidden'
          animate='show'
          layout='preserve-aspect'
          exit='hidden'
          className='flex overflow-x-auto mt-4 '
          variants={CONSTANT.ANIMATION_VARIANT_STAGGER_CONTAINER}
        >
          {movies.slice(3, 10).map((movies) => (
            <React.Fragment key={movies.id}>
              <div
                className='cursor-pointer'
                onClick={() => navigate(`${CONSTANT.BROWSE_MOVIES_DETAILS_ROUTE}/${movies.id}`)}
              >
                <img
                  className='m-2
                w-44'
                  src={movies.image ? movies.image : ''}
                  alt={movies.name}
                />
                <p className='text-white text-md text-center'> {movies.title}</p>
              </div>
            </React.Fragment>
          ))}
        </MoviesRow>
      </m.div>
    </>
  )
}

export default MoviesRowComponent
