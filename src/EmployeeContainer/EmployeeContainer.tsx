
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
    const [dropdownJobs, setdropdownJobs] = useState<string>("")
    const [searchTermName, setSearchTermName] = useState<string>("")

    const handleInputName =(event: FormEvent<HTMLInputElement>) => {
        const cleanedInput = event.currentTarget.value.toLowerCase()
        setSearchTermName(cleanedInput)
    }

    const handleInputJob =(event: FormEvent<HTMLSelectElement>) => {
        const cleanedInput = event.currentTarget.value
        setdropdownJobs(cleanedInput)
        console.log(dropdownJobs)
    }


    const findSearchTerm = () => {
        if (dropdownJobs === "Job" && searchTermName === "") {
        return team
    }   else if(dropdownJobs !="Job" && searchTermName === "") {
        return team.filter((employee) => {
            return employee.role.includes(dropdownJobs)   
        }) 
    }   else if (dropdownJobs === "Job" && searchTermName !="") {
        return team.filter((employee) => {
            return employee.name.toLowerCase().includes(searchTermName)   
        })
    } else {
        return team.filter((employee) => {
            return employee.name.toLowerCase().includes(searchTermName) && employee.role.includes(dropdownJobs) 
        }) 
    }
}  
    return (
        <>
        <div className="seachBoxes">
            <div className='seachBoxes__name'>
                <label>Search by Name</label>
                <SearchBox label="Search by name" searchTerm={searchTermName} handleInput={handleInputName} />
            </div>
            <div className='job'>
                <label>Search by Job</label>
                <DropdownBox label="Search by Job" handleInput={handleInputJob}/>
            </div>
        </div>
        <div className="team-grid">
            {findSearchTerm().map((individual) => <EmployeeCard key={individual.name} name={individual.name} role={individual.role}/> )}
            
        </div>
        </>
    )
}

export default EmployeeContainer