import logo from "../assets/logo.jpg"
import { FaHamburger, FaUserCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { authApis } from "../api/authApis";
import getCurrentuser from "../customeHooks/getCurrentuser";
import { setUser } from "../redux/authSlice";
import { useState } from "react";


const Navbar = () => {

  const userdata = useSelector((state) => state.user.user)
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [show, setShow] = useState(false)
  const [showham, setShowham] = useState(false)

  const logout = async () => {
    try {
      await authApis.logout()
      useDispatch
      dispatch(setUser(null))

      getCurrentuser();
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <nav>
      <div className="flex justify-between items-center w-[100%] h-[70px] fixed top-0 md:px-[80px] px-[10px] py-[10px] bg-[#00000047] z-10 ">
        <div className="logo">
          <img src={logo} alt="" className="w-[50px] " />
        </div>

        <div className="lg:flex items-center justify-center gap-4 hidden">

          {
            userdata ? <span className="w-[50px] h-[50px] rounded-full text-white flex items-center justify-center text-[20px] border-2 bg-black border-white cursor-pointer" onClick={() => setShow(!show)}>{userdata?.name.slice(0, 1).toUpperCase()}</span> :
              <FaUserCircle className="w-[30px] h-[30px] fill-black  cursor-pointer" onClick={() => setShow(!show)} />
          }

          {
            userdata?.role === "Educator" &&
            <div className="px-[20px] py-[10px] text-white bg-black rounded-[10px] cursor-pointer">Dashbord</div>
          }
          {!userdata ? <span className="px-[20px] py-[10px] text-white rounded-[10px] text-[18px]  font-light cursor-pointer bg-[#000000d5] focus:scale-95" onClick={() => navigate("/login")}>login</span> :
            <span className="px-[20px] py-[10px] text-black border-2 border-black rounded-[10px] text-[18px]  font-light cursor-pointer bg-white " onClick={() => logout()}>logout</span>}

          {show == true && <div className="absolute top-[110%] right-[15%] flex flex-col items-center justify-center gap-2 text-[16px] rounded-md bg-white px-[15px] py-[10px] border-2 border-black hover:white hover:text-white cursor-pointer hover:bg-black">
            <span className="bg-black text-white px-[30px] py-[10px] rounded-2xl hover:bg-gray-600 " onClick={() => navigate('profile')}>My Profile</span>
            <span className="bg-black text-white px-[30px] py-[10px] rounded-2xl hover:bg-gray-600 ">My Courses</span>
          </div>
          }
        </div>
        <FaHamburger className="lg:hidden visible text-black text-xl cursor-pointer" onClick={() => setShowham(!showham)} />

        <div className={`fixed top-0 w-[350px] left-0 h-[100vh] delay-150 transition-all bg-[#000000d6] lg:hidden visible  flex items-center justify-center flex-col gap-5 z-10   ${showham ? "translate-x-[0]" : "translate-x-[-100%]"}`}>
          asdgas
        </div>

      </div>


    </nav>
  )
}

export default Navbar