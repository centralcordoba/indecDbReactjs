import React from 'react';
import {Button, Form} from 'react-bootstrap';
import {db} from './appdb';

// import Dexie from 'dexie';

// export const db = new Dexie("DexieTest");
// db.version(1).stores({ notes: "++id,title,content"})

 db.open();


function App() {
  return (

    <div className="App">
      <h1>IndexDb</h1>
      <div className="container">
        <Form>
        <Form.Group>
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>UserMail</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control type="text"></Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
        </Form>
      </div>
      
    </div>
  );
}

export default App;
