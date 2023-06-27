import React, { useState, useEffect } from 'react'
import { isMobile } from 'react-device-detect'
const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    setPosition({ x: event.clientX, y: event.clientY })
  }

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <>
      {!isMobile ? (
        <div
          className='custom-cursor'
          style={{ left: `${position.x}px`, top: `${position.y}px` }}
        />
      ) : (
        ''
      )}
    </>
  )
}

export default CustomCursor
