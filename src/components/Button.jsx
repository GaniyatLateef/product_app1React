const Button = (props) => {
  const { action, label = "My Button", color } = props;
  const style = {
     backgroundColour: color,
     };
  return (
    <button className="btn" style={style} onClick={action}>
      {label}
    </button>
  );
};

export default Button;
