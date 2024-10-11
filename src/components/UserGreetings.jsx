import React, { Component } from 'react'
 class UserGreetings extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogggedIn : false
      }
    }
  render() {
    if (this.state.isLoggedIn) {
        return (
            <div>
                Welcome User
            </div>
        )
    } else {
        return (
            <div>
                Welcome Guest
            </div>
        )
    }
   // return (
     //   <div>
       //     <div>
       // Welcome User
       // </div>
       // <div> Welcome Guest </div>
       // </div>
      
    //)
  }
}

export default UserGreetings