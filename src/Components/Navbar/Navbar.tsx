import { useLocation, Link } from "react-router-dom";

function Navbar(){
    const location = useLocation();
    return(
        <header className="w-full h-32 flex justify-around items-center">
            <img className="w-48 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]" src="../../img/MJCinema-SinFondo.png" />
            <nav className="flex gap-8 text-gray-300 font-medium">
                <Link
                    className={`${location.pathname === "/"? "text-red-400 border-b pb-1" : "text-gray-300"}`} 
                    to={"/"}
                >
                    Inicio
                </Link>
                <Link
                    className={`${location.pathname === "/movies"? "text-red-400 border-b pb-1" : "text-gray-300"}`} 
                    to={"/movies"}
                >
                    Películas
                </Link>
                <Link
                    className={`${location.pathname === "/genres"? "text-red-400 border-b pb-1" : "text-gray-300"}`} 
                    to={"/genres"}
                >
                    Género
                </Link>
                <Link
                    className={`${location.pathname === "/my-list"? "text-red-400 border-b pb-1" : "text-gray-300"}`} 
                    to={"/my-list"}
                >
                    Mi Lista
                </Link>
            </nav>
            <div className="flex gap-4 items-center justify-center">
                <button className="text-2xl text-gray-300 relative top-1 cursor-pointer hover:bg-white/15 transition-all duration-300 ease-in-out w-10 flex justify-center items-center h-10 rounded-xl"><i className='bx bx-search'></i></button>
                <button className="text-2xl text-gray-300 relative top-1 cursor-pointer hover:bg-white/15 transition-all duration-300 ease-in-out w-10 flex justify-center items-center h-10 rounded-xl"><i className='bx bx-bell'></i></button>
                <Link to={"/login"} className="bg-white/15 hover:bg-white/20 duration-300 transition-all px-5 py-2 rounded-xl cursor-pointer border border-white/30 flex justify-center items-center gap-2"><i className='bx bx-user'></i> Iniciar Sesión</Link>
                <Link to={"/plans"} className="bg-red-500 hover:bg-red-700 transition-all duration-300 ease-in-out px-5 py-2 rounded-xl cursor-pointer font-semibold">Suscribirte</Link>
            </div>
        </header>
    )
}

export default Navbar;