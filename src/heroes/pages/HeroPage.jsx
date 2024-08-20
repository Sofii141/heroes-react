import React, { useMemo } from 'react'
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../helpers';

/*
useMemo = memorizar valores
useCallBack = memorizar funciones
*/
export const HeroPage = () => {

    const { heroId } = useParams();
    // Cuando el id cambie se vuelve a disparar la funcion 
    const hero = useMemo(() => getHeroById(heroId), [heroId]);
    const navigate = useNavigate();

    if (!hero) {
        return <Navigate to='/marvel'></Navigate>
    }

    const handleNavigateBack = () => {
        // hero.publisher === 'Marvel Comics' ? navigate('/marvel') :
        //     navigate('/dc')
        navigate(-1);
    }

    return (
        <div className='row mt-5 animate__animated animate__fadeInLeft'>
            <div className="col-4">
                <img src={`/assets/heroes/${heroId}.jpg`}
                    alt={hero.superhero}
                    className='img-thumbnail'>
                </img>
            </div>

            <div className="col-8">
                <h3>{hero.superhero}</h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'>
                        <b>Alter ego:</b>
                        {hero.alter_ego}
                    </li>

                    <li className='list-group-item'>
                        <b>Publisher:</b>
                        {hero.publisher}
                    </li>

                    <li className='list-group-item'>
                        <b>First appearance:</b>
                        {hero.first_appearance}
                    </li>
                </ul>

                <h5 className='mt-3'>Characters</h5>
                <p>{hero.characters}</p>

                <button className='btn btn-outline-primary'
                    onClick={handleNavigateBack}>
                    Back
                </button>
            </div>
        </div>
    );
};