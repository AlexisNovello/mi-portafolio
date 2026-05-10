function Contact() {
    return(
        <footer className="bg-slate-900 text-slate-100 py-6 mt-12">
            <div className="flex max-w-4xl mx-auto">
                <p className="mr-4">Contacto:</p>
            
                <div className="flex justify-center gap-6">
                <a href="https://github.com/tu-usuario" className="inline-block hover:scale-110 hover:text-blue-400 transition-all">GitHub</a>
                <a href="https://linkedin.com/in/tu-usuario" className="inline-block hover:scale-110 hover:text-blue-400 transition-all">LinkedIn</a>
                <a href="https://linkedin.com/in/tu-usuario" className="inline-block hover:scale-110 hover:text-blue-400 transition-all">eMail</a>
                </div>
                
                <p className="text-slate-500 text-sm ml-auto">
                © {new Date().getFullYear()} - Novello Alexis
                </p>
            </div>
        </footer>
    );
}

export default Contact;