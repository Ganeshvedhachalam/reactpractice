import React from 'react'

const Alert = ( {children,onclose}) => {
  return (
    <div className="alert alert-primary" role="alert">
      <strong style={{color:"yellow"}} >{children} </strong>
      <button onClick={onclose} type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>

      
    </div>
  )
}

export default Alert
