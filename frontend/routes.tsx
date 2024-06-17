import ContactsView from 'Frontend/views/contacts/ContactsView';
import MainLayout from 'Frontend/views/MainLayout';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import {ChatRoomList} from './views/ChatRoomList';
import {ChatView} from './views/ChatView';
import {LoginView} from './views/LoginRegister';
const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

export const routes: RouteObject[] = [
  
   
    { 
      element: <MainLayout />,
    handle: { title: 'Hilla CRM' },
    children: [
      { path: '/' ,element: <LoginView />,handle: { title: 'Hello!!' }},
      { path: '/chatList/:account', element: <ChatRoomList/>, handle: { title: 'ChatList' } },
      { path: '/about', element: <AboutView />, handle: { title: 'About' } },
      { path: '/chat/:roomId/:account', element: <ChatView /> ,handle: { title: 'chatroom' }}, 
    ],
  },
];

export default createBrowserRouter(routes);
