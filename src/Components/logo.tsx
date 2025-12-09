export default function Logo() {
  return (
    <div
      className="flex justify-center mb-6 p-4 rounded-xl
                 bg-white shadow-md border border-dourado
                 transition-colors duration-500"
    >
      <img
        src="/logo-juliana-arce.png" // coloque sua logo na pasta public/
        alt="Logo Dra. Juliana Arce"
        className="h-16 md:h-20 object-contain transition-opacity duration-500"
      />
    </div>
  )
}
