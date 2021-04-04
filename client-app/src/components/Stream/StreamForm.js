import React from 'react'
import {Field,reduxForm} from 'redux-form'

 class StreamForm extends React.Component{

   renderError({error,touched}){
         if(error&&touched){
            return(
               <div className="ui error message">
                  <div className="header">{error}</div>
               </div>
            )
         }
              
      }
    renderInput=({input,label,meta})=>{
   const className=`field ${meta.error && meta.touched?'error':''} `
        return <div className={className}>
        <label>{label}</label>
           <input {...input} />
          {this.renderError(meta)}
        </div>
    }
    onSubmit= (fromValue)=>{
        this.props.onSubmit(fromValue)
    }
    render(){  
        return(
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
         <Field name="title" component={this.renderInput} label="enter title" />
         <Field name="description" component={this.renderInput} label="enter description"  />
         <button className="ui button primary">submit</button>
      </form>
    )
}
    }
   
    const validate=formalues=>{
      
       const errors={};
       if (!formalues.title) {
          errors.title="pyou must enter title"
       }
       if(!formalues.description){
          errors.description = "pyou must enter description"
       }
       return errors
    }

export default reduxForm({
   form:'streamForm',
   validate
})(StreamForm)