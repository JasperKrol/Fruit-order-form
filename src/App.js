import React from 'react';
import './App.css';
import FruitTile from "./FruitTile"
import logoBanner from "./assets/screenshot-logo.png"
import ResetButton from "./ResetButton";
import {useState} from "react"
import {useForm} from "react-hook-form"

function App() {
    const [aardbeiCounter, setAardbeiCounter] = useState(0)


    return (
        <>
            <img src={logoBanner} alt="fruitService"/>

            <div className="form-wrapper">
                <div className="fruit-content">
                    <h1>Fruitmand bezorgservice</h1>
                    <FruitTile
                        fruitType="Aardbeien"
                        aardbeiCounter={aardbeiCounter}
                        setAardbeiCounter={setAardbeiCounter}
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
                        aardbeiCounter={aardbeiCounter}
                        setAardbeiCounter={setAardbeiCounter}
                    />
                </div>

                <div className="form-content">
                    <form>
                        <label htmlFor="first-name">Naam:
                            <input
                                type="text"
                                id="first-name"
                                name="voornaam"
                            />
                        </label>
                        <label htmlFor="first-name">Achternaam:
                            <input
                                type="text"
                                id="last-name"
                                name="voornaam"
                            />
                        </label>
                        <label htmlFor="age">Age:
                            <input
                                type="number"
                                id="age"
                                name="leeftijd"
                            />
                        </label>
                        <label htmlFor="postal-code">Age:
                            <input
                                type="text"
                                id="postal-code"
                                name="postcode"
                            />
                        </label>
                        <label htmlFor="delivery">Bezorgfrequentie
                            <input  type="radio" value="iedere-week" name="iedere-week"/>iedere week
                            <input  type="radio" value="om-de-week" name="om-de-week"/>om de week
                            <input  type="radio" value="iedere-maand" name="iedere-maand"/>iedere maand
                            <input  type="radio" value="anders" name="anders"/>Anders
                        </label>

                        <label htmlFor="comments">Opmerkingen
                            <textarea name="comments" id="comments" cols="30" rows="10"></textarea>
                        </label>
                        <label htmlFor="terms-and-conditions">
                            <input
                                type="checkbox"
                                name="terms-and-conditions"
                                id="terms-and-conditions"
                            />Ik ga akkoord met deze voorwaarden
                        </label>
                        <input type="submit" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default App;
