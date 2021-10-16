import { useEffect, useState  } from 'react';
import './App.css';
import axios from 'axios';
import TableCoins from './components/TableCoins';
import { LinkedIn, GitHub, Instagram } from '@material-ui/icons'


function App() {

  const [coins, setCoins] = useState([])
  const [search, setSearch] = useState('')

  const getData = async () => {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1'
    )
    console.log(res.data)
    setCoins(res.data)
    
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div className="container">
      <div className="row">
        <input 
          type="text" 
          placeholder="Search a coin" 
          className="form-control bg-dark text-light border-0 mt-4 text-center" 
          onChange={e => setSearch(e.target.value)}
        />
        <h1>Coin market</h1>
        <TableCoins coins={coins} search={search} />
      </div>
      <div className="row">
        <h3>Adapted and enhanced by <a href="http://www.piotrmaciejewski.com" target="_blank"><b>Piotr Maciejewski</b></a></h3>
        <div className="socialContainer">
          <a href="https://github.com/petherEm" target="_blank">
            <GitHub className="social"/>
          </a>
          <a href="https://www.linkedin.com/in/piotrek-maciejewski" target="_blank">
            <LinkedIn className="social"/>
          </a>
        </div>
      </div>   
    </div>
  );
}

export default App;
