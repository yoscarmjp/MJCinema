import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer className="flex flex-col px-3 lg:px-20 bg-white/5 border border-white/10">
            <div className="flex justify-around flex-row flex-wrap gap-16 my-10">
                <div className="flex flex-col gap-2">
                    <img className="w-40 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]" src="../../img/MJCinema-SinFondo.png" />
                    <p className="text-gray-400 text-sm max-w-70">Tu destino para el mejor entretenimiento cinematográfico en streaming.</p>
                    <div className="flex flex-row gap-6 mt-3">
                        <Link to={"/"} className="bg-white/20 w-10 h-10 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </Link>
                        <Link to={"/"} className="bg-white/20 w-10 h-10 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                        </Link>
                        <Link to={"/"} className="bg-white/20 w-10 h-10 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </Link>
                        <Link to={"/"} className="bg-white/20 w-10 h-10 rounded-full flex justify-center items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                        </Link>
                    </div>
                </div>

                <div className="flex flex-col gap-2 text-gray-400 font-light">
                    <h1 className="text-white font-semibold">Plataforma</h1>
                    <Link className="hover:text-white transition-all duration-300" to={"/movies"}>Película</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/genres"}>Géneros</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Próximamente</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Top 10</Link>
                </div>

                <div className="flex flex-col gap-2 text-gray-400 font-light">
                    <h1 className="text-white font-semibold">Cuenta</h1>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Mi Perfil</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/my-list"}>Mi Lista</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Historial</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Configuración</Link>
                </div>

                <div className="flex flex-col gap-2 text-gray-400 font-light">
                    <h1 className="text-white font-semibold">Soporte</h1>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Centro de Ayuda</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Contacto</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>FAQ</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Dispositivos</Link>
                </div>

                <div className="flex flex-col gap-2 text-gray-400 font-light">
                    <h1 className="text-white font-semibold">Legal</h1>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Términos de Uso</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Privacidad</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Cookies</Link>
                    <Link className="hover:text-white transition-all duration-300" to={"/"}>Licencias</Link>
                </div>
            </div>

            <div className="text-center py-10 border-t border-white/20">
                <p><span className="text-red-400 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">©</span> 2025 <span className="text-red-400 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">MJCinema</span>. Todos los derechos reservados.</p>
            </div>

        </footer>
    )
}

export default Footer;