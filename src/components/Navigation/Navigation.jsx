// Меню з навігаційними посиланнями перенесіть в компонент Navigation. Він складається з двох компонентів NavLink, які вказують на маршрути / і /movies.
// import clsx from "clsx";
import css from "./Navigation.module.css";
import { NavLink } from "react-router-dom";
import {clsx} from 'clsx';

const navLinkClass = ({isActive}) =>{
    return clsx(css.link, isActive && css.active)
    //link is how it is when not active (home and movies) css.active is when it is active
}
  

export default function Navigation (){
    return(<header>
        <div className={css.header}>
            <nav className={css.nav}>
            <NavLink to = "/" className={navLinkClass}>Home </NavLink>
            <NavLink to ="/movies"className={navLinkClass}> Movies </NavLink>  
            </nav>
            </div> 
        </header>
    )
}

{/* <Navlink to ="/" className ={navLinkClass}>Home</Navlink> */}