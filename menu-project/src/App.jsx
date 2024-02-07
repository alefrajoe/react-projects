import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import menu from './data.js'
import Items from './Items'
import Filter from './Filter.jsx'

function App() {

  // Define state to filter the data
  const [filter, setFilter] = useState("");
  const [menuItems, setMenuItems] = useState(menu);

  // Define onchange function for the filter item
  function filterItems() {

    // Get the text in the filter
    const filterString = $('#filter-element').val()

    console.log(filterString)
    // Set the menu items accordingly
    setMenuItems(menu.filter((item) => {return item.title.startsWith(filterString)}))
  }

  // Read the data
  return (
    <>
    <Filter onChangeFunction={filterItems}/>
    <div className='section-center'>
    <Items items={menuItems}/>
    </div>
    </>
  )

}

export default App
