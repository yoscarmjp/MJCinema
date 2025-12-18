
function NoFound(){
    return(
        <main className="flex justify-center items-center mt-26 flex-col w-full">

            {/* <img src="../../../img/MJCinema-SinFondo.png" className="w-auto max-w-96 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]" /> */}

            <h1 className="mt-8 text-6xl font-bold">ERROR <span className="text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">404</span></h1>

            <p className="text-gray-300 mt-2">¡Este apartado de la web no existe!</p>

        </main>
    )
}

export default NoFound;