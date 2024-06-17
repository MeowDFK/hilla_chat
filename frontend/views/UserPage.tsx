//import { ViewConfig } from '@hilla/hilla-file-router/types.js';
import { Button } from '@hilla/react-components/Button.js';
import React from 'react';

/*export const config: ViewConfig = {
    menu: { order: 4, icon: 'line-awesome/svg/globe-solid.svg' },
    title: 'User Page',
  };*/

function UserPage() {

  const userData = {
    name: 'Miles Morales',
    mbti: 'ISTJ',
    avatarUrl:'images/profile-photo.png',
    tags: ['Basketball','Sci-Fi Movie' ,'Japanese Cuisine']
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>User Profile</h1>
      <img src={userData.avatarUrl} alt="User Avatar" style={{ width: '300px', borderRadius: '50%' }} />
      <h2>{userData.name}</h2>
      <p>MBTI: {userData.mbti}</p>
      <div>
        <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', justifyContent: 'center' }}>
          {userData.tags.map((tag, index) => (
            <li key={index} style={{ margin: '0 5px' }}>{tag}</li>
          ))}
        </ul>
      </div>
      <div style={{ marginTop: '25px', fontSize: '14px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
      <Button theme = "large">Yes</Button>
      <Button theme="secondary large contrast">No!</Button>
      </div>
    </div>
  );
}

export default UserPage;
