import axios from 'axios'
import {Url} from '../constants/url'
import { useEffect, useState } from 'react'

const useGetTrip = ()=>{
    const [trip, setTrip] = useState([])
    // const [carregando, setCarregando] = useState(false)
    

    const getTrips = ()=>{
        axios.get(`${Url}/trips`)
        .then((res)=>{
            setTrip(res.data.trips)
            // setCarregando(false)
            setTrip(res.data.trips)
        })
        .catch((err)=>{
            // setErro(err.response.data)
            // setCarregando(false)
            console.log(err)
        })
    }
    useEffect(()=>{
        getTrips()
    },[])

    return ([trip, getTrips])
}
export default useGetTrip