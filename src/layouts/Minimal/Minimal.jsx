import React from 'react'

import { useIsFetching } from '@tanstack/react-query'
import { ConfigProvider, Layout, Spin } from 'antd'

import BaseAnimation from 'components/common/BaseAnimation'

const { Content } = Layout

const Minimal = (props) => {
  const { children } = props

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
            <Layout className='min-h-screen'>
              <Content className='bg-white'>{childrenWithProps}</Content>
            </Layout>
          </BaseAnimation>
        </Spin>
      </div>
    </ConfigProvider>
  )
}

export default Minimal
