import { Link } from "react-router-dom"
import PlanCard from "../Components/Plans/PlanCard"

interface Feature {
    text: string;
    available: boolean;
}

interface Plan {
    icon: string;
    iconGradient: string;
    title: string;
    subtitle: string;
    price: string;
    features: Feature[];
    buttonText: string;
    buttonStyle: string;
    containerStyle: string;
    isPopular: boolean;
}

function Plans() {
    const plans: Plan[] = [
        {
            icon: 'bx-bolt-alt',
            iconGradient: 'bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300',
            title: 'Básico',
            subtitle: 'Perfecto para comenzar',
            price: '4.99',
            features: [
                { text: '1 dispositivo simultáneo', available: true },
                { text: 'Calidad HD 720p', available: true },
                { text: 'Catálogo básico', available: true },
                { text: 'Anuncios limitados', available: true },
                { text: 'Sin descargas offline', available: false },
                { text: 'Sin audio premium', available: false }
            ],
            buttonText: 'Comenzar',
            buttonStyle: 'bg-white/5 border border-white/10 hover:bg-white/10',
            containerStyle: 'border border-white/20',
            isPopular: false
        },
        {
            icon: 'bx-star',
            iconGradient: 'bg-gradient-to-r from-orange-700 to-orange-400',
            title: 'Estándar',
            subtitle: 'La mejor opción',
            price: '9.99',
            features: [
                { text: '1 dispositivo simultáneo', available: true },
                { text: 'Calidad HD 720p', available: true },
                { text: 'Catálogo básico', available: true },
                { text: 'Anuncios limitados', available: true },
                { text: 'Sin descargas offline', available: true },
                { text: 'Sin audio premium', available: false }
            ],
            buttonText: 'Elegir Plan',
            buttonStyle: 'bg-red-500 hover:scale-105 drop-shadow-[0_0_12px_rgba(255,0,0,0.6)]',
            containerStyle: 'border border-red-500 shadow-2xl shadow-red-500/60',
            isPopular: true
        },
        {
            icon: 'bx-crown',
            iconGradient: 'bg-gradient-to-r from-yellow-600 to-yellow-300',
            title: 'Premium',
            subtitle: 'Experiencia completa',
            price: '14.99',
            features: [
                { text: '1 dispositivo simultáneo', available: true },
                { text: 'Calidad HD 720p', available: true },
                { text: 'Catálogo básico', available: true },
                { text: 'Anuncios limitados', available: true },
                { text: 'Sin descargas offline', available: true },
                { text: 'Sin audio premium', available: true }
            ],
            buttonText: 'Ir Premium',
            buttonStyle: 'bg-white/5 border border-white/10 hover:bg-white/10',
            containerStyle: 'border border-white/20',
            isPopular: false
        }
    ];

    return(
        <main>
            <header className="flex flex-wrap h-24 justify-around items-center border-b border-gray-800">
                <img className="w-48 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]" src="../../img/MJCinema-SinFondo.png" />
                <span className="text-gray-300">¿Ya tienes cuenta? 
                    <Link to={"/login"} className="text-red-400 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)] cursor-pointer hover:text-red-400 transition-all duration-300 ease-in-out"> Iniciar Sesión</Link>
                </span>
            </header>

            <Link to={"/"} className="text-gray-400 mt-12 px-20 flex items-center gap-3 justify-start"> 
                <i className='bx bx-caret-left'></i> Volver al inicio
            </Link>

            <section className="flex justify-center flex-col items-center mt-8 w-full">
                <span className="bg-red-500/40 py-2 px-4 text-red-500 rounded-3xl text-xs">Elige tu plan</span>
                <div className="flex flex-wrap p-8 gap-3 flex-row mt-4 items-center justify-center text-5xl lg:text-6xl font-black">
                    <h1>Únete a</h1>
                    <img className="w-48 lg:w-72 relative top-2 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]" src="../../img/MJCinema-SinFondo.png" />
                </div>
                <p className="text-gray-400 lg:w-md text-xs max-w-xs lg:text-base text-center mt-1">Selecciona el plan que mejor se adapte a ti. Sin costes ocultos, cancela cuando quieras.</p>
            </section>

            <section className="flex justify-center items-center flex-row flex-wrap gap-6 my-20">
                {plans.map((plan, index) => (
                    <PlanCard key={index} plan={plan} />
                ))}
            </section>

            <section>
                <h1 className="text-center font-bold mb-10 text-xl lg:text-3xl">Incluido en todos los planes</h1>

                <div className="flex justify-center gap-8 items-center flex-wrap">
                    {/* Multi Devices */}
                    <div className="border border-white/20 p-4 bg-white/5 w-56 h-48 rounded-xl flex justify-center items-center flex-col">
                        <div className="bg-red-500/30 w-12 h-12 text-2xl flex justify-center items-center text-red-500  rounded-full"><i className='bxr bx-tv'></i></div>
                        <h1 className="font-semibold mt-4">Multi-dispositivo</h1>
                        <p className="text-sm text-gray-400 text-center">Disfruta en TV, móvil, tablet y PC</p>
                    </div>
                    {/* Download */}
                    <div className="border border-white/20 p-4 bg-white/5 w-56 h-48 rounded-xl flex justify-center items-center flex-col">
                        <div className="bg-red-500/30 w-12 h-12 text-2xl flex justify-center items-center text-red-500  rounded-full"><i className='bxr bx-arrow-to-bottom-stroke'></i></div>
                        <h1 className="font-semibold mt-4">Descargas</h1>
                        <p className="text-sm text-gray-400 text-center">Guarda y ve sin conexión</p>
                    </div>
                    {/* Compromise */}
                    <div className="border border-white/20 p-4 bg-white/5 w-56 h-48 rounded-xl flex justify-center items-center flex-col">
                        <div className="bg-red-500/30 w-12 h-12 text-2xl flex justify-center items-center text-red-500  rounded-full"><i className='bxr  bx-shield'></i></div>
                        <h1 className="font-semibold mt-4">Sin compromisos</h1>
                        <p className="text-sm text-gray-400 text-center">Cancela cuando quieras</p>
                    </div>
                    {/* Audio Premium */}
                    <div className="border border-white/20 p-4 bg-white/5 w-56 h-48 rounded-xl flex justify-center items-center flex-col">
                        <div className="bg-red-500/30 w-12 h-12 text-2xl flex justify-center items-center text-red-500  rounded-full"><i className='bxr  bx-headphone'></i></div>
                        <h1 className="font-semibold mt-4">Audio Premium</h1>
                        <p className="text-sm text-gray-400 text-center">Dolby Atmos disponible</p>
                    </div>
                </div>
            </section>

            <p className="text-center my-20 text-gray-300">¿Tienes preguntas? <Link to={"/faq"} className="text-red-500 hover:underline">Consulta nuestras FAQ</Link></p>
        </main>
    )
}

export default Plans;