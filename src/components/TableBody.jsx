import { useState, useEffect} from "react"
import { TableRow } from "./TableRow";

export function TableBody() {
const [flights, setFlights] = useState(null)

  const getFlights = () => {
    fetch("http://localhost:8000/flights")
    .then((res) => res.json())
    .then(flights => setFlights(Object.values(flights.data)))
    .catch(error => console.log(error))
  }

  useEffect(()=> {
    getFlights()
  },[])

  return (
    <tbody>
      {flights?.map((flight, _index) => (
        <TableRow key={_index} flight={flight}/>
      ))}
    </tbody>
  )
}