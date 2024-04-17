
import { Card } from '../data/data'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import SearchBox from '../SearchBox/SearchBox'
import { useState, FormEvent } from 'react'
import './EmployeeContainer.scss'


type EmployeeArray = {
    team: Card[]
}

const EmployeeContainer = ({team}: EmployeeArray) => {
    const [searchTermJob, setSearchTermJob] = useState<string>("")
    const [searchTermName, setSearchTermName] = useState<string>("")

    const handleInputName =(event: FormEvent<HTMLInputElement>) => {
        const cleanedInput = event.currentTarget.value.toLowerCase()
        setSearchTermName(cleanedInput)
        console.log(searchTermName)
    }

    const filterByName = team.filter((employee) => {
        return employee.name.toLowerCase().includes(searchTermName)   
    })
    console.log(filterByName)

    const handleInputJob =(event: FormEvent<HTMLInputElement>) => {
        const cleanedInput = event.currentTarget.value.toLowerCase()
        setSearchTermJob(cleanedInput)
        console.log(searchTermJob)
    }

    const filterByJob = team.filter((employee) => {
        return employee.role.toLowerCase().includes(searchTermJob)   
    })
    console.log(filterByJob)

//     let list = team;
//     const findSearchTerm = () => {
//         if (searchTermJob === "" && searchTermName ==="") {
//         return list = team
//     }   else if(searchTermJob !="" && searchTermName ==="") {
//         return list = filterByJob
//     }   else if (searchTermName!="") {
//         return list = filterByName
//     }
// }  

    return (
        <>
        <div className="seachBoxes">
            <SearchBox label="Search by name" searchTerm={searchTermName} handleInput={handleInputName} />
            <SearchBox label="Search by job" searchTerm={searchTermJob} handleInput={handleInputJob} />
        </div>
        <div className="team-grid">
            { team.map((individual) => <EmployeeCard name={individual.name} role={individual.role}/> ) && filterByJob.map((individual) => <EmployeeCard name={individual.name} role={individual.role}/> )}
            
        </div>
        </>
    )
}

export default EmployeeContainer