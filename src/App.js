import './App.css';
import {useState} from 'react';
import Dropdown from './components/dropdown/Dropdown';

function App() {

  const items = [
    { value:'profile', label:'Profile Information'},
    { value:'password', label:'Change Password'},
    { value:'pro', label:'Become PRO'},
    { value:'help', label:'Help'},
    { value:'logout', label:'Log Out'}];

  const [selectedValue,setValue] = useState(null);

  const onChange = (select) => {
    setValue(select);
  }

  return (
    <div className="container">
      <Dropdown items={items} selectedValue={selectedValue} onChange={onChange}/>
    </div>
  );
}

export default App;
