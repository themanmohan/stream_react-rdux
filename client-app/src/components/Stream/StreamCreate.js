import React from 'react'
import {connect} from 'react-redux'
import {createStream} from '../../Action'
import StreamForm from './StreamForm'
 class StreamCreate extends React.Component{

 
    onSubmit= (fromValue)=>{
        this.props.createStream(fromValue)
    }
    render(){  
        return(
           <div>
      <h3>Stream</h3>
      <StreamForm onSubmit={this.onSubmit}/>
      </div>
    )
}
    }
   
    

export default connect(null,{createStream})(StreamCreate)