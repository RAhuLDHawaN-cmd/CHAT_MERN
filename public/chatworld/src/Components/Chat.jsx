import React,{useState,useEffect} from 'react'
import axios from "axios";
import styled from "styled-components";
import { allUsersRoute, host } from "../utils/apiRoutes";
import { useNavigate } from "react-router-dom";
import Contacts from './Contacts';
import Welcome from './Welcome';
export default function Chat() {

    const [contacts, setContacts] = useState([]);
    const [currentUser,setCurrentUser]=useState(undefined);
    const [currentChat, setCurrentChat] = useState(undefined);

    const handleChatChange = (chat) => {
        setCurrentChat(chat);
      };


   useEffect(()=>{


    async function test1(){
    if(!localStorage.getItem("chatappUser")) {
        window.location.href="/login"
   }
   else
   {
    setCurrentUser( await JSON.parse(
        localStorage.getItem("chatappUser")
    )
    )
   }
}
test1()
},[])

useEffect( () => {

    async function test2(){
    if (currentUser) {
      if (currentUser.isAvatarImageSet) {
        const data = await axios.get(`${allUsersRoute}/${currentUser._id}`);
        setContacts(data.data);
        // console.log(contacts)
      } else {
        window.location.href="/setAvatar";
      }
    }
  }
  test2()
}, [currentUser]);

  return (
    <>
      <Container>
      <h1>CONTACTS</h1>
        <div className="container">
            <Contacts contacts={contacts} currentUser={currentUser} changeChat={handleChatChange}   />
      <Welcome/>
        
        </div>
      </Container>
    </>
  )
}


const Container = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  background-color: #131324;
  .container {
    height: 85vh;
    width: 85vw;
    background-color: #00000076;
    display: grid;
    grid-template-columns: 25% 75%;
    @media screen and (min-width: 720px) and (max-width: 1080px) {
      grid-template-columns: 35% 65%;
    }
  }
`;