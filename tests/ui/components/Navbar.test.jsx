import { AuthContext } from "../../../src/auth/context/AuthContext";
import { MemoryRouter, useNavigate } from 'react-router-dom'
import { NavBar } from "../../../src/ui/components/NavBar";
import { screen, render, fireEvent } from '@testing-library/react'

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en navBar', () => {

    const contextValue = {
        logged: true,
        user: {
            name: 'ana sofia'
        },
        logout: jest.fn()
    }

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el nombre del usuario', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <NavBar>
                    </NavBar>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(screen.getByText('ana sofia')).toBeTruthy();
    });

    test('Debe de llamar al logout y navigate cuando se hace click en el boton', () => {

        render(
            <AuthContext.Provider value={contextValue}>
                <MemoryRouter>
                    <NavBar>
                    </NavBar>
                </MemoryRouter>
            </AuthContext.Provider>
        );

        const logoutBtn = screen.getByRole('button');
        fireEvent.click(logoutBtn);

        expect(contextValue.logout).toHaveBeenCalled();
        expect(mockedUseNavigate).toHaveBeenCalledWith("/login", { "replace": true });
    });
});