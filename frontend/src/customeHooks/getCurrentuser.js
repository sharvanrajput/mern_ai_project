
import { useEffect } from 'react'
import { useDispatch } from "react-redux"
import { setUser } from '../redux/authSlice'
import { currentuser } from '../api/authApis'




const getCurrentuser = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        const fatchuser = async () => {
            try {
                const res = await currentuser()
                console.log(" this is res of current user")
                dispatch(setUser(res.data))
            } catch (error) {
                dispatch(setUser(null))
                console.log(error)
            }
        }
        fatchuser()
    }, [dispatch])

}

export default getCurrentuser