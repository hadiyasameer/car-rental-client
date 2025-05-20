import React, { useEffect, useState } from 'react'
import CarCards from '../../components/car/CarCards'
import { axiosInstance } from '../../axios/axiosinstance'
import { carlist } from '../../services/userServices'
import { useLocation, useParams } from 'react-router-dom'
import WheelSpinner from '../../components/shared/WheelSpinner'

function Cars() {

  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const carType = queryParams.get('carType');

  useEffect(() => {
    const filters = carType ? { carType } : {};
    setLoading(true);

    carlist(filters)
      .then((res) => {
        console.log("fetched cars", res.data);
        setCars(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [carType]);

  return (
    <>
      {
        loading ? (
        <WheelSpinner />
        ) : (
          <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
              cars && cars.map((car, i) => (
                <CarCards key={i} car={car} />
              ))
            }
          </div>
        )
      }
    </>
  )
}

export default Cars