import { HeroList } from '../components';

export const MarvelPage = () => {
  return (
    <>
      <h1 className='my-4 display-5'>Marvel Comics</h1>

      <hr />

      <HeroList publisher='Marvel Comics'>

      </HeroList>
    </>
  )
}