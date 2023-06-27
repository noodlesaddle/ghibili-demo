import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import { FullscreenOutlined, PlayCircleOutlined } from '@ant-design/icons'
import { isMobile } from 'react-device-detect'
import { m } from 'framer-motion'
import styled from 'styled-components'

import * as CONSTANT from 'common/constant'

export const HeroContainer = styled.div`
  height: 60vh;
  background-size: cover !important;
  ${(props) => `background: url('https://image.tmdb.org/t/p/original${props.background}');`}
`
export const HeroTitle = styled.h1`
  margin-top: 20vh;
`
export const HeroDescription = styled.p`
  width: 45rem;
  max-width: 80vw;
  line-height: 1.3;
`

const HeroMovieComponent = (props) => {
  const { movies } = props
  const navigate = useNavigate()
  const randomIndex = Math.floor(Math.random() * movies.length)
  const randomMovie = movies[randomIndex]
  return (
    <>
      {!isMobile ? (
        <m.div
          hidden={isMobile}
          variants={CONSTANT.ANIMATION_VARIANT_STAGGER_CONTAINER}
          initial='hidden'
          animate='show'
          exit='hidden'
          className='mb-8'
        >
          <HeroContainer
            background={randomMovie?.movie_banner}
            className='p-10 '
            variants={CONSTANT.ANIMATION_VARIANT_STAGGER_CONTAINER}
          >
            <HeroTitle className='text-6xl font-bold mb-6 text-white'>
              {randomMovie?.title}
            </HeroTitle>
            <HeroDescription className='font-medium text-md mb-4'>
              {randomMovie?.description}
            </HeroDescription>
            <div className='flex justify-start mt-6 uppercase text-xs'>
              <Button type='primary' icon={<PlayCircleOutlined />} className='mr-6 uppercase'>
                <a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley'>
                  watch / 映画を観る
                </a>
              </Button>
              <Button
                type='default'
                className='uppercase'
                icon={<FullscreenOutlined />}
                onClick={() =>
                  navigate(`${CONSTANT.BROWSE_MOVIES_DETAILS_ROUTE}/${randomMovie.id}`)
                }
              >
                film details / 映画の詳細
              </Button>
            </div>
          </HeroContainer>
        </m.div>
      ) : (
        ''
      )}
    </>
  )
}

export default HeroMovieComponent
