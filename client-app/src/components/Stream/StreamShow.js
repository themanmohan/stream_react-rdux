
import React from 'react'
import {connect} from 'react-redux'
import flv from 'flv.js'
import {fetchStream} from '../../Action'
 class StreamShow extends React.Component{
    constructor(props){
       super(props)

       this.videoRef=React.createRef();
    }
    componentDidMount() {
       this.props.fetchStream(this.props.match.params.id)
       this.buildPlayer()
    }
    componentDidUpdate(){
       this.buildPlayer()
    }
    componentWillUnmount(){
       this.player.destroy()
    }
    buildPlayer(){
       if(this.player || !this.props.stream){
          return;
       }
        this.player = flv.createPlayer({
           type: 'flv',
           url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
        })
        this.player.attachMediaElement(this.videoRef.current)
        this.player.load()
        
    }
    render(){
       console.log(this.props.stream)
       if(!this.props.stream){
          return "loading ..."
       }
       const {title,description}=this.props.stream
    return(
       
       <div>
       <video ref={this.videoRef} style={{width:'100%'}} controls />
         <h3>{title}</h3>
         <p>{description}</p>
       </div>
    )
    }
  
}

const mapPropState = (state, ownProp) => {
   return {
      stream: state.streams[ownProp.match.params.id]
   }
}

export default connect(mapPropState, {
   fetchStream
})(StreamShow)