import { m } from 'framer-motion'
import { List, Button, Card } from 'antd'
import { FieldTimeOutlined, CalendarOutlined } from '@ant-design/icons'
import dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'

import * as CONSTANT from 'common/constant'
import { isMobile } from 'react-device-detect'

const { Meta } = Card

const ListMoviesComponent = (props) => {
  const { movies } = props
  const navigate = useNavigate()
  return (
    <>
      <m.div
        className='mb-4 mt-8'
        initial='hidden'
        animate='show'
        layout='preserve-aspect'
        exit='hidden'
        variants={CONSTANT.ANIMATION_VARIANT_STAGGER_CONTAINER}
      >
        <p className='uppercase '>Now playing / 再生中</p>
        <List
          pagination={{
            align: 'center',
            position: 'bottom',
            responsive: true,
            pageSize: 10,
            responsive: true,
          }}
          grid={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
            xxl: 6,
          }}
          dataSource={
            movies
              ? movies.map((film) => {
                  return {
                    key: film?.id,
                    id: film?.id,
                    href: 'https://ant.design',
                    image: film.image,
                    title: film.title,
                    director: film.director,
                    release_date: film.release_date,
                    running_time: film.running_time,
                    content:
                      'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
                  }
                })
              : []
          }
          renderItem={(movies) => (
            <m.div variants={CONSTANT.ANIMATION_VARIANT_STAGGER_ITEM}>
              <List.Item className='m-0 px-4 '>
                <Card
                  onClick={() => navigate(`${CONSTANT.BROWSE_MOVIES_DETAILS_ROUTE}/${movies.id}`)}
                  cover={<img src={movies.image}></img>}
                  bordered
                  type='primary'
                  className='bg-transparent w-full mt-4 border-none'
                >
                  <Meta
                    description={
                      <>
                        <p className='text-white text-md text-center'> {movies.title}</p>
                        <p className='text-primary-text text-xs text-center '>
                          <CalendarOutlined />
                          {dayjs(movies.release_date).format('YYYY')}年{' '}
                          <span className='text-white'>
                            <FieldTimeOutlined className='ml-2' />
                            {movies.running_time}分
                          </span>
                        </p>
                      </>
                    }
                  />
                  <div className='mt-4 w-full'>
                    <Button className='w-full mb-4 hidden lg:block' size='small' ghost>
                      <p className='uppercase text-xs'>
                        {!isMobile ? 'film details / 映画の詳細' : 'details'}
                      </p>
                    </Button>
                  </div>
                </Card>
              </List.Item>
            </m.div>
          )}
        />
      </m.div>
    </>
  )
}

export default ListMoviesComponent
