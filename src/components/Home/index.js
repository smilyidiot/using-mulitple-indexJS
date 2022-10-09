// Write your code here
import {Component} from 'react'
import './index.css'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {userStatus: true}

  onClickButton = () =>
    this.setState(prevState => ({userStatus: !prevState.userStatus}))

  render() {
    const {userStatus} = this.state

    return (
      <div className="bg-cont">
        <div className="card">
          <Message userStatus={userStatus} />
          {userStatus ? (
            <Login onClickButton={this.onClickButton} />
          ) : (
            <Logout onClickButton={this.onClickButton} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
