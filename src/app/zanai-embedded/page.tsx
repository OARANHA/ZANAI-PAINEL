"use client"

import { useState } from "react"

export default function ZanaiEmbeddedPage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900">Projeto Zanai</h1>
              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                Online
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href="http://21.0.5.196:3000"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Abrir em Nova Aba
              </a>
              <a
                href="/"
                className="px-4 py-2 text-gray-600 text-sm font-medium hover:text-gray-900 transition-colors"
              >
                Voltar
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-90 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando Projeto Zanai...</p>
          </div>
        </div>
      )}

      {/* iframe content */}
      <div className="relative">
        <iframe
          src="http://21.0.5.196:3000"
          className="w-full h-screen border-0"
          onLoad={() => setIsLoading(false)}
          onError={() => setIsLoading(false)}
          title="Projeto Zanai"
        />
      </div>

      {/* Footer info */}
      <div className="bg-white border-t mt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🚀 Projeto Zanai</h3>
              <p>Sistema completo de gestão de agentes IA com Next.js 15, TypeScript e Prisma.</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">🔧 Tecnologias</h3>
              <ul className="space-y-1">
                <li>• Next.js 15 com App Router</li>
                <li>• TypeScript e Tailwind CSS</li>
                <li>• Prisma ORM com SQLite</li>
                <li>• Socket.IO para real-time</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">📋 Acesso</h3>
              <ul className="space-y-1">
                <li>• Admin: admin@zanai.com</li>
                <li>• Usuário: joao.silva@empresa.com</li>
                <li>• Empresa: maria.santos@techcorp.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}