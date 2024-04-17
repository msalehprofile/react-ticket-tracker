
import team from '../data/data'
import { FormEventHandler } from 'react'

type DropdownProps = {
    label: string;
    handleInput: FormEventHandler<HTMLSelectElement>
}

const filteredTeam = team.filter((employee) => employee.role)
const uniqueRoles = [...new Set(filteredTeam.map(employee => employee.role))];
console.log(uniqueRoles)

const DropdownBox = ({handleInput}: DropdownProps) => {
  return (
    <div>
        <select name="selection" id="selectionbox">
            {uniqueRoles.map((roles) => <option handleInput={handleInput}>{roles}</option>)}
        </select>
        
    </div>
  )
}

export default DropdownBox