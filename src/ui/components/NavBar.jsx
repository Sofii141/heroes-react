import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/context/AuthContext';

export const NavBar = () => {

    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);


    const handleLogout = () => {
        logout();
        
        navigate('/login', {
            // no regresar al historial anterior
            replace: true
        });
    }

    return (
        <nav className='p-2 navbar navbar-expand-sm navbar-dark bg-dark'>
            <Link className='navbar-brand'>
                Asociaciones
            </Link>

            <div className='navbar-collapse'>
                <div className='navbar-nav'>

                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to='/marvel'>
                        Marvel
                    </NavLink>

                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to='/dc'>
                        DC
                    </NavLink>

                    <NavLink className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                        to='/search'>
                        Search
                    </NavLink>
                </div>
            </div>

            <div className='navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end'>
                <ul className='navbar-nav ml-auto'>
                    <span className='nav-item nav-link text-primary'>
                        {user?.name}
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={handleLogout}>
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
};