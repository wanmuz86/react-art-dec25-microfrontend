  import React from 'react'

  const Detail:React.FC<MicroAppProps> = (props) => {
    const handleSendData = () => {
   
      if (props.onDataReceived){
        console.log("Sending data to host....")
        props.onDataReceived('Data from micro app '+ new Date().toLocaleString())
      }

    }
    return (
      <div>
        Detail Page
        {
        props.initialData &&
        <p>Message from host: {props.initialData.message}</p> 
      }
       <button onClick={handleSendData}>Send Data to Host</button>
        
        </div>
      
    )
  }

  export default Detail