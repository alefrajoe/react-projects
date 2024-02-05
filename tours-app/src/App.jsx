import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tours from './Tours.jsx'

const url = 'https://course-api.com/react-tours-project';

function App() {
  
  // Define fetch tours states
  let [fetchedTours, setFetchedTours] = useState([]);
  let [areFetchedTours, setAreFetchedTours] = useState(false);

  // Define the function to fetch the tours
  const fetchToursFromApi = async () => {

    // Call the api
    const response = await fetch(url);
    const tours = await response.json();

    // Update the states since the tours have been fetched
    setFetchedTours(tours);
    setAreFetchedTours(true);
  }

  // Define a function to remove the tour
  const removeTour = (id) => {
    const filteredTours = fetchedTours.filter((tour) => {return tour.id !== id;});
    setFetchedTours(filteredTours);
  }

  // Call the API with effect (no re-rendering when hooks are called)
  useEffect(() => {fetchToursFromApi()}, []);

  // Return Loading page if tours have not been fetched
  if (!areFetchedTours){
    return (<>
    Loading...
    </>);
  }

  return (
    <div>
    {fetchedTours.length ? <Tours tours={fetchedTours} removeTour={removeTour}/> : <div><button onClick={fetchToursFromApi}>Refresh tours</button></div>}
    </div>
  );
}

export default App
