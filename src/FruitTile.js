import FruitSelection from "./FruitSelection";
import React from 'react';
import './App.css';
import {useState} from "react"
import ResetButton from "./ResetButton";


function FruitTile() {

    const [aardbeiCounter, setAardbeiCounter] = useState(0)
    const [banaanCounter, setBanaanCounter] = useState(0)
    const [appelCounter, setAppelCounter] = useState(0)
    const [kiwiCounter, setKiwiCounter] = useState(0)


    return (
        <>
            <FruitSelection
                fruitType="Aardbeien"
                counter={aardbeiCounter}
                setCounter={setAardbeiCounter}
            />
            <FruitSelection
                fruitType="Bananen"
                counter={banaanCounter}
                setCounter={setBanaanCounter}
            />

            <FruitSelection
                fruitType="Appels"
                counter={appelCounter}
                setCounter={setAppelCounter}
            />

            <FruitSelection
                fruitType="Kiwi"
                counter={kiwiCounter}
                setCounter={setKiwiCounter}
            />

            <ResetButton
                setAardbeiCounter={setAardbeiCounter}
                setBanaanCounter={setBanaanCounter}
                setKiwiCounter={setKiwiCounter}
                setAppelCounter={setAppelCounter}
            />
        </>
    )
}

export default FruitTile