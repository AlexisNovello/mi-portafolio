import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
    return (
        <div className="flex min-h-screen w-full subpixel-antialiased">
            <Navbar />
                <main className="flex-[3]">
                    <Home />
                    <Projects />
                    <Contact />
                </main>
        </div>
    );
}

export default App
