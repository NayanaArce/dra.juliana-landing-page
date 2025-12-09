import Hero from "./Components/Hero"
import About from "./Components/About"
import Benefits from "./Components/Benefits"
import Curriculum from "./Components/Curriculum"
import Newsletter from "./Components/Newsletter"
import Footer from "./Components/Footer"

export default function App() {
  return (
    <main className="bg-creme min-h-screen font-sans text-texto transition-colors duration-500">
      <Hero />
      <About />
      <Benefits />
      <Curriculum />

      <section className="py-20 bg-marrom text-center text-creme transition-colors duration-500">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-serif font-bold mb-4 transition-colors duration-500">
            Não perca nenhuma novidade!
          </h2>
          <p className="text-lg font-sans mb-6 transition-colors duration-500">
            Cadastre seu e‑mail e receba conteúdos exclusivos diretamente na sua caixa de entrada.
          </p>
          <div className="max-w-md mx-auto bg-white text-gray-900 rounded-xl shadow-lg p-8 border border-dourado transition-colors duration-500">
            <Newsletter />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
