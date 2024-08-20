// import './HeroCard.css'
import { Link } from 'react-router-dom'

const CharactersByHero = ({ alter_ego, characters }) => {
    return (alter_ego === characters) ? (<></>) : (<p>{characters}</p>)
}

export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters, }) => {

    const heroImageUrl = `/heroes/${id}.jpg`;

    // const charactesByHero = (<p>{characters}</p>);

    return (
        <div className='custom-transition my-3 col animate__animated animate__fadeIn custom-transition'>
            <div className="card card-custom p-3 shadow ">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className='card-img' alt={superhero}></img>
                    </div>

                    <div className='col-8'>
                        <div className='card-body'>
                            <h5 className='card-title'>{superhero}</h5>
                            <p className='card-text'>{alter_ego}</p>

                            {/* {
                                (alter_ego !== characters) && charactesByHero
                            } */}

                            <CharactersByHero characters={characters} alter_ego={alter_ego}></CharactersByHero>

                            <p className='card-text'>
                                <small className='text-muted'>{first_appearance}</small>
                            </p>

                            <Link to={`/hero/${id}`}>
                                More...
                            </Link>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
