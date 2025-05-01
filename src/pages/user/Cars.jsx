import React, { useEffect, useState } from 'react'
import CarCards from '../../components/car/CarCards'
import { axiosInstance } from '../../axios/axiosinstance'
import { carlist } from '../../services/userServices'

function Cars() {

  const [cars, setCars] = useState([])

  useEffect(() => {
    carlist().then((res) => {
      console.log(res)
      setCars(res.data)
    }).catch((err) => console.log(err))
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5'>
      {
        cars && cars.map((car,i) => (
          <CarCards key={i} car={car} />
        ))
      }
    </div>
  )
}

export default Cars