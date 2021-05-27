import React from 'react';
import './App.css';
import FruitTile from "./FruitTile"
import logoBanner from "./assets/screenshot-logo.png"
import ResetButton from "./ResetButton";
import FormDocument from "./FormDocument"
import {useState} from "react"
import {useForm} from "react-hook-form"


function App() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm({mode: "onBlur"});

    const [aardbeiCounter, setAardbeiCounter] = useState(0)
    const [banaanCounter, setBanaanCounter] = useState(0)
    const [appelCounter, setAppelCounter] = useState(0)
    const [kiwiCounter, setKiwiCounter] = useState(0)

    function onSubmit(data) {

        //e.prevent default hoeft niet, zit al ingebouwd in de library
        console.log(data)
    }


    return (
        <>
            <img src={logoBanner} alt="fruitService"/>

            <div className="form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="fruit-content">
                        <h1>Fruitmand bezorgservice</h1>
                        <FruitTile
                            fruitType="Aardbeien"
                            counter={aardbeiCounter}
                            setCounter={setAardbeiCounter}
                        />
                        <FruitTile
                            fruitType="Bananen"
                            counter={banaanCounter}
                            setCounter={setBanaanCounter}
                        />
                        <FruitTile
                            fruitType="Appels"
                            counter={appelCounter}
                            setCounter={setAppelCounter}
                        />
                        <FruitTile
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
                    </div>
                </form>

                <div className="form-content">
                    <FormDocument/>
                </div>
            </div>

        </>
    );
}

export default App;
