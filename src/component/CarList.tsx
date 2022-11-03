import React, { useEffect, useState } from 'react'
import CarModel from '../interfaces/CarModel'
interface Props {
    futureCarsList: CarModel[],
    sortedFutureCar: CarModel[],
    setCheckedElementCarId: (n: number[]) => void
    checkedElementCarId: number[]
}
const CarList = (
    {
        futureCarsList,
        sortedFutureCar,
        setCheckedElementCarId,
        checkedElementCarId }: Props) => {

    const [futureCars, setFutureCars] = useState<CarModel[]>([])
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            setCheckedElementCarId([...checkedElementCarId, Number(event.target.value)])
        } else {
            const removedCheckedElement = checkedElementCarId.filter((carId) => carId !== Number(event.target.value))
            setCheckedElementCarId(removedCheckedElement)
        }

    }
    useEffect(() => {
        if (sortedFutureCar.length) {
            setFutureCars(sortedFutureCar)
        } else {
            setFutureCars(futureCarsList)
        }
    }, [futureCarsList, sortedFutureCar])
    return (
        <ul className="list-car">
            {futureCars.map((car: CarModel) => (
                <li className="item" key={car.id}>
                    <input onChange={handleChangeInput} className="checkbox-car" id={`car-${car.id}`} type='checkbox' value={car.id} />
                    <label htmlFor={`car-${car.id}`} className="car-name">{car.name}</label>
                    <p className="car-id">{car.id}</p>
                </li>
            ))}
        </ul>
    )
}
export default CarList