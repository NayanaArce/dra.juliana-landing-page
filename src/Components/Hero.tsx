import Portrait from "./Portrait"
import Newsletter from "./Newsletter"

export default function Hero() {
  return (
    <section className="bg-creme py-24 text-center transition-colors duration-500 text-texto">
      <div className="max-w-3xl mx-auto px-6">
        {/* Logo */}
        <div className="flex justify-center items-center mb-12">
          <img
            src="/logo-juliana-arce.png"
            alt="Logo Dra. Juliana Arce"
            className="h-40 md:h-48 object-contain"
          />
        </div>

        {/* Badge de lançamento */}
        <div className="mb-4">
          <span className="inline-block bg-dourado text-white px-4 py-1 rounded-full text-sm font-semibold transition-colors duration-500">
            Lançamento em breve 💜
          </span>
        </div>

        {/* Título e subtítulo */}
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-marrom mb-6 transition-colors duration-500">
          Harmonização Facial com Excelência
        </h1>
        <p className="text-lg md:text-xl font-sans text-texto mb-8 transition-colors duration-500">
          E‑book exclusivo da Dra. Juliana Arce para transformar sua prática profissional
          com segurança e credibilidade.
        </p>

        {/* Foto */}
        <div className="flex justify-center mb-10">
          <Portrait />
        </div>

        {/* Formulário de inscrição */}
        <div className="mt-10 max-w-md mx-auto bg-white text-gray-900 rounded-xl shadow-lg p-8 border border-dourado transition-colors duration-500">
          <h2 className="text-2xl font-serif font-bold text-dourado mb-4 transition-colors duration-500">
            Inscreva-se na newsletter
          </h2>
          <p className="mb-6 text-lg font-sans transition-colors duration-500">
            Receba novidades e conteúdos exclusivos diretamente no seu e‑mail.
          </p>
          <Newsletter showName={true} />
        </div>
      </div>
    </section>
  )
}
