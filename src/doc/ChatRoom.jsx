import React, { useEffect, useState } from 'react'
import createConnection from './Chat'

function ChatRoom(props) {
    const  [serverUrl,setServerUrl] = useState("http://localhost:1234")
    let { roomId } = props

    useEffect(() => {
        const connection = createConnection(serverUrl, roomId)
        connection.connect() // mount  stage

        return () => {
            connection.disconnect() // unmount
        }
    },[roomId,serverUrl])

  return (
    <div className='container'>
        <div className="row"> 
            <div className="col-md-12 text-center">
                <h3 className="text-success">Server URL: {''} </h3>

                <div className="form-group">
                    <input type="text" name="" id="" value={serverUrl} className="form-control" />
                </div>
                <h1 className="text-success display-1">
                    Welcome to the { props.roomId} room!
                </h1>
            </div>
        </div>      
    </div>
  )
}

export default ChatRoom
