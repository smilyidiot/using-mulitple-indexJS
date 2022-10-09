// Write your code here
import './index.css'

const Logout = props => {
  const {onClickButton} = props
  return (
    <button className="button" type="button" onClick={onClickButton}>
      Logout
    </button>
  )
}

export default Logout
