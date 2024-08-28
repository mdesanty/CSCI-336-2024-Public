import { Button, Spinner, Modal } from 'react-bootstrap';
import { useState } from 'react';
import axios from 'axios';

function ModalExample() {
  const [show, setShow] = useState(false);
  const [pun, setPun] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  function showModal() {
    setIsLoading(true);

    axios.get('https://www.punapi.rest/api/pun')
      .then(response => {
        setError('');
        setPun(response.data.pun);
        setShow(true);
        setIsLoading(false);
      })
      .catch(error => {
        setPun('');
        setError('Something went wrong.');
        setShow(true);
        setIsLoading(false);
      });
  }

  function hideModal() {
    setShow(false);
    setPun('');
  }

  return (
    <>
      <h5 className='mt-4'>Modal</h5>
      <Button onClick={showModal} style={{width: '120px'}}>
        {isLoading ?
          <Spinner size='sm' animation='border' as='span' />
        :
          <>Show modal</>
        }
      </Button>

      <Modal show={show} onHide={hideModal}>
        <Modal.Header>
          Here is a pun
        </Modal.Header>
        <Modal.Body>
          {pun}
          {error.length > 0 && <span className='text-danger'>{error}</span>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalExample;