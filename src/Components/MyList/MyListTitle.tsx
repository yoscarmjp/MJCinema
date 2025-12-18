
function MyListTitle(){
    return(
        <section className="px-8 lg:px-20 mt-16">
            <h1 className="text-5xl flex items-center gap-3 font-bold"><i className='bxr bx-list text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]'></i> Mi <span className="text-red-500 drop-shadow-[0_0_12px_rgba(255,0,0,0.9)]">Lista</span></h1>
            <p className="mt-3 text-gray-400 text-sm">4 películas guardadas para ver más tarde</p>   
        </section>
    )
}

export default MyListTitle;