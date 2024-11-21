
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <nav className="flex w-full h-16 transparent">
        <ul className="flex items-center justify-center w-full h-16 gap-4 font-textbask uppercase">
            <li className="py-2 px-4 decoration-purple-950 hover:text-purple-600 hover:scale-105 hover:underline transition-all"><Link to={"/"}>Inicio</Link></li>
            <li className="py-2 px-4 decoration-purple-950 hover:text-purple-600 hover:scale-105 hover:underline transition-all"><Link to={"/challenges"}>Challenges</Link></li>
            <li className="py-2 px-4 decoration-purple-950 hover:text-purple-600 hover:scale-105 hover:underline transition-all"><Link to={"/contenido"}>Contenido</Link></li>
        </ul>
    </nav>
  )
}

export default navbar