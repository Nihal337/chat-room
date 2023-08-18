import { Link } from "react-router-dom";
import { chatRooms } from "../../data/chatRooms";
import "./styles.css";

function Landing() {

    return (
        <>

          <h2> Choose a Chat Room Please...</h2>
          <ul className="chat-room-list">

             {chatRooms.map((chatRoom) => (

                <li key = {chatRoom.id} >
                    <Link to = {`/room/${chatRoom.id}`}>{chatRoom.title} </Link>
                </li>
             ))}
          </ul>

        </>
    )
}


export { Landing };