import Navbar from "../components/Navbar"
import getCurrentuser from "../customeHooks/getCurrentuser"


const Home = () => {


  getCurrentuser()

  return (
    <>
      <div className="py-20">



        <h1 className="text-4xl font-bold">Welcome to the Home Page</h1>
        <p className="mt-4">This is the home page of our application.</p>
      </div>
    </>
  )
}

export default Home
