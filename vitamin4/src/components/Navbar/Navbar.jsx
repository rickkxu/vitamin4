//import React
// Import Link to navigate between pages
// Import the CSS file for styling
import "./Navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <div id="navbar">
                <div id="leftNavbar">
                    <Link to="/"><button >My Website</button></Link>
                </div>
                <div id="rightNavbar">
                    <Link to="/home"><button >Home</button></Link>
                    <Link to="/nothome"><button >Not Home</button></Link>
                </div>
            </div>
        </>
    )};
  
export default Navbar;
  // Always export your components so they can be imported in other files