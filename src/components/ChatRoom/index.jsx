import {Link , useParams } from "react-router-dom" ;
import { chatRooms } from "../../data/chatRooms";
import "./styles.css" 
import { MessageInput } from "../MessageInput";
import { MessageList } from "../MessageList";



function ChatRoom() {

   
      const param = useParams() ;

      const room = chatRooms.find((x) => x.id == param.id) ;

      if(!room) {

          // 404 error
          return alert("error")
      }


    return (
      <>
        <h1>{room.title}</h1>

        <div>
          <Link to="/">⬅️ Back to all rooms</Link>
        </div>
        <div className="messages-container">
          <MessageList roomId={room.id} />
          <MessageInput roomId={room.id} />
        </div>
      </>
    );
}

export {ChatRoom} ;