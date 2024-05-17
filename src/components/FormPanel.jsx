import { useState} from "react";
const FormPanel = () => {


    const [details, setDetails] = useState ({});

    const updateNumber1 = (e) => {
      const obj = {
        name: "Ganiyat",
        age: "38"
      }
      console.log(obj['name']);

      const newDetails = {
        ...details,  //destructuring
        num1: e.target.value
      };
      setDetails(newDetails)
    }

    const updateForm = (e) => setDetails ({...details, [e.target.name]: e.target.value});

  return (
    <div>
      <div>{JSON.stringify(details)}</div>
      <form>
        <h2>Fill this form please!</h2>
        <label>Number 1: </label>
        <input name="num1" type="text" value={details.num1} onChange={updateNumber1}/>
        <br />
        <br />
        <label> Number 2: </label>
        <input name = "num2" type="text" value={details.num2} onChange={(e) => setDetails({...details, num2: e.target.value})}/>
        <br/>
        <br/>
        <label> Number 3: </label>
        <input name = "num3" type="text" value={details.num3} onChange = {updateForm}/>
      </form>
    </div>
  );
};

export default FormPanel;
