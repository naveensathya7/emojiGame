// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, isGameInProgress, topScore} = props

  return (
    <div className="navbar">
      <div className="logo">
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1>Emoji Game</h1>
      </div>
      {isGameInProgress && (
        <div className="score-items">
          <p className="scores">Score: {score}</p>
          <p>Top Score: {topScore}</p>
        </div>
      )}
    </div>
  )
}

export default NavBar
