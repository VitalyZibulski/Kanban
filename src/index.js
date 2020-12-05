import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Button from "./components/Button/Button";
import ButtonsGroup from "./components/ButtonsGroup/ButtonsGroup";
import Progress from "./components/Progress/Progress";

const App = () =>{
  const [percent, setPercent] = useState(0)

  const interval = setInterval(() => {
    if (percent >= 100) {
      setPercent(100);
      clearInterval(interval);
    } else {
      setPercent(percent + 20);
    }

    clearInterval(interval);
  }, 1000);

  return <div>
    {/*<Button>Hello1</Button>*/}
    {/*<Button mode="secondary" disabled>Hello2</Button>*/}
    {/*<Button mode="success" size="small">Hello3</Button>*/}
    {/*<Button mode="danger" size="large">Hello4</Button>*/}
    {/*<Button counter={0}>Counter</Button>*/}

    {/*<ButtonsGroup>*/}
    {/*  <Button>Left part</Button>*/}
    {/*  <Button>Middle part</Button>*/}
    {/*  <Button>Right part</Button>*/}
    {/*</ButtonsGroup>*/}

    <Progress percent={percent}/>
  </div>;
}

ReactDOM.render(<App />, document.getElementById('root'));
