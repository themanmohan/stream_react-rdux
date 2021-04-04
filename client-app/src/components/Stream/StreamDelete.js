import React from 'react'
import  Model from '../model'
import history from '../../history'
import {
   fetchStream,
   deleteStream
} from '../../Action'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'
 class StreamDelete extends React.Component{
    componentDidMount(){
       this.props.fetchStream(this.props.match.params.id)
    }
    deleteAction() {
     return(  <React.Fragment>
       <button onClick={()=>this.props.deleteStream(this.props.match.params.id)} className="ui button negative">delete</button>
        <Link to="/" className="ui button ">Create</Link>
        </React.Fragment>
     )
    }
    renderContent(){
      if(!this.props.stream){
         return 'are you sure you want to delete the stream'
      }
       return `are you sure you want to delete the stream with title=${this.props.stream.title}`
    }

    render(){
      
    return(
      
       <Model title="Delete Stream" content={this.renderContent()} 
          actions={this.deleteAction()}
          onDismiss={()=>history.push("/")}
       />
       
      
    )
    }
}

const mapPropState = (state, ownProps) => {
   return {
      stream: state.streams[ownProps.match.params.id]
   }
}
export default connect(mapPropState, {
   fetchStream,
   deleteStream
})(StreamDelete)