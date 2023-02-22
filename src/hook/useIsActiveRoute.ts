import { useLocation, matchRoutes } from 'react-router-dom'
import { useCallback } from 'react'

const useIsActiveRoute = (route: string) => {
  const location = useLocation()

  const isActiveRoute = useCallback(
    (path: string) => {
      const match = matchRoutes([{ path }], location.pathname)
      if (match) {
        return match.length > 0
      }
      return false
    },
    [location.pathname],
  )

  return isActiveRoute(route)
}

export default useIsActiveRoute
