import { useState } from "react"
import PhoneInput from "react-phone-input-2"
import "react-phone-input-2/lib/style.css"
import { supabase } from "../supabaseClient"

interface NewsletterProps {
  showName?: boolean
}

export default function Newsletter({ showName = false }: NewsletterProps) {
  const [name, setName] = useState("")
  const [whatsapp, setWhatsapp] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    const { error } = await supabase
      .from("subscribers")
      .insert([{ 
        name: showName ? name : null, 
        whatsapp, 
        email 
      }])

    if (error) {
      console.error(error)
      setStatus("error")
    } else {
      setStatus("success")
      setName("")
      setWhatsapp("")
      setEmail("")

      if (typeof window !== "undefined" && (window as any).fbq) {
        (window as any).fbq("track", "Lead")
        if (whatsapp && whatsapp.trim() !== "") {
          (window as any).fbq("trackCustom", "WhatsAppLead")
        }
      }
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 transition-colors duration-500"
    >
      {showName && (
        <input
          type="text"
          placeholder="Ex.: Maria Silva (opcional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 
                     focus:outline-none focus:ring-2 focus:ring-dourado 
                     transition-all duration-300 bg-white text-texto"
        />
      )}

      <PhoneInput
        country={"br"}
        value={whatsapp}
        onChange={(phone) => setWhatsapp(phone)}
        inputClass="w-full px-4 py-3 rounded-lg border border-gray-300 
                    focus:outline-none focus:ring-2 focus:ring-dourado 
                    transition-all duration-300 bg-white text-texto"
        placeholder="Ex.: +55 92 98888-7777"
      />

      <input
        type="email"
        placeholder="Ex.: maria@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full px-4 py-3 rounded-lg border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-dourado 
                   transition-all duration-300 bg-white text-texto"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full bg-dourado text-white px-6 py-3 rounded-lg font-semibold
                   transition-all duration-500
                   hover:bg-marrom hover:scale-105 disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Quero receber novidades"}
      </button>

      {status === "success" && (
        <p className="text-green-600 font-medium transition-opacity duration-500 animate-fade-in">
          Cadastro realizado com sucesso!
        </p>
      )}
      {status === "error" && (
        <p className="text-red-600 font-medium transition-opacity duration-500 animate-fade-in">
          Erro ao cadastrar. Tente novamente.
        </p>
      )}
    </form>
  )
}
