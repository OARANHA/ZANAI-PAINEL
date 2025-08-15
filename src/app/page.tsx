import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-8 p-4">
      <div className="relative w-24 h-24 md:w-32 md:h-32">
        <img
          src="/logo.svg"
          alt="Z.ai Logo"
          className="w-full h-full object-contain"
        />
      </div>
      
      <div className="text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">
          Ambiente de Desenvolvimento Z.ai
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl">
          Bem-vindo ao ambiente integrado de desenvolvimento. Aqui você pode acessar diferentes projetos e aplicações com tecnologias de ponta.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Opção 1: Redirecionamento */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-blue-600 text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Acesso Direto</h3>
            <p className="text-gray-600 text-sm mb-4">
              Redirecionamento automático para o projeto Zanai completo.
            </p>
            <Link 
              href="/zanai"
              className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm block"
            >
              Acessar Zanai
            </Link>
          </div>

          {/* Opção 2: Embedded */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-green-600 text-3xl mb-4">🖥️</div>
            <h3 className="text-lg font-semibold mb-2">Embedded</h3>
            <p className="text-gray-600 text-sm mb-4">
              Visualize o projeto Zanai incorporado nesta interface.
            </p>
            <Link 
              href="/zanai-embedded"
              className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium text-sm block"
            >
              Visualizar Embedded
            </Link>
          </div>

          {/* Opção 3: Externo */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="text-purple-600 text-3xl mb-4">🔗</div>
            <h3 className="text-lg font-semibold mb-2">Acesso Externo</h3>
            <p className="text-gray-600 text-sm mb-4">
              Acesso direto ao servidor externo do projeto Zanai.
            </p>
            <a 
              href="http://21.0.5.196:3000" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-full px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium text-sm block"
            >
              Acessar Externo
            </a>
          </div>
        </div>
        
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">📋 Informações do Ambiente</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-left space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg">🏗️ Projetos Disponíveis</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  <strong>Projeto Principal:</strong> Next.js + TypeScript
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                  <strong>Projeto Zanai:</strong> Gestão de agentes IA
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                  <strong>WebSocket:</strong> Comunicação real-time
                </li>
              </ul>
            </div>
            
            <div className="text-left space-y-3">
              <h3 className="font-semibold text-gray-900 text-lg">🔧 Tecnologias</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-600 rounded-full mr-3"></span>
                  <strong>Frontend:</strong> Next.js 15, React 19
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                  <strong>Estilos:</strong> Tailwind CSS, shadcn/ui
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                  <strong>Banco:</strong> SQLite, Prisma ORM
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                  <strong>SDK:</strong> Z.ai Web Dev SDK
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-white rounded-lg">
            <div className="flex items-center justify-center space-x-2 text-green-600">
              <span className="w-3 h-3 bg-green-600 rounded-full animate-pulse"></span>
              <span className="font-medium">Status: Todos os serviços online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}