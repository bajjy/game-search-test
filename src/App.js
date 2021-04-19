import { 
  useState, 
  useEffect 
} from 'react';
import {
  useDispatch,
  useSelector,
  useStore
} from 'react-redux';

import Stores from './components/Stores';
import Games from './components/Games';
import './App.scss';

function App(props) {
  const store = useStore()
  const state = useSelector(store => store.reducer);
  const gameStores = useSelector(store => store.reducer.stores);
  const [gameName, setGameName] = useState([]);
  const [gameList, setGameList] = useState([]);
  const [selectedStores, setSelectedStores] = useState([]);

  const dispatch = useDispatch();
  const fetchStores = () => {
    dispatch({
      type: 'SPINNER',
      spinner: true
    });
    fetch('https://www.cheapshark.com/api/1.0/stores')
      .then(async r => {
        let stores = await r.json()
        dispatch({
          type: 'SPINNER',
          spinner: false
        });
        dispatch({
          type: 'FETCH_STORES',
          stores
        })
      })
  };

  const searchForGames = () => {
    let searchUrl = `https://www.cheapshark.com/api/1.0/deals?${ !!selectedStores.length ? 'storeID=' + selectedStores.join(',') + '&' : ''}title=${gameName}`;

    dispatch({
      type: 'SPINNER',
      spinner: true
    });
    fetch(searchUrl)
      .then(async r => {
        let games = await r.json()
        dispatch({
          type: 'SPINNER',
          spinner: false
        });
        setGameList(games)
      })
  };

  useEffect(() => {
    fetchStores()
  }, []);

  return (
    <main className="App">
      <header className="app-header">
        <div className="container">
          <img src="https://www.cheapshark.com/img/logo_image.png" className={state.spinner ? 'spin' : ''} alt="logo" />
        </div>
      </header>
      <article>
        <div className="container">
          <div className="search">
            <input 
              type="text" 
              value={gameName}
              onInput={e => setGameName(e.target.value)}
            />
            <button onClick={searchForGames}>search</button>
          </div>
          <Stores props={{stores: gameStores, selectedStores, setSelectedStores}} />
          <Games props={{gameList}} />
        </div>
      </article>
    </main>
  );
}

export default App;
