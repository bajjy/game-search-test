

export default function Games(props) {
  const {
    gameList
  } = props.props;
  console.log(gameList)
  return (
    <div className="Games">
      {
        gameList.map(game => <div key={game.dealID} className="game">
          <div className="title">
              {game.title}
            </div>
          <div className="info">
            <img src={game.thumb} alt="" />
            <div className="scores">
              
              <div className="price">
                $ {game.normalPrice}
              </div>
              {!!game.metacriticLink && <>
                <div className="score">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30px" viewBox="0 0 300 275" version="1.1">
                    <polygon fill="orange" stroke="orange" stroke-width="10" color="orange" points="150,25 179,111 269,111 197,165  223,251 150,200 77,251 103,165 31,111 121,111"/>
                  </svg>
                  {game.metacriticScore}  
                </div>
                <a href={'https://www.metacritic.com' + game.metacriticLink}>details on metacritic</a>
                </>
              }
            </div>
          </div>
        </div>)
      }
    </div>
  );
}
