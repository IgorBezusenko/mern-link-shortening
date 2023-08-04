import {NavLink, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {AuthContext} from "../../lib/context/AuthContext";

export const Navbar = () => {
    const navigate = useNavigate()
    const {logout} =useContext(AuthContext)
    const logoutHandler = e=>{
        e.preventDefault()
        logout()
        navigate("/")
    }
    return (
        <nav>
            <div className="nav-wrapper teal darken-1">
                <a href="/" className="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to={"/create"} >Создать</NavLink></li>
                    <li><NavLink to={"/links"} >Ссылки</NavLink></li>
                    <li><a href={"/"}  onClick={logoutHandler} >Выйти</a></li>
                </ul>
            </div>
        </nav>
    );
};

