import image from "./Assets/hamburguesa.svg"
import image2 from "./Assets/logo.jpg"
import image3 from "./Assets/lupa.png"


export function Header() {
    return(
        <nav>
            <ul className="navbar">
                <li><img className="navbar__menu" src={image} alt="" /></li>
                <li> <img className="navbar__logo" src={image2} alt="" /></li>
                <li><img className="navbar__search" src={image3} alt="" /></li>
            </ul>
        </nav>
    )
}