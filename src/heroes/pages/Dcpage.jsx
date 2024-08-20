import React from 'react'
import { HeroList } from '../components'
import { getHeroesByPublisher } from '../helpers'

export const Dcpage = () => {

  // const heroesList = getHeroesByPublisher;

  return (
    <>
      <h1 className='my-4 display-5'>Dc Comics</h1>
      <hr />

      <HeroList publisher='DC Comics'>

      </HeroList>
    </>
  )
}
