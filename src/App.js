import React from 'react';
import './App.css';
import FruitTile from "./FruitTile"
import logoBanner from "./assets/screenshot-logo.png"
import ResetButton from "./ResetButton";
import {useState} from "react"
import {useForm} from   "react-hook-form"

function App() {
    const [aardbeiCounter, setAardbeiCounter] = useState(0)


  return (
    <>
      <img src={logoBanner} alt="fruitService"/>
      <h1>Fruitmand bezorgservice</h1>

        <FruitTile
            fruitType="Aardbeien"
            aardbeiCounter = {aardbeiCounter}
            setAardbeiCounter = {setAardbeiCounter}
        />
      {/*<FruitTile*/}
      {/*    fruitType="Bananen"*/}
      {/*/>*/}
      {/*<FruitTile*/}
      {/*    fruitType="Appels"*/}
      {/*/>*/}
      {/*<FruitTile*/}
      {/*    fruitType="Kiwi"*/}
      {/*/>*/}

      <ResetButton
          aardbeiCounter = {aardbeiCounter}
          setAardbeiCounter = {setAardbeiCounter}
      />

        <form>
            <label htmlFor="first-name">
                <input
                    type="text"
                    id="first-name"
                    name="voornaam"
                />
            </label>
        </form>

    </>
  );
}

export default App;
