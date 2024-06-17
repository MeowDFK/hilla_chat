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
import UserRecordModel from 'Frontend/generated/com/example/application/data/service/UserService/UserRecordModel';
import RoomRecordModel from 'Frontend/generated/com/example/application/data/endpoints/ChatEndPoint/RoomRecordModel';
import RoomRecord from 'Frontend/generated/com/example/application/data/endpoints/ChatEndPoint/RoomRecord';
import UserRecord from 'Frontend/generated/com/example/application/data/service/UserService/UserRecord';
const avatarStyle = {
  height: '64px',
  width: '64px',
};

type ChatRoomWithUser = {
  chatRoom: ChatRoom;
  otherUser: User;
};

export function ChatRoomList() {
  const navigate = useNavigate();
  const [chatRoomsWithUsers, setChatRoomsWithUsers] = useState<ChatRoomWithUser[]>([]);
  const [userName, setUserName] = useState('');
  const [input, setInput] = useState('');

  useEffect(() => {
    if (userName) {
      fetchUserAndChatRooms(userName);
    }
  }, [userName]);

  async function fetchUserAndChatRooms(userName: string) {
    try {
      const rooms: RoomRecord[] = await ChatEndPoint.getUserChatRooms(userName);
      const roomsWithUsers = await Promise.all(
        rooms.map(async (room) => {
          if (room.id !== undefined) {
            
            const otherUser: UserRecord = await ChatEndPoint.getOtherUserInChatRoom(room.id, userName);
            return { chatRoom: room, otherUser };
          }
          return null;
        })
      );
      setChatRoomsWithUsers(roomsWithUsers.filter(room => room !== null) as ChatRoomWithUser[]);
    } catch (error) {
      console.error('Failed to fetch user or chat rooms:', error);
    }
  }

  function handleInput(e: TextFieldChangeEvent) {
    setInput(e.target.value);
  }

  function logIn() {
    setUserName(input);
    setInput('');
  }

  function navRoom  (roomID: number,userName:  string) {
    const url = `/chat/${roomID}/${userName}`;
    navigate(url);
    //ChatEndPoint.enterRoom(roomID, userName);
  };

  if (!userName) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className="flex gap-m">
          <TextField
            placeholder="User name"
            value={input}
            onChange={handleInput}
          />
          <Button autofocus theme= "Primary"  onClick={logIn}>
          Enter

          </Button>
        </div>
      </div>
    );
  } else {
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
                <Button autofocus theme="Secondary"  onClick={() => navRoom(chatRoomId,userName)}>
                  Chat
                 
                </Button>
              </VerticalLayout>
            </HorizontalLayout>
          );
        })}
      </div>
    );
  }
}
