function ResetButton (props) {
console.log("resetbuttonprops",props)

    function resetCounter () {
        props.setAardbeiCounter(0)
        props.setBanaanCounter(0)
        props.setKiwiCounter(0)
        props.setAppelCounter(0)
    }

    return (
        <button
            onClick={() => resetCounter()}>RESET DEZE DING</button>
    )
}

export default ResetButton
