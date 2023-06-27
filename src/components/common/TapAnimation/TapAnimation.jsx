import { m } from 'framer-motion'

const ANIMATION_TAP_HOVER_VARIANT = {
  tap: {
    scale: 0.9,
  },
}

const TapAnimation = (props) => {
  const { children, onClick, className, style } = props

  return (
    <m.div
      whileTap='tap'
      variants={ANIMATION_TAP_HOVER_VARIANT}
      onClick={onClick}
      className={className}
      style={style}
    >
      {children}
    </m.div>
  )
}

export default TapAnimation
