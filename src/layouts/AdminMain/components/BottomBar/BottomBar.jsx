import { Row, Col } from 'antd'
import dayjs from 'dayjs'

const BottomBar = (props) => {
  const { isBigScreen } = props

  return (
    <Row justify='center' align='center' className=' bg-primary  '>
      <Col xs={24} md={6}>
        <a href='/'>
          <div className='flex justify-center my-4'>
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
    </Row>
  )
}

export default BottomBar
