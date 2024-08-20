import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter, useNavigate } from "react-router-dom";
import { SearchPage } from "../../../src/heroes/pages/SearchPage";

const mockedUseNavigate = jest.fn(); 

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

describe('Pruebas en SearchPage', () => {

    test('Debe de mostrarse correctamente con valores por defecto', () => {

        const { container } = render(
            <MemoryRouter>
                <SearchPage>

                </SearchPage>
            </MemoryRouter>
        );

        // expect( container ).toMatchSnapshot();

    });

    test('Debe de mostrarse batman y el input con el valor queryString', () => {

        const { container } = render(
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <SearchPage>

                </SearchPage>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        expect(input.value).toBe('batman');

        const img = screen.getByRole('img');
        expect(img.src).toBe('http://localhost/heroes/dc-batman.jpg');

        const alert = screen.getByLabelText('alert-danger');

        expect(alert.style.display).toBe('none');
    });

    test('Debe de mostrar un error si no se encuentra el hero (batman123)', () => {


        render(
            <MemoryRouter initialEntries={['/search?q=batman123']}>
                <SearchPage>
                </SearchPage>
            </MemoryRouter>
        );

        const alert = screen.getByLabelText('alert-danger');
        expect(alert.style.display).toBe('');

    });

    test('Debe de  llamar el navigate a la pantalla nueva', () => {

        const inputValue = 'superman';

        render(
            <MemoryRouter initialEntries={['/search']}>
                <SearchPage>
                </SearchPage>
            </MemoryRouter>
        );

        const input = screen.getByRole('textbox');
        fireEvent.change(input, { target: { name: 'searchText', value: inputValue } });

        const form = screen.getByLabelText('form');
        fireEvent.submit( form );

        expect( mockedUseNavigate ).toHaveBeenCalledWith(`?q=${inputValue}`);
    });
});