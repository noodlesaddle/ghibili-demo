import React from 'react'
import ReactDOM from 'react-dom/client'

import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ConfigProvider } from 'antd'
import jaJP from 'antd/locale/ja_JP'
import dayjs from 'dayjs'
import { domAnimation, LazyMotion } from 'framer-motion'
import { HelmetProvider } from 'react-helmet-async'

import * as CONSTANT from 'common/constant'

import 'dayjs/locale/ja'
import App from './App'

dayjs.locale('ja')

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <LazyMotion features={domAnimation} strict>
          <ConfigProvider
            locale={jaJP}
            theme={{
              token: {
                colorPrimary: CONSTANT.PRIMARY_COLOR,
                borderRadius: 2,
                colorText: 'rgba(0, 0, 0, 0.6)',
                fontFamily:
                  "'メイリオ', Meiryo, 'ＭＳ ゴシック', 'MS Gothic', HiraKakuProN-W3, 'TakaoExゴシック', TakaoExGothic, 'MotoyaLCedar', 'Droid Sans Japanese', sans-serif",
              },
            }}
          >
            <App />
          </ConfigProvider>
        </LazyMotion>
      </HelmetProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)
