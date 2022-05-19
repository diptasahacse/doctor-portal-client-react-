import { format } from "date-fns/esm"
import { useEffect, useState } from "react"

const useServices = (date) => {
    const formatedDate = format(date, 'PP');
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch(`http://localhost:5000/available?date=${formatedDate}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [formatedDate])


    return [services, setServices];
}
export default useServices;