import React, { useEffect, useState } from 'react'
import CarCards from '../../components/car/CarCards'
import { axiosInstance } from '../../axios/axiosinstance'
import { carlist } from '../../services/userServices'
import { useParams } from 'react-router-dom'

function Cars() {

  const { carType } = useParams()
  const [cars, setCars] = useState([])

  useEffect(() => {
    if (carType) {
      carlist({ carType }).then((res) => {
        console.log("fetched cars", res.data)
        setCars(res.data)
      }).catch((err) => console.log(err))
    }

  }, [carType])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        cars && cars.map((car, i) => (
          <CarCards key={i} car={car} />
        ))
      }
    </div>
  )
}

export default Cars