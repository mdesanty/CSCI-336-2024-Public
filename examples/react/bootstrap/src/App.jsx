import { Container } from 'react-bootstrap';

import GridExample from './components/GridExample';
import AlertExample from './components/AlertExample';
import FormExample from './components/FormExample';
import ModalExample from './components/ModalExample';

import './App.css';

function App() {


  return (
    <Container className='mt-3 py-3 bg-secondary-subtle rounded'>
      <h1>React Bootstrap Example Page</h1>

      <AlertExample />
      <ModalExample />
      <GridExample />
      <FormExample />

    </Container>
  );
}

export default App;
