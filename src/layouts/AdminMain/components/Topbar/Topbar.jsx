import { Row, Col } from 'antd'
import dayjs from 'dayjs'

const Topbar = (props) => {
  const { isBigScreen } = props

  return (
    <Row
      justify={isBigScreen ? 'space-between' : ''}
      align='left'
      className='px-6 bg-primary-text  '
    >
      <Col md={6}></Col>
      <Col xs={14} md={6}>
        <a href='/'>
          <div className='flex m-4'>
            <img
              draggable={false}
              src='/logo.svg'
              alt='ロゴ'
              className='mx-auto invert rounded max-w-full object-contain'
              style={{ height: '32px' }}
            />
          </div>
        </a>
      </Col>

      <Col xs={10} md={6}>
        <p className='text-white md:text-sm text-xs mt-6'>
          1985年に設立, {dayjs().diff('1985-06-15', 'years')}年前
        </p>
      </Col>
    </Row>
  )
}

export default Topbar
