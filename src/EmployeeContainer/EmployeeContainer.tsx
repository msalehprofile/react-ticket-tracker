
import { Card } from '../data/data'
import EmployeeCard from '../EmployeeCard/EmployeeCard'
import SearchBox from '../SearchBox/SearchBox'
import { useState, FormEvent } from 'react'
import './EmployeeContainer.scss'
import DropdownBox from '../DropdownBox/DropdownBox'


type EmployeeArray = {
    team: Card[]
}

const EmployeeContainer = ({team}: EmployeeArray) => {
    const [searchTermJob, setSearchTermJob] = useState<string>("")
    const [searchTermName, setSearchTermName] = useState<string>("")

    const handleInputName =(event: FormEvent<HTMLInputElement>) => {
        const cleanedInput = event.currentTarget.value.toLowerCase()
        setSearchTermName(cleanedInput)
    }

    const handleInputJob =(event: FormEvent<HTMLSelectElement>) => {
        const cleanedInput = event.currentTarget.value.toLowerCase()
        setSearchTermJob(cleanedInput)
        
    }


    const findSearchTerm = () => {
        if (searchTermJob === "" && searchTermName ==="") {
        return team
    }   else if(searchTermJob !="" && searchTermName ==="") {
        return team.filter((employee) => {
            return employee.role.toLowerCase().includes(searchTermJob)   
        }) 
    }   else if (searchTermJob === "" && searchTermName !="") {
        return team.filter((employee) => {
            return employee.name.toLowerCase().includes(searchTermName)   
        })
    } else {
        return team.filter((employee) => {
            return employee.name.toLowerCase().includes(searchTermName) && employee.role.toLowerCase().includes(searchTermJob) 
        }) 
    }
}  
    return (
        <>
        <div className="seachBoxes">
            <label>Search by Name</label>
            <SearchBox label="Search by name" searchTerm={searchTermName} handleInput={handleInputName} />
            <label>Search by Job</label>
            <DropdownBox/>
        </div>
        <div className="team-grid">
            {findSearchTerm().map((individual) => <EmployeeCard name={individual.name} role={individual.role}/> )}
            
        </div>
        </>
    )
}

export default EmployeeContainer