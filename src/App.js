import React from 'react';
import './App.css';
import FruitTile from "./FruitTile"
import logoBanner from "./assets/screenshot-logo.png"
import ResetButton from "./ResetButton";
import {useState} from "react"
import {useForm} from "react-hook-form"


function App() {
    const { handleSubmit, formState: { errors }, register, watch } = useForm({mode: "onBlur"});

    const [aardbeiCounter, setAardbeiCounter] = useState(0)
    const [banaanCounter, setBanaanCounter] = useState(0)
    const selectedReferrer = watch('Bezorgfrequentie');
    const [checkedTerms, toggleCheckedTerms] = useState(false)

    //maak functie die de date van onsubmit in form opslaat (data) in de props
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
                            aardbeiCounter={aardbeiCounter}
                            setAardbeiCounter={setAardbeiCounter}
                            counter = {aardbeiCounter}
                        />
                        {/*<FruitTile*/}
                        {/*    fruitType="Bananen"*/}
                        {/*    banaanCounter={banaanCounter}*/}
                        {/*    setBanaanCounter={setBanaanCounter}*/}
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
                            banaanCounter={banaanCounter}
                            setBanaanCounter={setBanaanCounter}
                        />

                    </div>
                </form>
                <div className="form-content">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label htmlFor="first-name">Naam:
                            <input
                                type="text"
                                id="first-name"
                                {...register("voornaam", {
                                    required: {value: true, message: "Dit veld is verplicht"}
                                })}
                            />
                            {errors.voornaam && <p>{errors.voornaam.message}</p>}
                        </label>
                        <label htmlFor="first-name">Achternaam:
                            <input
                                type="text"
                                id="last-name"
                                {...register("achternaam", {
                                    required: {value: true, message: "Dit veld is verplicht"}
                                })}
                            />
                            {errors.achternaam && <p>{errors.achternaam.message}</p>}
                        </label>
                        <label htmlFor="age">Leeftijd:
                            <input
                                type="number"
                                id="age"
                                name="age"
                                placeholder="are you 18..?"
                                {...register("age", {
                                    min: {
                                        value: 18,
                                        message: "je bent geen 18..."
                                    }
                                })}
                            />
                            {errors.age && <p>{errors.age.message}</p>}
                        </label>
                        <label htmlFor="postal-code">Postcode:
                            <input
                                type="text"
                                id="postal-code"
                                name="postcode"
                                {...register("postcode", {
                                    required: {value: true, message: "dit veld is verplicht"}
                                })}
                            />
                            {errors.postcode && <p>{errors.postcode.message}</p>}
                        </label>
                        <label htmlFor="Bezorgfrequentie">Bezorgfrequentie
                            <input {...register("Bezorgfrequentie", {required: true})} type="radio"
                                   value="iedere week"/>iedere week
                            <input {...register("Bezorgfrequentie", {required: true})} type="radio"
                                   value="om de week "/>om de week
                            <input {...register("Bezorgfrequentie", {required: true})} type="radio"
                                   value="iedere maand"/>iedere maand
                            <input {...register("Bezorgfrequentie", {required: true})} type="radio"
                                   value="anders"/>anders
                        </label>
                        {selectedReferrer === 'anders' && (
                            <input
                                type="text"
                                {...register("Bezorgfrequentie-anders", {required: true})}/>
                        )}


                        <label htmlFor="comments">Opmerkingen
                            <textarea name="comments" id="comments" cols="30" rows="10"
                                      {...register("comments")}
                            >
                            </textarea>
                        </label>
                        <label htmlFor="terms-and-conditions">
                            <input
                                type="checkbox"
                                id="terms"
                                name="terms"
                                checked={checkedTerms}
                                onChange={() => toggleCheckedTerms(!checkedTerms)}
                            />Ik ga akkoord met deze voorwaarden
                        </label>
                        <input
                            type="submit"
                            disabled={!checkedTerms || errors.age || errors.achternaam ||errors.voornaam }
                        />
                    </form>
                </div>
            </div>

        </>
    );
}

export default App;
