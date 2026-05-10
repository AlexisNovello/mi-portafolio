function Projects() {
    const myProjects = [
        {
            title: "Gestion de Netbooks",
            desc: "App de consola en C++ con validacion mediante regex y persistencia mediante archivos .txt",
            tech: ["C++", "Regex"],
            link: "#"
        },
        {
            title: "To-Do List",
            desc: "Gestor de tareas usando React, LocalStorage y Tailwind CSS",
            tech: ["React","Tailwind","JS"],
            link: "#"
        }
    ]
    
    return(
        <section id="projects" className="py-20 px-20 bg-slate-800">
            <div className="mx-auto">
                <h2 className="text-3xl font-bold mb-10 text-center">Mis Proyectos</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2  gap-8">
                        {myProjects.map((project, index) => (
                            <div key={index} className="border p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                                <p className="text-slate-220 mb-4 text-xl1">{project.desc}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map(t => (
                                        <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs font-bold">{t}</span>        
                                    ))}
                                </div>
                                <a href={project.link} className="text-blue-600 font-medium hover:underline">Ver código</a>
                            </div>
                        ))}
                    </div>
            </div>
        </section>
    );
}

export default Projects;