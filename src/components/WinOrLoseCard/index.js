// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {score, isWon, onClickPlayAgain} = props
  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE
  const gameStatus = isWon ? 'You Won' : 'You Lose'
  const scoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-card">
      <div className="score-card">
        <h1 className="heading">{gameStatus}</h1>
        <p className="desc">{scoreLabel}</p>
        <p className="score">{score}/12</p>
        <button
          onClick={onClickPlayAgain}
          type="button"
          className="playAgain-btn"
        >
          Play Again
        </button>
      </div>
      <img className="img" src={imageUrl} alt="win or lose" />
    </div>
  )
}

export default WinOrLoseCard
