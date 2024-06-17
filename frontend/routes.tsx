import ContactsView from 'Frontend/views/contacts/ContactsView';
import MainLayout from 'Frontend/views/MainLayout';
import { lazy } from 'react';
import { createBrowserRouter, RouteObject } from 'react-router-dom';
import {ChatRoomList} from './views/ChatRoomList';
import {ChatView} from './views/ChatView';

const AboutView = lazy(async () => import('Frontend/views/about/AboutView.js'));

export const routes: RouteObject[] = [
  {
    element: <MainLayout />,
    handle: { title: 'Hilla CRM' },
    children: [
      { path: '/', element: <ChatRoomList/>, handle: { title: 'list' } },
      { path: '/about', element: <AboutView />, handle: { title: 'About' } },
      { path: '/chat/:roomId/:username', element: <ChatView /> ,handle: { title: 'chatroom' }}, 
    ],
  },
];

export default createBrowserRouter(routes);
