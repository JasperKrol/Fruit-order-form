import React from 'react';
import './App.css';
import FruitTile from "./FruitTile"
import logoBanner from "./assets/screenshot-logo.png"
import FormDocument from "./FormDocument"
import {useForm} from "react-hook-form"

function App() {
    const {handleSubmit } = useForm({mode: "onBlur"});

    function onSubmit(data) {
        //e.prevent default hoeft niet, zit al ingebouwd in de library
        console.log(data)
    }

    return (
        <>
            <div className="navbar">
                <img src={logoBanner} alt="fruitService"/>
                <h1>Fruitmand bezorgservice</h1>
            </div>

            <div className="form-wrapper">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="fruit-content">

                        <FruitTile/>
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
