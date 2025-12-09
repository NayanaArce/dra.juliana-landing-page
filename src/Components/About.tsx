export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white text-texto transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-marrom mb-6 transition-colors duration-500">
            Sobre a Dra. Juliana Arce
          </h2>
          <p className="text-lg font-sans text-texto leading-relaxed mb-4 transition-colors duration-500">
            Referência em harmonização facial, a Dra. Juliana Arce une ciência e estética
            para oferecer resultados naturais e seguros. Com anos de experiência clínica,
            ela compartilha seu conhecimento em um e‑book exclusivo.
          </p>
          <p className="text-lg font-sans text-texto leading-relaxed transition-colors duration-500">
            Seu objetivo é capacitar profissionais com técnicas atualizadas, protocolos
            de segurança e uma visão humanizada da prática.
          </p>
        </div>

        <div className="flex justify-center">
          <img
            src="/juliana-arce.jpeg"
            alt="Dra. Juliana Arce"
            className="rounded-xl shadow-lg border-4 border-dourado w-full max-w-sm object-cover transition-all duration-500"
          />
        </div>
      </div>
    </section>
  )
}
