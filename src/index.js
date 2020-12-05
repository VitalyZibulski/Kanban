import React from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button/Button";
import ButtonsGroup from "./components/ButtonsGroup/ButtonsGroup";

const App = () =>{
  return <div>
    {/*<Button>Hello1</Button>*/}
    {/*<Button mode="secondary" disabled>Hello2</Button>*/}
    {/*<Button mode="success" size="small">Hello3</Button>*/}
    {/*<Button mode="danger" size="large">Hello4</Button>*/}
    {/*<Button counter={0}>Counter</Button>*/}

    <ButtonsGroup>
      <Button>Left part</Button>
      <Button>Middle part</Button>
      <Button>Right part</Button>
    </ButtonsGroup>
  </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
