import React, {useState, useEffect} from "react"

import {useParams, Link} from "react-router-dom"

function Coin() {
  const { id } = useParams()
  const [crypto, setCrypto] = useState([])


    useEffect(() => {

        const fetchAPI = async () => {
        try {
            const response = await fetch(`https://api.coincap.io/v2/assets/${id}`);
            if (!response.ok) {
            throw new Error('Error')
            }
            const data = await response.json()
            setCrypto(data.data)
        } catch {
            throw new Error('Error')
        }
        };
        

        fetchAPI()

    }, [])

  return(
    <>
      <h1>Detalle de la tarea</h1>
      {crypto && (
        <div>
          <h2>{crypto.description}</h2>
          <p>ID: {crypto.id}</p>
          <p>Rank: {crypto.rank}</p>
          <p>Symbol: {crypto.symbol}</p>
          <p>Name: {crypto.name}</p>
          <p>Supply: {crypto.supply}</p>
          <p>Max Supply: {crypto.maxSupply}</p>
          <p>Market Cap USD: {crypto.marketCapUsd}</p>
          <p>Volume USD 24h: {crypto.volumeUsd24Hr}</p>
          <p>Price USD: {crypto.priceUsd}</p>
          <p>Change Percent 24h: {crypto.changePercent24Hr}</p>
          <p>VWap 24h: {crypto.vwap24Hr}</p>
          <p>Explorer: {crypto.explorer}</p>

          <Link to="/">Volver a la HOME</Link>
        </div>
      )}
    </>
  )
}
export default Coin