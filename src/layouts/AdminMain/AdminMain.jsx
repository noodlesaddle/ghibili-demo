import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useIsFetching } from '@tanstack/react-query'
import { ConfigProvider, Layout, Spin } from 'antd'

import * as CONSTANT from 'common/constant'
import Topbar from './components/Topbar'
import BaseAnimation from 'components/common/BaseAnimation'
import BottomBarComponent from './components/BottomBar'

const { Header, Content, Footer } = Layout

const AdminMain = (props) => {
  const { children } = props

  const isBigScreen = useMediaQuery({
    minWidth: CONSTANT.XL_SCREEN_SIZE,
  })

  const childrenWithProps = React.Children.map(children, (element) =>
    React.cloneElement(element, {}),
  )

  return (
    <ConfigProvider
      theme={{
        token: {},
      }}
    >
      <div className='flex flex-col w-full min-h-full'>
        <Spin
          spinning={
            useIsFetching({
              fetchStatus: 'fetching',
            }) > 0
          }
          className='fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          style={{
            zIndex: 1001,
          }}
        >
          <BaseAnimation>
            <Layout className='min-h-full ' hasSider>
              <Layout className='min-h-screen bg-primary text-white'>
                <Header className='p-0 shadow'>
                  <Topbar isBigScreen={isBigScreen} />
                </Header>
                <div>
                  <Content className='m-4 '>{childrenWithProps}</Content>
                </div>
                <Footer className='p-0 border-none  align-middle'>
                  <BottomBarComponent isBigScreen={isBigScreen} />
                </Footer>
              </Layout>
            </Layout>
          </BaseAnimation>
        </Spin>
      </div>
    </ConfigProvider>
  )
}

export default AdminMain
