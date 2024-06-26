
import team from '../data/data'
import './DropdownBox.scss'
import { FormEventHandler } from 'react'

type DropdownProps = {
    label: string;
    handleInput: FormEventHandler<HTMLSelectElement>;
}

const filteredTeam = team.filter((employee) => employee.role)
const uniqueRoles = [...new Set(filteredTeam.map(employee => employee.role))];
const fullArr = uniqueRoles
console.log(uniqueRoles)

const DropdownBox = ({handleInput}: DropdownProps) => {
  return (
    <div >
        <select className="dropdown" name="selection" id="dropdown-option" onChange={handleInput}>
            <option key="dropdown-option__empty">Job</option>
            {fullArr.map((roles) => <option key={roles}>{roles}</option>)}
        </select>
        
    </div>
  )
}

export default DropdownBox