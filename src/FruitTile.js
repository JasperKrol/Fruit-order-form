
function FruitTile(props) {
// console.log("fruittileprops", props)

    function changeAmount (number) {
    props.setAardbeiCounter(props.aardbeiCounter + number);


    }

    return (
        <fieldset>
            <h1>{props.fruitType}</h1>
            <button onClick={(() => changeAmount(1))}>+</button>
            {props.aardbeiCounter}
            <button onClick={(() => changeAmount(-1))}>-</button>
        </fieldset>
    )
}

export default FruitTile