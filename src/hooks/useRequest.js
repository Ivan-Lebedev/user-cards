import { useEffect, useState } from "react"
import axios from "axios"

const useRequest = (url, page) => {
  const [data, setData] = useState({ data: [] })
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsError(false)
        setIsLoading(true)
        const result = await axios(url + page)
        setData(result.data)
        setIsLoading(false)
      } catch (e) {
        console.log(e)
        setIsError(true)
        setIsLoading(false)
      }
    }
    getData()
  }, [url, page])

  return { data, isLoading, isError }
}

export default useRequest
