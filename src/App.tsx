// import { useState } from 'react'
import "./App.scss"

import team from "./data/data"
import EmployeeContainer from "./EmployeeContainer/EmployeeContainer"

function App() {

  return (
        <main className="app">
          <div className="tracker">
            <h2 className="tracker__heading">Ticket Tracker</h2>
            <EmployeeContainer team={team}/>
          </div>
        </main>
  )
}

export default App
