import { Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

function AlertExample() {
  const [alerts, setAlerts] = useState([]);

  return (
    <>
      <h5 className='mt-4'>Buttons and Alerts</h5>
      {/*
        Instead of <div class="alert alert-primary"> we use <Alert variant='primary'>

        Read more here:
         - Buttons: https://react-bootstrap.netlify.app/docs/components/buttons
         - Alerts: https://react-bootstrap.netlify.app/docs/components/alerts
      */}

      <div id="alerts">
        {alerts.map((alert, key) =>
          <Alert key={key} variant={alert.variant} dismissible>
            {alert.message}
          </Alert>
        )}
      </div>

      <Button variant='primary' className='me-2' onClick={() => setAlerts([...alerts, {variant: 'primary', message: 'Blue alert added'}])}>Blue</Button>
      <Button variant='success' className='me-2' onClick={() => setAlerts([...alerts, {variant: 'success', message: 'Green alert added'}])}>Green</Button>
      <Button variant='danger' className='me-2' onClick={() => setAlerts([...alerts, {variant: 'danger', message: 'Red alert added'}])}>Red</Button>
    </>
  );
}

export default AlertExample;