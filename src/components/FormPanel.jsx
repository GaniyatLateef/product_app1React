const FormPanel = ({ count }) => {
  return (
    <div>
      <form>
        <h2>Fill this form please!</h2>
        <label>Number 1: </label>
        <input type="text" value={count} />
        <br />
        <br />
        <label> Number 2: </label>
        <input type="text" value={count} />
      </form>
    </div>
  );
};

export default FormPanel;
