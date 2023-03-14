import React from 'react'
import { useParams } from 'react-router-dom'
import { CarService } from '../../../services/car.service'

const CarDetail = () => {

    const { id } = useParams()
    const [car, setCar] = useState({})

    useEffect(() => {
        if (!id) return

        const fetchData = async () => {
            const data = CarService.getById(id)
            setCar(data)
    }
        fetchData()
    }, [id])

  return (
    <div>
        <Link to='/'>Back</Link>
        <CarItem car={car}/>
    </div>
  )
}

export default CarDetail