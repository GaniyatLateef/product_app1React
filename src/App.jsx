import Button from "./components/Button";
import "./app.css";
import { useState } from "react";
import FormPanel from "./components/FormPanel";

const App = () => {
  const [count, setCount] = useState(0);

  const send = (msg) => console.log(msg);

  const increment = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div>My Form</div>
      <div className="panel"> {count} </div>
      <Button label="-" action={decrement} />
      <Button label="+" action={increment} />
      <FormPanel count={count} />
      <Button label="Button1" color="blue" action={() => send("Button1")} />
      <Button color="skyBlue" action={() => send("Button2")} />
    </>
  );
};

export default App;
