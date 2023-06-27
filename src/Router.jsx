import { lazy, Suspense } from 'react'

import { AnimatePresence } from 'framer-motion'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import ErrorBoundary from 'components/common/ErrorBoundary'
import TopProgressBar from 'components/common/TopProgressBar'
import * as CONSTANT from 'common/constant'

const MinimalLayout = lazy(() => import('layouts/Minimal'))
const AdminMainLayout = lazy(() => import('layouts/AdminMain'))

const BrowseMoviesView = lazy(() => import('views/Admin/Movies/BrowseMovies'))
const BrowseMoviesDetailsView = lazy(() => import('views/Admin/MovieDetails'))
const NotFoundView = lazy(() => import('views/NotFound'))

const Router = () => {
  const location = useLocation()

  return (
    <ErrorBoundary>
      <Suspense fallback={<TopProgressBar />}>
        <AnimatePresence mode='wait'>
          <Routes key={location.pathname} location={location}>
            <Route path='/' element={<Navigate replace to={CONSTANT.BROWSE_MOVIES_ROUTE} />} />
            <Route
              path={CONSTANT.BROWSE_MOVIES_ROUTE}
              element={
                <AdminMainLayout>
                  <BrowseMoviesView />
                </AdminMainLayout>
              }
            />
            <Route
              path={`${CONSTANT.BROWSE_MOVIES_DETAILS_ROUTE}/:id`}
              element={
                <AdminMainLayout>
                  <BrowseMoviesDetailsView />
                </AdminMainLayout>
              }
            />

            <Route
              path={CONSTANT.NOT_FOUND_ROUTE}
              element={
                <MinimalLayout>
                  <NotFoundView />
                </MinimalLayout>
              }
            />
            <Route path='*' element={<Navigate replace to={CONSTANT.NOT_FOUND_ROUTE} />} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </ErrorBoundary>
  )
}

export default Router
