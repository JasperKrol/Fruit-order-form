1 maak een component voor de types fruit
    - geef de props door van naam en return deze in jsx
    - add 2 buttons + en -
2 Maak de buttons interactief
    - state hooks [ counter, setSounter]

3 maak een reset button op de app.js pagina
    - maak een component
    - import de buttons en score vanuit fruittiles
    - onclick counter to 0

4 maak de de form
    - form element omwikkelen
    - label for
    -  input id matchen
    - name geven
    - value

5 hook from gebruiken
    - import hookform uit useForm
    - deconstruct in de state {handleSubmit} = useState()
    - maak functie om data te loggen -> props data
    - console.log data
    - plaats hook {onSubmit} de form = handlesubmit (met gemaakte functie)
    - deconstruct register functie uit useState
    - register de value via spread operator met name als input {...register("age")}

6 event maken op buttons dat ze ook unclicked kunnen worden (onlick event)
- import formstae: errors
- op inputveld een {required: { value: true/false, message: "hi"}, zetten
  {...register("voornaam",{
  required: {value: true, message:"Dit veld is verplicht"}
  })}

7 conditioneel renderen op anders velden
    - {erros.message && <p>{errors.naamvhveld.message}<p>
8 button submit niet activeren voordat de terms and conditions aangevinkt zijn
