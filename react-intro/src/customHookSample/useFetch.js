import { useEffect, useState } from "react"
import { baseService } from "../network/services/baseService"

const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        baseService.get(url)
            .then(data => {
                setData(data)
                setIsLoading(false)
            })
            .catch(err => {
                setError(err)
                setIsLoading(false)
            })
    }, [])

    // return [data, isLoading, error]
    return { data, isLoading, error, setData }
}

export default useFetch