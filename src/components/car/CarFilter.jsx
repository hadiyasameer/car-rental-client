import React, { useEffect, useState } from 'react'
import CarCards from '../../components/car/CarCards'
import { axiosInstance } from '../../axios/axiosinstance'
import { carlist } from '../../services/userServices'
import { useLocation, useParams } from 'react-router-dom'

function Cars() {

  const { carType } = useParams()
  const [cars, setCars] = useState([])
  const location = useLocation();


  useEffect(() => {
    const trimmedType = carType?.trim();
    if (trimmedType) {
      fetchCarsByType(trimmedType);
    } else {
      fetchCarsBySearchFilters();
    }
  }, [carType, location.search]);

  const fetchCarsByType = (type) => {
    carlist({ carType: type })
      .then((res) => {
        console.log('Filtered by carType:', res.data);
        setCars(res.data);
      })
      .catch((err) => console.error(err));
  };

  const fetchCarsBySearchFilters = () => {
    const searchParams = new URLSearchParams(location.search);
    const filters = {};

    for (const [key, value] of searchParams.entries()) {
      if (value.trim()) filters[key] = value.trim();
    }

    carlist(filters)
      .then((res) => {
        console.log('Filtered by search filters:', res.data);
        setCars(res.data);
      })
      .catch((err) => console.error(err));
  };

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