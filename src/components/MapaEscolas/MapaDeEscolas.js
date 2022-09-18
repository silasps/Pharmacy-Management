import { useEffect, useState } from 'react'

export default function MapaDeEscolas() {

    const [escolas, setEscolas] = useState()

    useEffect(()=>{
        fetch("http://localhost:3001/escolas")
            .then((response) => response.json())
            .then((data) => {
                setEscolas(data);
            })
    }, [])
    
  return (
    <div>
      <h1>Mapa de Escolas</h1>
    </div>
  )
}
