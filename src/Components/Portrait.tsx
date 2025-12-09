export default function Portrait() {
  return (
    <div
      className="relative inline-block rounded-xl overflow-hidden border-4 border-dourado shadow-lg
                 bg-white transition-all duration-500"
    >
      <img
        src="/juliana-arce.jpeg" // arquivo dentro da pasta public/
        alt="Dra. Juliana Arce"
        className="block w-full rounded-xl object-cover transition-opacity duration-500"
      />
    </div>
  )
}
