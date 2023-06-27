import React from 'react'

import { Result } from 'antd'

import * as CONSTANT from 'common/constant'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null, errorInfo: null }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error,
      errorInfo,
      hasError: true,
    })
  }

  render() {
    const { hasError, error, errorInfo } = this.state
    const { children } = this.props

    if (hasError) {
      return (
        <div className='flex h-screen'>
          <div className='m-auto'>
            <Result status='500' title={CONSTANT.ERROR_SYSTEM_MSG} />
            <div className='p-4 bg-gray-100 rounded'>
              <p className='text-red-400 font-bold'>
                {import.meta.env.MODE !== 'production' && error ? error.toString() : ''}
              </p>
              <p className='text-red-400 whitespace-pre-wrap'>
                {import.meta.env.MODE !== 'production' && errorInfo
                  ? errorInfo?.componentStack || ''
                  : ''}
              </p>
            </div>
          </div>
        </div>
      )
    }

    return children
  }
}

export default ErrorBoundary
