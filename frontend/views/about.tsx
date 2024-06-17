//import { ViewConfig } from '@hilla/hilla-file-router/types.js';
import { Button } from '@hilla/react-components/Button.js';
import { useNavigate } from 'react-router-dom';
import { Dialog } from '@hilla/react-components/Dialog.js';
import { useState } from 'react';
import { ProgressBar } from '@hilla/react-components/ProgressBar.js';

/*export const config: ViewConfig = { menu: { order: 3, icon: 'line-awesome/svg/file.svg' }, title: 'Match' };*/

export default function AboutView() {
  const navigate = useNavigate();
  const handleNextClick = () => {
    navigate('../Register'); 
  };
  const [dialogOpened, setDialogOpened] = useState(false);
  const [dialogContent, setDialogContent] = useState('initial');  // 狀態變量來管理對話框內容

  const handleGoClick = () => {
    setDialogContent('changed');  
    setTimeout(() => {
      navigate('../UserPage');
    }, 5000);  
  };

  return (
    <div className="flex flex-col h-full items-center justify-center p-l text-center box-border">
      <img style={{ width: '500px' }} src="images/MBTIHEAD.jpg" />
      
      <Dialog
        headerTitle=""
        opened={dialogOpened}
        onOpenedChanged={({ detail }) => {
          setDialogOpened(detail.value);
        }}
        footerRenderer={() => (
          <>
            {dialogContent === 'initial' ? (
              <Button theme="primary" onClick={handleGoClick}>Go</Button>
            ) : (
              <Button theme="primary" onClick={() => setDialogOpened(false)}>Close</Button>
            )}
            <Button onClick={() => setDialogOpened(false)}>Cancel</Button>
          </>
        )}
      >
        <div style={{ textAlign: 'center', minHeight: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          {dialogContent === 'initial' ? (
            <>
              <h2>Are you Ready to find Someone matched?</h2>
              <p>Only one time per day</p>
              <img style={{ width: '200px' }} src="images/only-one.jpg" />
            </>
          ) : (
            <div style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', minHeight: '200px' }}>
              <h2>Searching...</h2>
              <p>Wait a second</p>
              <ProgressBar indeterminate style={{ width: '80%' }} />
            </div>
          )}
        </div>
      </Dialog>
      
      <div style={{ marginTop: '25px', fontSize: '14px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <Button theme="large" onClick={() => setDialogOpened(true)}>Find Someone Matched</Button>
      </div>
    </div>
  );
}
