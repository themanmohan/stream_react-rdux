import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {fetchStreams} from '../../Action'
 class  StreamList extends React.Component{
    componentDidMount(){
       this.props.fetchStreams()
    }

    renderCreate(){
       if(this.props.isSignedIn){
          return(
             <div style={{textAlign:'right'}}>
                <Link className="ui button primary" to="/streams/create">Create stream</Link>
             </div>
          )
       }
    }

    renderAdmiin(stream){
       if (stream.userId === this.props.currentUserId) {
              return (
                 <div className="right floated content">
                  
                    <Link to ={`/streams/edit/${stream.id}`} className="ui button primary">
                         Edit
                    </Link>
                    <Link  to= {`/streams/delete/${stream.id}` }
                    className = "ui button negative" >
                         delte
                    </Link>
                 </div>
              )
       }
    }
    renderList(){
       return this.props.streams.map(stream=>{
          return(
             <div className="item" key={stream.id}>
              {
                 this.renderAdmiin(stream)
              }
               <i className="large middle aligned icon camera" />
               
               <div className="content">
               <Link  to = {
                  `/streams/${stream.id}`
               } >
                  {stream.title}
                  </Link>
                  <div className="description">
                     {stream.description}
                  </div>
                 
               </div>
               
             </div>
          )
       })
    }
    render(){
      
         return(
       <div>
       <h2>Stream</h2>
       <div className="ui celled list">
         {this.renderList()}
         </div>
         {
            this.renderCreate()
         }
       </div>
    )
    }
  
}

const mapPropState=(state)=>{
    return {streams:Object.values(state.streams),
      currentUserId:state.auth.userId,
      isSignedIn:state.auth.isSignedIn
   }
}

export default connect(mapPropState,{fetchStreams})(StreamList)