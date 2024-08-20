import { LoginPage } from '../auth'
import { Route, Routes } from 'react-router-dom'
import { HeroesRoutes } from '../heroes'
import { PrivateRoute } from './PrivateRoute'
import { PublicRoute } from './PublicRoute'


export const AppRouter = ()  => {
    return (
        <>
            <Routes>

                <Route path='login' element=
                    {
                        <PublicRoute>
                            <LoginPage></LoginPage>
                        </PublicRoute>
                    }>
                </Route>

                <Route path='/*' element=
                    {
                        <PrivateRoute>
                            <HeroesRoutes></HeroesRoutes>
                        </PrivateRoute>
                    }>
                </Route>
                {/* <Route path='/*' element={<HeroesRoutes></HeroesRoutes>}></Route> */}
            </Routes>
        </>
    )
};