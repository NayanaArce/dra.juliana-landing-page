export default function Footer() {
  return (
    <footer
      className="bg-marrom text-creme py-12 transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col items-center gap-8">
        {/* Logo centralizada em evidência */}
        <img
          src="/logo-juliana-arce.png"
          alt="Logo Dra. Juliana Arce"
          className="mx-auto h-36 md:h-44 object-contain"
        />

        {/* Links */}
        <nav className="flex gap-6 text-sm font-sans">
          <a
            href="/politica-de-privacidade"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dourado transition-colors duration-500"
          >
            Política de Privacidade
          </a>
          <a
            href="https://instagram.com/drajulianaarce"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dourado transition-colors duration-500"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/drajulianathaumaturgo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-dourado transition-colors duration-500"
          >
            Facebook
          </a>
        </nav>

        {/* Créditos */}
        <p className="text-xs text-creme/80 font-sans transition-colors duration-500">
          © {new Date().getFullYear()} Dra. Juliana Arce — Todos os direitos reservados
        </p>
      </div>
    </footer>
  )
}
