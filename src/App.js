import React, { useEffect, useState } from "react";
import { savePersonName, getPersons, deletePerson } from './application/api'
import './style.css'
function App() {
  const [personName, setPersonName] = useState('')
  const [persons, setPersons] = useState('')
  const [personsId, setPersonsId] = useState('')

  const save = async () => {
    await savePersonName(personName)
    setPersonName('')
    getPersonsData()

  }

  const getPersonsData = async () => {
    const p = await getPersons()
    setPersons(p.docs)
  }

  const remove = async (id) => {
    await deletePerson(id)
    getPersonsData()
    console.log('delete id : ', id)
  }

  useEffect(() => {
    getPersonsData()
  }, [])

  return (
    <div className="container">
      <div className="field-input">
        <input className="form__input" type='text' placeholder="Nombre" value={personName} onChange={(e) => setPersonName(e.target.value)} />
        <button onClick={save}>Guardar</button>
      </div>
      <br />
        <br />
      <br />
      <div className="field">
        {
          persons && persons.map((p, i) =>
            <div  key={i} className="label">
              <p >{p.id} - {p.data().name}</p>
              <button  onClick={() => remove(p.id)} className="delete">Eliminar</button>
            </div>
          )
        }
      </div>

    </div>
  );
}

export default App;
