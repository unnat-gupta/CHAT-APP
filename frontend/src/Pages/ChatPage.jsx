import React, { useEffect, useState } from "react";
import { ChatState } from "../Context/ChatProvider";
import { Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import MyChats from "../components/MyChats";
import SideDrawer from "../components/miscellaneous/SideDrawer";
import ChatBox from "../components/ChatBox";
// import axios from "axios";

// const ChatPage = () => {
//   const [chats, setChats] = useState([]);

//   const fetchChats = async () => {
//     const { data } = await axios.get("/api/chat");
//     setChats(data);
//   };

//   useEffect(() => {
//     fetchChats();
//   }, []);

//   return (
//     <div>
//       {chats.map(
//         (chat) => (
//           <div key={chat._id}>{chat.chatName}</div>
//         )
//         // console.log(chat.chatName)
//       )}
//     </div>
//   );
// };

const ChatPage = () => {
  const { user } = ChatState();
  const [fetchAgain, setFetchAgain] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    if (user == null) {
      navigate("/");
    }
  }, [navigate, user]);

  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
      >
        {user && <MyChats fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
