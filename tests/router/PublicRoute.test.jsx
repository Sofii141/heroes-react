import { render, screen } from '@testing-library/react'
import { PublicRoute } from '../../src/router/PublicRoute';
import { AuthContext } from '../../src/auth';
import { MemoryRouter, Route, Routes } from 'react-router-dom';

describe('Pruebas en PublicRoute', () => {

    test('Debe de mostrar el children si no esta Autenticado', () => {

        const contextValue = {
            logged: false,
        }

        render(
            <AuthContext.Provider value={contextValue}>
                <PublicRoute>
                    <h1>Ruta Publica</h1>
                </PublicRoute>
            </AuthContext.Provider>
        );

        expect(screen.getByText('Ruta Publica')).toBeTruthy();
    });

    test('debe de navegar si esta autenticado', () => {

        const contextValue = {
            logged: true,
            user: {
                name: 'Ana sofi',
                id: 'ABC123',
            }
        };

        render(
            <AuthContext.Provider value={contextValue}>
                {/* simular la navegación de una página específica  */}
                <MemoryRouter initialEntries={['/login']}>

                    <Routes>
                        <Route path='login' element={
                            <PublicRoute>
                                <h1>Ruta Publica LOGIN</h1>
                            </PublicRoute>
                        }></Route>

                        {/* Ruta protegida */}
                        <Route path='marvel' element={<h1>Pagina Marvel</h1>}></Route>
                    </Routes>

                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect( screen.getByText('Pagina Marvel') ).toBeTruthy(); 

    });
});