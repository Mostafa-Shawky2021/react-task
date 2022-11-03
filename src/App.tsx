import React, { useState, useEffect } from 'react';
import './App.css';
import CarList from './component/CarList'
import CarModel from './interfaces/CarModel'


const futureCars: CarModel[] = [
  {
    id: 1,
    name: 'Volkswagen'
  },
  {
    id: 15,
    name: 'BMW'
  },
  {
    id: 3,
    name: 'Toyota'
  },
  {
    id: 7,
    name: 'Nissan'
  },
  {
    id: 5,
    name: 'General Motors'
  },
  {
    id: 20,
    name: 'Hyundai'
  },
  {
    id: 18,
    name: 'Peugeot'
  },
  {
    id: 8,
    name: 'Kia'
  },
  {
    id: 9,
    name: 'Volvo'
  },
  {
    id: 10,
    name: 'Mazda'
  }
]


function App() {
  const [futureCarsList, setFutureCarsList] = useState<CarModel[]>([])
  const [checkedElementCarId, setCheckedElementCarId] = useState<number[]>([])
  const [sortedFutureCar, setSortedFutureCar] = useState<CarModel[]>([])

  useEffect(() => {
    setFutureCarsList(futureCars)
  }, [])


  const handleFilter = () => {
    const getcheckedCar: CarModel[] = []
    // extract selected car from list 
    for (let carList = 0; carList < futureCarsList.length; carList++) {
      for (let checkedCar = 0; checkedCar < checkedElementCarId.length; checkedCar++) {
        if (futureCarsList[carList]['id'] === checkedElementCarId[checkedCar]) {
          getcheckedCar.push(futureCarsList[carList])
        }
      }
    }
    const sortedCheckedCar = [...getcheckedCar].sort((a, b) => a.id - b.id)
    const resetOfCar = [...futureCarsList].sort((a, b) => a.id - b.id)

    setSortedFutureCar(Array.from(new Set([...sortedCheckedCar, ...resetOfCar])))
  }

  const handleReset = () => {
    setSortedFutureCar([])

  }
  return (
    <div className="App">
      <div className="car-box">
        <header className="box-header">
          <button className="btn reset" onClick={handleReset}>reset</button>
          <h2 className="title">Future Cars</h2>
          <button className="btn save" onClick={handleFilter}>apply changes</button>
        </header>
        <div className="box-body">
          <CarList
            futureCarsList={futureCarsList}
            sortedFutureCar={sortedFutureCar}
            setCheckedElementCarId={setCheckedElementCarId}
            checkedElementCarId={checkedElementCarId}
          />
        </div>
      </div>
    </div>
  );
}

export default App;


