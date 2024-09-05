import './DropdownList.css'
import DropdownItem from '../dropdownItem/DropdownItem';

function DropdownList({items, selectedValue,open,onToggle,onChange}){

  return(
    <ul className={`dropdown ${open ? 'open' : null}`}>
      {
        items.map((item,id) => <DropdownItem key={id} item={item} isActive={selectedValue?.value === item.value} onToggle={onToggle} onChange={onChange} />)
      }
    </ul>
  )

}

export default DropdownList;