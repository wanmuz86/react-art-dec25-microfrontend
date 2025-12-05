  import React from 'react'

  const Detail:React.FC<MicroAppProps> = (props) => {
    return (
      <div>
        Detail Page
        {
        props.initialData &&
        <p>Message from host: {props.initialData.message}</p>
      }
        
        </div>
      
    )
  }

  export default Detail