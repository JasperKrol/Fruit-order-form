function ResetButton (props) {
// console.log("resetbuttonprops",props)

    return (
        <button onClick={() => props.setAardbeiCounter(0)}>RESET DEZE DING</button>
    )
}

export default ResetButton
