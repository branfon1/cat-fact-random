import { useState, useEffect } from 'react'

import { getRandomFact } from '../services/facts'

export function useCatFact() {
  const [fact, setFact] = useState();

  const refreshFact = () => {
    getRandomFact().then((fact) => setFact(fact));
  };

  // Obtener la cita Random al cargar la pagina
  useEffect(refreshFact, []);

  return { fact, refreshFact };
}
