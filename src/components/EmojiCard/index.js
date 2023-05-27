// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {clickEmoji, emojiDetails} = props
  const {id, emojiUrl, emojiName} = emojiDetails
  const emojiCount = () => {
    clickEmoji(id)
  }
  return (
    <li className="list-item">
      <button type="button" className="emoji-button" onClick={emojiCount}>
        <img className="img" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
