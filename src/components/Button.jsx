const Button = ({label= "Mybutton", color= "lightyellow"}) => {
    const style = {
        backgroundColor: color
    }
    return (<button style={style}> {label}</button>);
}

export default Button;