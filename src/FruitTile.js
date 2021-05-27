
function FruitTile(props) {
// console.log("fruittileprops", props)

    function changeAmount (number) {
    props.setCounter(props.counter + number);

    }

    return (
        <fieldset>
            <h1>{props.fruitType}</h1>
            <button onClick={(() => changeAmount(1))}>+</button>
            <span>
                {props.counter}
            </span>
            <button onClick={(() => changeAmount(-1))}>-</button>
        </fieldset>
    )
}

export default FruitTile