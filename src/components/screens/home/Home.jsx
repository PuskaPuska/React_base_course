import axios from 'axios';
import { useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CarService } from '../../../services/car.service.js';
import CarItem from './car-item/CarItem.jsx'
import {cars as carsData} from './cars.data.js'
import CreateCarFrom from './create-car-form/CreateCarFrom.jsx';
import VideoPlayer from '../../Player.jsx'
import { AuthContext } from '../../../providers/AuthProvider.jsx';


function Home() {
  const [cars, setCars] = useState();

  const clearCars = useCallback(
    () => () => {
      setCars([]);
    },
    [cars]
  );

  //console.log(cars)
  /*const filteredCars = useMemo(() => cars.filter(car => 
    car.price > 20000), [])*/

  /*useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('URL')
            const data = await  response.json()
            setCars(data)
    }, 
        fetchData()
    },[])*/

  useEffect(() => {
    const fetchData = async () => {
      const data = CarService.getALL();
      setCars(data);
    };
    fetchData();
    return clearCars();
  }, []);

  const {user, setUser} = useContext(AuthContext)

  //const nav = useNavigate()
  //<button onClick={() => nav('/car/1')}>go</button>

  return (
    <div>
      <h1>Cars catalog</h1>
      {user ? (
        <>
          <h2>Welcome, {user.name}!</h2>
          <button onClick={() => setUser(null)}>Logout</button>  
        </>
      ) : (
        <button onClick={() => setUser({ name: "Max" })}>Login</button>
      )}

      <VideoPlayer />
      <CreateCarFrom setCars={setCars} />
      <div>
        {cars.length ? (
          cars.map((car) => <CarItem key={car.id} car={car} />)
        ) : (
          <p>There are no cars</p>
        )}
      </div>
    </div>
  );
}
  
  export default Home
  