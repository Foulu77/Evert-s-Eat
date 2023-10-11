import { useState } from "react";
import { AiFillTag, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { Link } from "react-router-dom";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex flex-wrap justify-between items-center p-4">
      {/* Left Side */}
      <div className="flex items-center">
        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer scale-75 md:scale-100"
        >
          <AiOutlineMenu
            size={30}
            className="text-orange-500 hover:scale-110 duration-300 rounded-full border border-orange-600 p-1"
          />
        </div>
        <Link to="/">
          <h1 className=" text-2xl sm:text-3xl lg:text-4xl px-1 md:px-2 text-transparent bg-clip-text bg-gradient-to-br from-orange-500 to-red-700">
            Evert's<span className="font-bold mx-2">Eats</span>
          </h1>
        </Link>

        <div className="flex items-center justify-center scale-75 md:scale-100 bg-gray-200 rounded-full px-1 md:px-2 py-0 sm:py-1 md:py-2 text-sm md:text-base">
          <p className="bg-gradient-to-r from-orange-500 to-red-700 text-white rounded-full p-2">
            Delivery
          </p>
          <p className="p-1 md:p-2">Pick Up</p>
        </div>
      </div>

      {/* cart button*/}
      <Link to="/cart">
        <button className="bg-gradient-to-r from-orange-500 to-red-700 text-white flex items-center m-2 px-2 py-1 md:px-4 md:py-3 rounded-full border-transparent text-xs md:text-base shadow-md hover:shadow-orange-400 ease-in-out duration-200 hover:scale-95">
          <BsFillCartFill size={20} className="mr-2" />
          Cart
        </button>
      </Link>

      {/* Mobile menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/*sidedrawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-50 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-50 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />
        <h2 className="text-2xl p-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-700">
          Evert's<span className="font-bold mx-2">Eats</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
