import { useState, useEffect } from 'react'

import { CAT_ENDPOINT_IMG_URL, CAT_PREFIX_IMAGE_URL } from '../environment/environment'

export function useCatImage ({ fact }) {
    const [imageUrl, setImageUrl] = useState()
  
    // Recuperamos la imagen cada vez que tenemos cita nueva
    useEffect(() => {
      if (!fact) return
      
      setImageUrl('/src/assets/loading.gif')
      const threeFirstWords = fact.split(' ', 3).join(' ')
      const apiCat = CAT_ENDPOINT_IMG_URL.replace('$threeFirstWords#', threeFirstWords)
      fetch(apiCat)
        .then(res => res.json())
        .then(({ url }) => setImageUrl(`${CAT_PREFIX_IMAGE_URL}${url}`))
    }, [fact])
  
    return { imageUrl }
  }