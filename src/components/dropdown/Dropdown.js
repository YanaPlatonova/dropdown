import './Dropdown.css';
import DropdownList from '../dropdownList/DropdownList'
import {useState} from 'react';

function Dropdown({items,selectedValue,onChange}){

  const [open,setOpen] = useState(false);

  const toggleDropdown = () => {
    setOpen((open => !open))
  }

  return(
    <div id="wrapper" className="dropdown-wrapper">
      <button id="toggle" className="btn" onClick={toggleDropdown}>
        <span>Account Settings</span>
        {/* <span>{selectedValue?.label ?? 'Account Settings'}</span> */}
        <i className="material-icons">public</i>
      </button>
      <DropdownList items={items} selectedValue={selectedValue} open={open} onToggle={toggleDropdown} onChange={onChange}/>
    </div>
  );
}

export default Dropdown;