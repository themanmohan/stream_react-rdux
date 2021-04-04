import React from 'react'
import {connect} from 'react-redux'
import {signOut,signIn} from '../Action'
class GoogleAuth extends React.Component{
    
    componentDidMount(){
        window.gapi.load('client:auth2',()=>{
            window.gapi.client.init({
                clientId: '621341383182-ae609cbgkcrh3lfuo74v1ud9vp5nb655.apps.googleusercontent.com',
                scope:'email'
            }).then(()=>{
                this.auth=window.gapi.auth2.getAuthInstance()
               this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }
    onSignIn=()=>{
        this.auth.signIn()
    }
    onSignOut = () => {
        this.auth.signOut()
    }
     onAuthChange = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }else{
            this.props.signOut()
        }
     }
    renderAuthButton() {
        if (this.props.isSignedIn === null) {
               return <div> i dont know if we are signed in </div>
        }else if(this.props.isSignedIn){
              return <button onClick={this.onSignOut} className="ui red google button">
                <i className="google icon" />
                sign Out
              </button>
        }else{
              return <button onClick={this.onSignIn} className="ui red google button">
                <i className="google icon" />
                sign with google
              </button>
        }
    }
     render(){
         
    return(
        <div>{this.renderAuthButton()}
        </div>
    )
     }
}

const mapStateProps=(state)=>{
  
   return {isSignedIn:state.auth.isSignedIn}
}

export default connect(mapStateProps,{signIn,signOut
})(GoogleAuth)