import { FormLayout } from '@hilla/react-components/FormLayout.js';
import { TextField } from '@hilla/react-components/TextField.js';
import { PasswordField } from '@hilla/react-components/PasswordField.js';
//import { ViewConfig } from '@hilla/hilla-file-router/types.js';
import { Button } from '@hilla/react-components/Button.js';
import { useNavigate } from 'react-router-dom';
import { TabSheet } from "@hilla/react-components/TabSheet.js";
import { Tab } from '@hilla/react-components/Tab.js';
import { Tabs } from '@hilla/react-components/Tabs.js';

/*export const config: ViewConfig = {
    menu: { order: 1, icon: 'line-awesome/svg/globe-solid.svg' },
    title: 'Login and Register',
  };*/

export default function LoginView() {
    const responsiveSteps = [
        { minWidth: '100px', columns: 1 },
      ];
    
      const navigate = useNavigate();
    
        const handleNextClick = () => {
          navigate('../PickUserLablel'); 
        };

        const LoginClick = () => {
            navigate('../about'); 
          };
    return(

    <TabSheet>
        <Tabs slot="tabs">
          <Tab id="login-tab">Login</Tab>
          <Tab id="register-tab">Register</Tab>
        </Tabs>

      <div {...{ tab: 'register-tab' }}>
      <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
    <h2 className="mb-4">Register</h2>
    <div className="flex flex-col items-center">
      <FormLayout responsiveSteps={responsiveSteps}>
          <TextField label="First name" />
          <TextField label="Last name" />
          <TextField {...{ colspan: 2 }} label="Username" />
          <PasswordField label="Password" />
          <PasswordField label="Confirm password" />
        </FormLayout>
        <div style={{ marginTop: '20px', fontSize: '14px' }}><Button onClick={handleNextClick}>Register</Button></div>
    </div>
    </div>
        </div>

        <div {...{ tab: 'login-tab' }}>
        <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <h2 className="mb-4">Login</h2>
      <div className="flex flex-col items-center">
        <FormLayout responsiveSteps={responsiveSteps}>
          <TextField {...{ colspan: 2 }} label="Username" />
          <PasswordField label="Password" />
        </FormLayout>

        <div style={{ marginTop: '25px', fontSize: '14px', display: 'flex', justifyContent: 'center', gap: '10px' ,}}>
        <div style={{ marginTop: '20px', fontSize: '14px' }}><Button onClick={LoginClick}>Login</Button></div>
      </div>   
    </div>
    </div>
        </div>

      
    </TabSheet>
    );
}