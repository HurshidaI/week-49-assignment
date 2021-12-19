import React, { useState } from "react"
import "../App.css"
import { FcSearch } from "react-icons/fc"
import { FaHamburger } from "react-icons/fa"

function Navbar() {
  const [shouLink, setShouwLinks] = useState(false)
  return (
    <div className="Navbar">
      <div className="leftSide">
        <div className="links" id={shouLink ? "hidden" : ""}>
          <a href="/home">Home</a>
          <a href="/feedback">Feedback</a>
          <a href="/aboutus">About Us</a>
          <a href="/contact">Contact</a>
        </div>
        <button onClick={() => setShouwLinks(!shouLink)}>
          <FaHamburger />
        </button>
      </div>
      <div className="rightSide">
        <input type="text" placeholder="Search..." />
        <button>
          <FcSearch />
        </button>
      </div>
    </div>
  )
}

export default Navbar
