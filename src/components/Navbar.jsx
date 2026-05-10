
function Navbar() {
    return (
        <nav className="flex justify-between p-2 bg-slate-500 shadow-md">
            <div className="font-bold text-2xl pt-4 px-4">Mi portafolio</div>
            <ul className="flex gap-2 text-xl">
                <li><a href="#about" className="inline-block bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-110 transition-all duration-300">Sobre mi</a></li>
                <li><a href="#skills" className="inline-block bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-110 transition-all duration-300">Habilidades</a></li>
                <li><a href="#projects" className="inline-block bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-110 transition-all duration-300">Proyectos</a></li>
                <li><a href="#contact" className="inline-block bg-slate-500 p-4 rounded hover:bg-slate-600 hover:scale-110 transition-all duration-300">Contactos</a></li>
            </ul>
        </nav>
    );
 
}

export default Navbar;
