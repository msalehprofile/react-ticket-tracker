import './SearchBox.scss'
import { FormEventHandler } from 'react'

type SearchBoxProps = {
    label: string
    searchTerm: string;
    handleInput: FormEventHandler<HTMLInputElement>
};

const SearchBox = ({label, searchTerm, handleInput}: SearchBoxProps) => {


    return (
    <div >
        <input type="text"
        id={label}
        name={label}
        value={searchTerm}
        onInput={handleInput} 
        className='searchbox'/>
    </div>
)
}

export default SearchBox
