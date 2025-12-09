import { AcademicCapIcon, BeakerIcon, CheckCircleIcon } from "@heroicons/react/24/outline"

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="py-20 bg-bege transition-colors duration-500 text-texto"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-marrom mb-12 transition-colors duration-500">
          Benefícios do e‑book
        </h3>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 
                          transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <AcademicCapIcon className="h-14 w-14 text-dourado mb-4 transition-colors duration-500" />
            <h4 className="text-xl font-serif text-marrom font-semibold mb-2 transition-colors duration-500">
              Mapa de Harmonização
            </h4>
            <p className="font-sans text-texto transition-colors duration-500">
              Técnicas para aplicar com naturalidade e segurança.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 
                          transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <BeakerIcon className="h-14 w-14 text-dourado mb-4 transition-colors duration-500" />
            <h4 className="text-xl font-serif text-marrom font-semibold mb-2 transition-colors duration-500">
              Escolha da técnica
            </h4>
            <p className="font-sans text-texto transition-colors duration-500">
              Como selecionar a abordagem certa para diferentes níveis de experiência.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 
                          transition-all duration-500 hover:scale-105 hover:shadow-xl">
            <CheckCircleIcon className="h-14 w-14 text-dourado mb-4 transition-colors duration-500" />
            <h4 className="text-xl font-serif text-marrom font-semibold mb-2 transition-colors duration-500">
              Materiais e evidências
            </h4>
            <p className="font-sans text-texto transition-colors duration-500">
              Conteúdo atualizado e fundamentado para elevar sua prática.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
