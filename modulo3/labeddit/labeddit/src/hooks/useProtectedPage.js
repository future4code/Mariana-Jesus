import { useHistory } from 'react-router-dom'
import { useLayoutEffect } from 'react'


const useProtectedPage = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (!token){
    //   goToLogin(history)
    history.push('/login')
    }
  }, [history])
}

export default useProtectedPage 