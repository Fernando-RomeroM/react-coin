import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';

function Home() {

    const [crypto, setCrypto] = useState([])
  

    useEffect(() => {

        const fetchAPI = async () => {
        try {
            const response = await fetch(`https://api.coincap.io/v2/assets/`);
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


    console.log(crypto)


  return (
    <div>
      <h1>Hazte rico con los Coins</h1>
      <ul className="contenedor">
        {crypto.map((crypt, index) => <li className="barras" key={index}><Link key={index} to={`/coin/${crypt.id}`}>{crypt.name}</Link></li> )}
      </ul>

    </div>
  );
}

export default Home;

//{crypto.map((crypt, index) => <div key={index}> <p>{crypt.name}</p> </div>)}