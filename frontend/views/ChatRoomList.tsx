import React, { useEffect, useState } from 'react';
import { ChatEndPoint } from 'Frontend/generated/endpoints'; // Import the generated endpoints
import { HorizontalLayout } from '@hilla/react-components/HorizontalLayout.js';
import { VerticalLayout } from '@hilla/react-components/VerticalLayout.js';
import type User from 'Frontend/generated/com/example/application/data/entity/User';
import type ChatRoom from 'Frontend/generated/com/example/application/data/entity/ChatRoom'; // Import the generated ChatRoom type
import { TextFieldChangeEvent } from '@vaadin/text-field/src/vaadin-text-field.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { Button } from '@hilla/react-components/Button.js';
import { Avatar } from '@hilla/react-components/Avatar.js';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@hilla/react-components/Icon.js';
import { useParams } from 'react-router-dom';
import UserRecordModel from 'Frontend/generated/com/example/application/data/service/UserService/UserRecordModel';
import RoomRecordModel from 'Frontend/generated/com/example/application/data/endpoints/ChatEndPoint/RoomRecordModel';
import RoomRecord from 'Frontend/generated/com/example/application/data/endpoints/ChatEndPoint/RoomRecord';
import UserRecord from 'Frontend/generated/com/example/application/data/service/UserService/UserRecord';
import { UserEndPoint } from 'Frontend/generated/endpoints';
import { EndpointValidationError } from '@hilla/frontend';
const avatarStyle = {
  height: '64px',
  width: '64px',
};

type ChatRoomWithUser = {
  chatRoom: ChatRoom;
  otherUser: User;
};

export function ChatRoomList() {
  const {account} = useParams();
  const navigate = useNavigate();
  const [chatRoomsWithUsers, setChatRoomsWithUsers] = useState<ChatRoomWithUser[]>([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    if (account) {

      fetchUserAndChatRooms(account);
    }
  }, [account]);
  async function checkUrl (account: string){
    try {
    const  cur = await UserEndPoint.getCurrentUser();
    }catch (error) {
      if (error instanceof EndpointValidationError) {
        (error as EndpointValidationError).validationErrorData.forEach(
          ({ parameterName, message }) => {
            console.warn(message); 
          }
        );
        //redirect
      }
    }
  }
  async function fetchUserAndChatRooms(account: string) {
    try {
      const account = await UserEndPoint.getCurrentUser();
      const rooms: RoomRecord[] = await ChatEndPoint.getUserChatRooms(account);
      const roomsWithUsers = await Promise.all(
        rooms.map(async (room) => {
          if (room.id !== undefined) {
            
            const otherUser: UserRecord = await ChatEndPoint.getOtherUserInChatRoom(room.id, account);
            return { chatRoom: room, otherUser };
          }
          return null;
        })
      );
      setChatRoomsWithUsers(roomsWithUsers.filter(room => room !== null) as ChatRoomWithUser[]);
    } catch (error: any) {
      if (error instanceof EndpointValidationError) {
        (error as EndpointValidationError).validationErrorData.forEach(
          ({ parameterName, message }) => {
            console.warn(message); 
          }
        );
      }
       navigate("/");
    }
  }

  function handleInput(e: TextFieldChangeEvent) {
    setInput(e.target.value);
  }

  

  function navRoom  (roomID: number,account:  string) {
    const url = `/chat/${roomID}/${account}`;
    navigate(url);
    //ChatEndPoint.enterRoom(roomID, account);
  };

  if (!account) {
   return (
    <div>
        <h2>NO</h2>
        </div>
   );
    
  } else
    return (
      <div>
        <h2>Chat Rooms</h2>
        {chatRoomsWithUsers.map(({ chatRoom, otherUser }) => {
          const chatRoomId = chatRoom.id !== undefined ? chatRoom.id : 0; // Default value 0 if id is undefined
          return (
            <HorizontalLayout theme="spacing margin" key={chatRoom.id}>
              <Avatar
                name={otherUser.username}
                style={avatarStyle}
              />
              <VerticalLayout>
                <b>{otherUser.username}</b>
                <span>{otherUser.mbti}</span>
                <Button autofocus theme="Secondary"  onClick={() => navRoom(chatRoomId,account)}>
                  Chat
                 
                </Button>
              </VerticalLayout>
            </HorizontalLayout>
          );
        })}
      </div>
    );
}

