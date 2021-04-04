import React from 'react'
import {
    Route,Switch
} from 'react-router-dom'
import Header from './Header'
import StreamCreate from './Stream/StreamCreate'
import StreamList from './Stream/StreamList'
import StreamShow from './Stream/StreamShow'
import StreamEdit from './Stream/StreamEdit'
import StreamDelete from './Stream/StreamDelete'


 const App=()=>{
    return(
       <div  className = "ui container" >
          <Header/>
          
           <div >
           <Switch>
               <Route path="/" exact component={StreamList} />
               <Route path="/streams/create" exact component={StreamCreate} />
               <Route path="/streams/:id" exact component={StreamShow} />
               <Route path="/streams/edit/:id" exact component={StreamEdit} />
               <Route path="/streams/delete/:id" exact component={StreamDelete} />
               </Switch>
           </div>
           
       
       </div>
    )
}

export default App