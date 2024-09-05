import './DropdownItem.css'

function DropdownItem({item,isActive,onToggle,onChange}){

  const selectValue = () => {
    onChange(item);
    onToggle();
  }
    
  return(
    <li style={{color: isActive ? '#5380F7' : '#666'}} onClick={selectValue}><a href="/#">{item.label}</a></li>
  )
}

export default DropdownItem;

