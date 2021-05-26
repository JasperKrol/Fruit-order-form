function ResetButton (props) {
// console.log("resetbuttonprops",props)

    return (
        <button
            onClick={() => props.setAardbeiCounter(0)}
        /* onClick props.setbanaan copy paste 3x */
        >RESET DEZE DING</button>
    )
}

export default ResetButton
