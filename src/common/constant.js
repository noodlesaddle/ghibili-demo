import { useEffect, useRef } from 'react'

/* ROUTES */
export const ADMIN_LANDING_ROUTE = '/'
export const ADMIN_SAMPLE_ROUTE = '/sample'
export const BROWSE_MOVIES_ROUTE = '/movies'
export const BROWSE_MOVIES_DETAILS_ROUTE = '/movieDetails'

export const LINE_ACCESS_ROUTE = '/line-access'
export const LINE_FRIEND_ROUTE = '/line-friend'
export const NOT_FOUND_ROUTE = '/404'
export const PERMISSION_ERROR_ROUTE = '/401'

/* PAGES */

export const PAGE_BROWSE_MOVIES_ROUTE = 'サンプル'

export const ROUTES = [{ route: BROWSE_MOVIES_ROUTE, page: BROWSE_MOVIES_ROUTE }]

/* ALERT MESSAGES */
export const ERROR_SYSTEM_MSG = 'システムエラー'
export const ERROR_SESSION_MSG = 'もう一度ログインしてください'
export const ERROR_401_MSG = '許可が足りないです。'
export const ERROR_404_MSG = 'アクセスしたページは存在しません'
export const SUCCESS_LOGIN_MSG = 'ログインしました。'
export const SUCCESS_LOGOUT_MSG = 'ログアウトしました。'

/* RESPONSE TYPE */
export const RESPONSE_PERMISSION_ERROR = 401
export const RESPONSE_SESSION_ERROR = 403
export const RESPONSE_NOT_ACCEPTABLE_ERROR = 406
export const RESPONSE_CONFLICT_ERROR = 409
export const RESPONSE_SYSTEM_ERROR = 500

/* MESSAGE KEY */
export const MESSAGE_SESSION_ERROR_KEY = 'SESSION_ERROR'
export const MESSAGE_SYSTEM_ERROR_KEY = 'SYSTEM_ERROR'

// SCREEN SIZE
export const XL_SCREEN_SIZE = 1224
export const LG_SCREEN_SIZE = 992
export const MD_SCREEN_SIZE = 768
export const SM_SCREEN_SIZE = 576

/* THEME COLOR */
export const PRIMARY_COLOR = '#fa541c'
export const PRIMARY_LIGHT_COLOR = '#ffd8bf'

export const ANIMATION_VARIANT_STAGGER_CONTAINER = {
  hidden: {
    transition: {
      staggerChildren: 0.01,
      staggerDirection: -1,
      when: 'afterChildren',
    },
  },
  show: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: 1,
      when: 'beforeChildren',
    },
  },
}

export const ANIMATION_VARIANT_STAGGER_ITEM = {
  hidden: {
    opacity: 0,
    transition: { type: 'linear' },
  },
  show: (custom) => ({
    opacity: 1,
    transition: { type: 'linear' },
  }),
}
export function USE_IS_MOUNTED_REF() {
  const isMountedRef = useRef(null)

  useEffect(() => {
    isMountedRef.current = true
    return () => (isMountedRef.current = false)
  })

  return isMountedRef
}
