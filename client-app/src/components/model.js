import React from 'react'
import ReactDom from 'react-dom'


const Model = ({
        title,
        content,
        actions,
        onDismiss
    }) => {
    return ReactDom.createPortal(
      <div  onClick = {
          onDismiss
      }
      className = "ui dimmer modals visible active" >
          <div  onClick = {
              (e) => e.stopPropagation()
          }
          className = "ui standard modal visible active" >
              <div className="header">{title}</div>
              <div className="content">
                  {content}
              </div>
              <div className="actions">
                {actions}
              </div>
          </div>
      </div>,
      document.getElementById("model")
    )
}


export default Model