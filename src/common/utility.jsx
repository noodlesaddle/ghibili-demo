import { useEffect, useRef } from 'react'

export const GET_ROUTE_BY_KEY = (routes, key) => {
  return routes.find((r) => r?.page === key)?.route
}

export const GET_SELECTED_KEY_BY_ROUTE = (routes, route) => {
  return routes.filter((r) => !r?.isSubMenu)?.find((r) => route?.includes(r?.route))?.page
}

export const GET_OPEN_KEY_BY_ROUTE = (routes, route) => {
  return routes.filter((r) => r?.isSubMenu)?.find((r) => route?.includes(r?.route))?.page
}

export const USE_IS_MOUNTED_REF = () => {
  const isMountedRef = useRef(null)

  useEffect(() => {
    isMountedRef.current = true

    return () => {
      isMountedRef.current = false
    }
  })

  return isMountedRef
}
