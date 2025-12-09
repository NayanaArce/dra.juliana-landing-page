import { BookOpenIcon, ShieldCheckIcon, LightBulbIcon } from "@heroicons/react/24/outline"

export default function Curriculum() {
  const items = [
    { text: "Fundamentos da toxina botulínica", icon: BookOpenIcon },
    { text: "Anatomia aplicada ao botox", icon: BookOpenIcon },
    { text: "Técnicas de aplicação de botox", icon: ShieldCheckIcon },
    { text: "Mapeamento facial para harmonização natural", icon: ShieldCheckIcon },
    { text: "Proporções e simetria facial", icon: LightBulbIcon },
    { text: "Protocolos de segurança", icon: ShieldCheckIcon },
    { text: "Gestão de complicações", icon: ShieldCheckIcon },
    { text: "Marketing para profissionais", icon: LightBulbIcon },
    { text: "Casos clínicos detalhados", icon: BookOpenIcon },
    { text: "Tendências e inovações do mercado", icon: LightBulbIcon },
  ]

  return (
    <section
      id="curriculum"
      className="py-20 bg-white text-texto transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-marrom mb-12 transition-colors duration-500">
          Conteúdo do e‑book
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item, i) => {
            const Icon = item.icon
            return (
              <div
                key={i}
                className="flex items-start gap-4 bg-bege rounded-xl p-6 shadow-sm 
                           transition-all duration-500 hover:scale-105 hover:shadow-md"
              >
                <Icon className="h-8 w-8 text-dourado flex-shrink-0 transition-colors duration-500" />
                <span className="text-lg font-sans text-marrom text-left transition-colors duration-500">
                  {item.text}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
