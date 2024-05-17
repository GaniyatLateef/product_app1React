import React from "react";
import Button from "./Button";

const Animal = () => {
  const [data, setData] = React.useState([]);
  const [animal, setAnimal] = React.useState("");

  return (
    <div>
      <h3>Animal</h3>
      {data.length && <h5> There is data</h5>}
      {data.map((det, index) => (
        <p key={index}>{det}</p>
      ))}
      <br />
      <br />
      <label className="post-title">Add Animals</label>
      <input
        type="text"
        value={animal}
        onChange={(e) => setAnimal(e.target.value)}
      />
      <Button label="Add" action={() => setData([...data, animal])} />
    </div>
  );
};

export default Animal;
