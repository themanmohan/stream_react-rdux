import _ from 'lodash'
import React from 'react'
import {connect} from 'react-redux'
import {fetchStream,updateStream} from '../../Action'
import StreamForm from './StreamForm'
 class StreamEdit extends React.Component{
     componentDidMount(){
        this.props.fetchStream(this.props.match.params.id)
     }

      onSubmit = (fromValue) => {
        this.props.updateStream(this.props.match.params.id,fromValue)
      }
    render(){
       console.log(this.props)
       if(!this.props.stream){
          return 'loading'
       }
        return(
          <div>
      <h3> edit Stream</h3>
      <StreamForm initialValues={_.pick(this.props.stream,'title','description')} onSubmit={this.onSubmit}/>
      </div>
    )
    }
    
}

const mapPropState=(state,ownProp)=>{
   return{
      stream:state.streams[ownProp.match.params.id]
   }
}

export default connect(mapPropState,{fetchStream,updateStream})(StreamEdit)