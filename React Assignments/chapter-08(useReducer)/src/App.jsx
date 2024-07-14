import { act, useEffect, useReducer, useState } from "react"
import Table from "./components/Table"

function App() {

  const values = [{
    _id: 1,
    name: "Laxman Krishnamurti",
    age: 21,
    city: "Patna"
  }]

  const [tables, dispatch] = useReducer(tableReducer, values)

  function tableReducer(tables, action) {
    switch (action.type) {
      case 'UPDATE':
        const table = tables.map((table) => {
          if (table._id === action.payload._id) {
            table = { ...table, action }
          }
        })
        return console.log("table :: ", table)
      default: return tables
    }
  }


  return (
    <>
      <h1 className='bg-violet-600 p-4 text-center text-3xl text-white font-bold'>useReducer</h1>
      {
        values.map(value => (
          <Table key={value._id} values={value} dispatch={dispatch} />
        ))
      }
    </>
  )
}

export default App
