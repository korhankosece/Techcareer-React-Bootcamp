const TechButton = (props) => {
    const { buton: changeButon, style } = props;
    console.log(props);

    return (
        <div style={style}>
            {/* <p>{props.title}</p> */}
            <p>{changeButon}</p>
            <button>Click</button>
        </div>
    )
}

export default TechButton