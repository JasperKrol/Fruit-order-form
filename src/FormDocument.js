import React from "react";
import {useState} from "react"
import {useForm} from "react-hook-form"

function FormDocument () {

    const { handleSubmit, formState: { errors }, register, watch } = useForm({mode: "onBlur"});
    const selectedReferrer = watch('Bezorgfrequentie');
    const [checkedTerms, toggleCheckedTerms] = useState(false)

    //maak functie die de date van onsubmit in form opslaat (data) in de props
    function onSubmit(data) {

        //e.prevent default hoeft niet, zit al ingebouwd in de library
        console.log(data)
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="personal" >
            <label  htmlFor="first-name">Naam:
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
                        required: { value: true, message: "Dit veld is verplicht" },
                        pattern: {
                            value: /^[1-9][0-9]{3}?(?!sa|sd|ss)[a-z]{2}$/im,
                            message: "niet geldige postcode",
                        }})}
                />
                {errors.postcode && <p>{errors.postcode.message}</p>}
            </label>
            </div>

            <br />

            <label htmlFor="Bezorgfrequentie">Bezorgfrequentie:
                <br />
                <ul>
                    <li>
                <input {...register("Bezorgfrequentie", {required: true})} type="radio"
                       value="iedere week"/>iedere week</li>
                    <li>
                <input {...register("Bezorgfrequentie", {required: true})} type="radio"
                       value="om de week "/>om de week</li>
                    <li>
                <input {...register("Bezorgfrequentie", {required: true})} type="radio"
                       value="iedere maand"/>iedere maand</li>
                    <li>
                <input {...register("Bezorgfrequentie", {required: true})} type="radio"
                       value="anders"/>anders</li>

                </ul>
            </label>
            {selectedReferrer === 'anders' && (
                <input
                    type="text"
                    {...register("Bezorgfrequentie-anders", {required: true})}/>
            )}

            <br />

            <label htmlFor="comments">Opmerkingen:
                <br />
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
    )
}

export default FormDocument
