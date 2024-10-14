import React, { Component } from 'react'
 class UserGreetings extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogggedIn : false
      }
    }
  render() {
    return (
      <div> {this.state.isLoggedIn ? <div> Welcome User </div> : <div> Welcome Guest </div>} </div>

    )
    //return(
     // let message 
     // if (this.state.isLogggedIn) {
     //   message = <div>Welcome User</div>
     // } else {
     //   message = <div>Welcome Guest</div>
     // }
    //)
    //if (this.state.isLoggedIn) {
       // return (
          //  <div>
           //     Welcome User
           // </div>
      //  )
    //} else {
        //return (
          //  <div>
          //      Welcome Guest
          //  </div>
       // )
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


export default UserGreetings