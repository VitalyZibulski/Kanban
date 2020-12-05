import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button/Button";

const App = () =>{
  return <div>
    <Button>Hello1</Button>
    <Button mode="secondary" disabled>Hello2</Button>
    <Button mode="success" size="small">Hello3</Button>
    <Button mode="danger" size="large">Hello4</Button>
  </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
