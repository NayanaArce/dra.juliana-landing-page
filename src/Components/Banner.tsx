import { useState } from "react"

export default function Banner() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-dourado text-white fixed top-0 w-full z-50 shadow-md transition-colors duration-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 py-2">
        <span className="font-semibold transition-colors duration-500">
          📢 E-book exclusivo da Dra. Juliana Arce — lançamento em breve!
        </span>
        <button
          onClick={() => setVisible(false)}
          aria-label="Fechar banner"
          className="ml-4 text-white font-bold hover:text-marrom transition-colors duration-500"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
