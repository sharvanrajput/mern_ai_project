import { useNavigate } from "react-router-dom"
import { authApis } from "../api/authApis"


const Home = () => {
  const navigate = useNavigate()

  const logout = async () => {
    try {
      await authApis.logout()
      navigate("/login")
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div>

      <button className='bg-red-500 text-white py-2 px-4 rounded active:scale-95' onClick={logout}>Logout</button>


      <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
      <p className="mt-4">This is the home page of our application.</p>
    </div>
  )
}

export default Home
