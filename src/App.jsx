import './App.css'

import Fact from './components/Fact'
import IconCat from './components/IconCat'

import { useCatImage } from './hooks/useCatImage'
import { useCatFact } from './hooks/useCatFact'

function App () {
  const { fact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ fact })
  
  const handleNewFact = () => {
    refreshFact()
  }

  return (
    <main className='cat-main--content'>
      {fact && <Fact text={fact} />}
      <button className='cat-main--button' onClick={handleNewFact}>
        <span>
          Get new fact
        </span>
        <IconCat></IconCat>
      </button>
      {imageUrl &&
        <picture className='img-random'>
          <img src={`${imageUrl}`} alt={`Image extract using the first three words for ${fact}`} />
        </picture>}
    </main>
  )
}
export default App
