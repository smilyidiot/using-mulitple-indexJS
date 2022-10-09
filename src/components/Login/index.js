// Write your code here
import './index.css'

const Login = props => {
  const {onClickButton} = props
  return (
    <button className="button" type="button" onClick={onClickButton}>
      Login
    </button>
  )
}

export default Login
