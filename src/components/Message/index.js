// Write your code here

const Message = props => {
  const {userStatus} = props
  const message = userStatus ? 'Please Login' : 'Welcome User'

  return <h1 className="head">{message}</h1>
}

export default Message
