import { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer';
import { types } from '../types/types';

// componente que proporciona los valores al contexto

// const initialState = {
//     logged: false,
// };

const init = () => {
    const user = JSON.parse(localStorage.getItem('user'));

    return {
        //si user existe 
        logged: !!user,
        user: user,
    }
}

export const AuthProvider = ({ children }) => {

    // init establece las propiedades(user) 
    const [authState, dispatch] = useReducer(authReducer, {}, init);

    const login = (name = '') => {

        const user = { id: 'ABC', name };

        const action = {
            type: types.login,
            //Usuario a almacenar
            payload: {
                id: 'ABC',
                name: name
            },
        };

        localStorage.setItem('user', JSON.stringify(user));

        dispatch(action);
    };

    const logout = () => {
        localStorage.removeItem('user');

        const action = {
            type: types.logout,
        };
        //espera la accion
        dispatch(action);
    }

    return (
        <AuthContext.Provider value={{
            ...authState,

            //Methods
            login: login,
            logout: logout,
        }}>
            {children}
        </AuthContext.Provider>
    )
} 