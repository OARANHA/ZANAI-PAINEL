"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function ZanaiPage() {
  const router = useRouter()

  useEffect(() => {
    // Redirecionar para o projeto Zanai externo
    window.location.href = "http://21.0.5.196:3000"
  }, [router])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">
          Redirecionando para o Projeto Zanai...
        </h1>
        <p className="text-lg text-gray-600">
          Você está sendo redirecionado para o projeto Zanai completo.
        </p>
        <p className="text-sm text-gray-500">
          Se não for redirecionado automaticamente, 
          <a 
            href="http://21.0.5.196:3000" 
            className="text-blue-600 hover:underline ml-1"
          >
            clique aqui
          </a>.
        </p>
        
        <div className="mt-8 animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
      </div>
    </div>
  )
}