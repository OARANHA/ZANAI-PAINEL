# 📚 Documentação Técnica - Zanai Project

## 🏗️ Visão Geral da Arquitetura

O Zanai Project é construído sobre uma arquitetura moderna e escalável utilizando as melhores práticas de desenvolvimento web.

### Stack Tecnológica

#### Frontend
- **Framework**: Next.js 15 com App Router
- **Linguagem**: TypeScript 5
- **Estilos**: Tailwind CSS 4
- **Componentes**: shadcn/ui
- **Estado**: React Hooks + Zustand (client-side)
- **Server State**: TanStack Query

#### Backend
- **Runtime**: Node.js com Next.js API Routes
- **Banco de Dados**: SQLite
- **ORM**: Prisma
- **Autenticação**: NextAuth.js (estrutura básica)
- **WebSocket**: Socket.io
- **File Upload**: Multer (quando necessário)

#### Infraestrutura
- **Servidor**: Next.js built-in server
- **Banco**: SQLite local (pode ser migrado para PostgreSQL/MySQL)
- **Cache**: Local memory cache
- **File Storage**: Sistema de arquivos local
- **Monitoramento**: Estrutura básica de métricas

---

## 📁 Estrutura do Projeto

### Organização de Diretórios

```
Zanai/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Layout raiz
│   │   ├── page.tsx            # Dashboard principal
│   │   ├── agents/             # Módulo de agentes
│   │   │   ├── page.tsx        # Lista de agentes
│   │   │   └── layout.tsx      # Layout do módulo
│   │   ├── specialists/        # Módulo de especialistas
│   │   │   ├── page.tsx        # Gerador de especialistas
│   │   │   └── layout.tsx      # Layout do módulo
│   │   ├── compositions/       # Módulo de composições
│   │   │   ├── page.tsx        # Lista de composições
│   │   │   └── layout.tsx      # Layout do módulo
│   │   ├── learning/           # Módulo de aprendizado
│   │   │   ├── page.tsx        # Dashboard de aprendizado
│   │   │   └── layout.tsx      # Layout do módulo
│   │   ├── studio/             # Módulo de studio
│   │   │   ├── page.tsx        # Visual Studio
│   │   │   └── layout.tsx      # Layout do módulo
│   │   ├── api/                # API Routes
│   │   │   ├── agents/         # Endpoints de agentes
│   │   │   │   ├── route.ts    # CRUD de agentes
│   │   │   │   └── [id]/       # Operações por ID
│   │   │   ├── specialists/    # Endpoints de especialistas
│   │   │   ├── compositions/   # Endpoints de composições
│   │   │   ├── learning/       # Endpoints de aprendizado
│   │   │   ├── workspaces/     # Endpoints de workspaces
│   │   │   ├── auth/           # Endpoints de autenticação
│   │   │   └── health/         # Health check
│   │   ├── login/              # Página de login
│   │   ├── unauthorized/       # Página de acesso não autorizado
│   │   └── globals.css         # Estilos globais
│   ├── components/             # Componentes React
│   │   ├── ui/                 # shadcn/ui components
│   │   │   ├── button.tsx      # Botão
│   │   │   ├── card.tsx        # Card
│   │   │   ├── input.tsx       # Input
│   │   │   ├── dialog.tsx      # Diálogo
│   │   │   ├── select.tsx      # Select
│   │   │   ├── badge.tsx       # Badge
│   │   │   ├── tabs.tsx        # Tabs
│   │   │   └── ...             # Outros componentes UI
│   │   ├── layout/             # Componentes de layout
│   │   │   ├── ZanaiLayout.tsx # Layout principal
│   │   │   ├── ZanaiHeader.tsx # Header
│   │   │   └── ZanaiBreadcrumb.tsx # Breadcrumb
│   │   ├── agents/             # Componentes específicos de agentes
│   │   │   ├── CreateAgentDialog.tsx
│   │   │   ├── EditAgentDialog.tsx
│   │   │   ├── AgentExecutionDialog.tsx
│   │   │   └── AgentDetailsDialog.tsx
│   │   ├── specialists/        # Componentes de especialistas
│   │   │   └── SpecialistGenerator.tsx
│   │   ├── cards/              # Cards reutilizáveis
│   │   │   ├── ZanaiStatsCard.tsx
│   │   │   └── ZanaiFeatureCard.tsx
│   │   └── shared/             # Componentes compartilhados
│   │       ├── ZanaiStatusBadge.tsx
│   │       ├── ZanaiLoadingState.tsx
│   │       └── ZanaiErrorState.tsx
│   ├── lib/                    # Bibliotecas e utilitários
│   │   ├── db.ts               # Cliente Prisma
│   │   ├── utils.ts            # Utilitários gerais
│   │   ├── colors.ts           # Sistema de cores
│   │   ├── socket.ts           # Configuração Socket.io
│   │   ├── agent-execution.ts  # Lógica de execução de agentes
│   │   ├── metrics.ts          # Sistema de métricas
│   │   ├── code-context.ts     # Contexto de código
│   │   ├── specialist-service.ts # Serviço de especialistas
│   │   ├── context-persistence.ts # Persistência de contexto
│   │   ├── zai-config.ts       # Configuração Z.ai
│   │   ├── supabase.ts         # Integração Supabase (opcional)
│   │   └── metrics-middleware.ts # Middleware de métricas
│   └── hooks/                  # React Hooks customizados
│       ├── use-mobile.ts       # Hook para detecção de mobile
│       └── use-toast.ts        # Hook para notificações toast
├── prisma/
│   ├── schema.prisma           # Schema do banco de dados
│   ├── migrations/             # Migrações do banco
│   └── seed.ts                # Seed inicial
├── public/
│   ├── logo.svg                # Logo da aplicação
│   ├── favicon.ico             # Favicon
│   └── robots.txt              # Robots.txt
├── vscode-extension/           # Extensão VS Code
│   ├── package.json            # Configuração da extensão
│   ├── tsconfig.json           # TypeScript config
│   └── src/
│       ├── extension.ts        # Arquivo principal da extensão
│       └── agentProvider.ts    # Provider de agentes
├── examples/                   # Exemplos de uso
│   └── websocket/
│       └── page.tsx           # Exemplo de WebSocket
├── tailwind.config.ts          # Configuração Tailwind
├── tsconfig.json               # Configuração TypeScript
├── next.config.ts              # Configuração Next.js
├── components.json             # Configuração shadcn/ui
├── package.json                # Dependências do projeto
├── server.ts                   # Servidor customizado (opcional)
└── README.md                   # Documentação do projeto
```

---

## 🗄️ Banco de Dados

### Schema Prisma

O banco de dados é projetado para suportar tanto o sistema Zanai quanto um sistema urbano integrado.

#### Modelos Principais

##### User
```typescript
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  role      String   @default("user")
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  
  // Relacionamentos Zanai
  agents    Agent[]
  workspaces Workspace[]
  
  // Relacionamentos Sistema Urbano
  companyId String?
  company   Company? @relation(fields: [companyId], references: [id])
  clients    Client[]
}
```

##### Workspace
```typescript
model Workspace {
  id          String   @id @default(cuid())
  name        String
  description String?
  config      String   // JSON
  vscodeContext String?
  lastSyncedAt DateTime?
  userId      String
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  user        User     @relation(fields: [userId], references: [id])
  agents      Agent[]
  compositions Composition[]
}
```

##### Agent
```typescript
model Agent {
  id          String   @id @default(cuid())
  name        String
  description String?
  type        String   // 'template', 'custom', 'composed'
  config      String   // YAML
  knowledge   String?  // Markdown
  templateId  String?
  status      String   @default("active")
  workspaceId String
  userId      String?
  createdAt   DateTime @default(now())
  updatedAt   DateTime @updatedAt
  
  workspace   Workspace @relation(fields: [workspaceId], references: [id])
  user        User?     @relation(fields: [userId], references: [id])
  compositions Composition[]
  learnings   Learning[]
  executions  AgentExecution[]
  metrics     AgentMetrics[]
}
```

##### Composition
```typescript
model Composition {
  id            String   @id @default(cuid())
  name          String
  description   String?
  config        String   // YAML
  status        String   @default("draft")
  workspaceId   String
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  workspace     Workspace  @relation(fields: [workspaceId], references: [id])
  agents        Agent[]
  executions    Execution[]
}
```

##### Learning
```typescript
model Learning {
  id          String   @id @default(cuid())
  agentId     String
  type        String   // 'feedback', 'pattern', 'adaptation'
  data        String   // JSON
  confidence  Float    @default(0.0)
  createdAt   DateTime @default(now())
  
  agent       Agent    @relation(fields: [agentId], references: [id])
}
```

### Índices e Performance

#### Índices Principais
```typescript
// Otimização para queries frequentes
@@index([userId])           // User
@@index([workspaceId])       // Workspace
@@index([agentId])          // Agent
@@index([agentId, timestamp]) // AgentMetrics
@@index([metricName, timestamp]) // AgentMetrics
@@index([status])           // AgentExecution, Execution
```

#### Estratégias de Otimização
1. **Query Optimization**: Uso de índices para queries comuns
2. **Connection Pooling**: Configuração adequada de conexões
3. **Caching**: Cache para queries frequentes
4. **Pagination**: Paginação para grandes conjuntos de dados

---

## 🔌 API Endpoints

### Estrutura da API

A API segue padrões RESTful com algumas extensões para funcionalidades específicas.

#### Agents API

##### GET /api/agents
```typescript
// Lista todos os agentes
// Query params: workspaceId, status, type
Response: Agent[]
```

##### POST /api/agents
```typescript
// Cria um novo agente
Body: {
  name: string;
  description?: string;
  type: 'template' | 'custom' | 'composed';
  config: string; // YAML
  knowledge?: string; // Markdown
  workspaceId: string;
}
Response: Agent
```

##### GET /api/agents/[id]
```typescript
// Obtém um agente específico
Response: Agent
```

##### PUT /api/agents/[id]
```typescript
// Atualiza um agente
Body: Partial<Agent>
Response: Agent
```

##### DELETE /api/agents/[id]
```typescript
// Remove um agente
Response: { success: boolean }
```

##### POST /api/agents/[id]/execute
```typescript
// Executa um agente
Body: {
  input: string;
  context?: Record<string, any>;
}
Response: AgentExecution
```

#### Specialists API

##### GET /api/specialists
```typescript
// Lista categorias e templates
Response: {
  categories: SpecialistCategory[];
  templates: SpecialistTemplate[];
}
```

##### POST /api/specialists
```typescript
// Gera um novo especialista
Body: {
  category: string;
  specialty: string;
  requirements: string;
}
Response: SpecialistTemplate
```

##### POST /api/specialists/download
```typescript
// Baixa especialista em Markdown
Body: {
  specialistId: string;
}
Response: Blob (Markdown file)
```

##### POST /api/specialists/structure
```typescript
// Gera estrutura de pastas
Body: {
  basePath: string;
}
Response: {
  totalFiles: number;
  basePath: string;
}
```

#### Compositions API

##### GET /api/compositions
```typescript
// Lista composições
// Query params: workspaceId, status
Response: Composition[]
```

##### POST /api/compositions
```typescript
// Cria uma nova composição
Body: {
  name: string;
  description?: string;
  config: string; // YAML
  workspaceId: string;
}
Response: Composition
```

##### POST /api/compositions/execute
```typescript
// Executa uma composição
Body: {
  compositionId: string;
  input: string;
}
Response: Execution
```

##### PATCH /api/compositions/[id]/archive
```typescript
// Arquiva/desarquiva composição
Response: Composition
```

#### Learning API

##### GET /api/learning
```typescript
// Obtém dados de aprendizado
Response: Learning[]
```

##### GET /api/analytics
```typescript
// Obtém analytics avançados
Response: {
  metrics: AgentMetrics[];
  insights: any[];
}
```

#### Workspaces API

##### GET /api/workspaces
```typescript
// Lista workspaces do usuário
Response: Workspace[]
```

##### POST /api/workspaces
```typescript
// Cria novo workspace
Body: {
  name: string;
  description?: string;
  config?: string;
}
Response: Workspace
```

#### Health Check

##### GET /api/health
```typescript
// Verifica saúde do sistema
Response: {
  status: 'healthy' | 'unhealthy';
  timestamp: string;
  services: {
    database: 'up' | 'down';
    cache: 'up' | 'down';
    ai: 'up' | 'down';
  };
}
```

### Formatos de Resposta

#### Sucesso
```typescript
{
  success: true;
  data: any;
  message?: string;
  timestamp: string;
}
```

#### Erro
```typescript
{
  success: false;
  error: {
    code: string;
    message: string;
    details?: any;
  };
  timestamp: string;
}
```

### Validação e Segurança

#### Input Validation
```typescript
// Exemplo de middleware de validação
import { z } from 'zod';

const createAgentSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().optional(),
  type: z.enum(['template', 'custom', 'composed']),
  config: z.string().min(1),
  knowledge: z.string().optional(),
  workspaceId: z.string(),
});
```

#### Rate Limiting
```typescript
// Configuração de rate limiting
const rateLimit = {
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // limite por IP
  message: 'Too many requests from this IP'
};
```

---

## 🎨 Sistema de Design

### Cores e Temas

#### Sistema de Cores Unificado

O sistema utiliza um sistema de cores unificado definido em `src/lib/colors.ts`:

```typescript
export const ZanaiColors = {
  // Cores de status
  status: {
    info: {
      bg: 'from-blue-500 to-blue-600',
      light: 'bg-blue-100',
      text: 'text-blue-800',
      border: 'border-blue-200',
      hover: 'hover:from-blue-600 hover:to-blue-700'
    },
    success: {
      bg: 'from-green-500 to-green-600',
      light: 'bg-green-100',
      text: 'text-green-800',
      border: 'border-green-200',
      hover: 'hover:from-green-600 hover:to-green-700'
    },
    warning: {
      bg: 'from-yellow-500 to-yellow-600',
      light: 'bg-yellow-100',
      text: 'text-yellow-800',
      border: 'border-yellow-200',
      hover: 'hover:from-yellow-600 hover:to-yellow-700'
    },
    error: {
      bg: 'from-red-500 to-red-600',
      light: 'bg-red-100',
      text: 'text-red-800',
      border: 'border-red-200',
      hover: 'hover:from-red-600 hover:to-red-700'
    },
    purple: {
      bg: 'from-purple-500 to-purple-600',
      light: 'bg-purple-100',
      text: 'text-purple-800',
      border: 'border-purple-200',
      hover: 'hover:from-purple-600 hover:to-purple-700'
    },
    orange: {
      bg: 'from-orange-500 to-orange-600',
      light: 'bg-orange-100',
      text: 'text-orange-800',
      border: 'border-orange-200',
      hover: 'hover:from-orange-600 hover:to-orange-700'
    }
  },
  
  // Gradientes por página
  gradients: {
    home: 'from-purple-900 via-blue-900 to-indigo-900',
    agents: 'from-blue-900 via-cyan-900 to-teal-900',
    specialists: 'from-purple-900 via-pink-900 to-rose-900',
    compositions: 'from-green-900 via-emerald-900 to-teal-900',
    learning: 'from-orange-900 via-red-900 to-pink-900',
    studio: 'from-gray-900 via-slate-900 to-zinc-900'
  }
};
```

#### Classes de Gradiente

```typescript
export const gradientClasses = {
  text: 'bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent',
  primary: 'bg-gradient-to-r from-purple-500 to-blue-500',
  primaryHover: 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700',
  secondary: 'bg-gradient-to-r from-green-500 to-teal-500',
  accent: 'bg-gradient-to-r from-orange-500 to-red-500'
};
```

### Componentes UI

#### shadcn/ui Components

O projeto utiliza shadcn/ui como base para componentes UI:

```typescript
// Exemplo de componente personalizado
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const CustomCard = ({ title, description, children }) => (
  <Card className="hover:shadow-xl transition-all duration-300">
    <CardHeader>
      <CardTitle className="text-lg">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      {children}
    </CardContent>
  </Card>
);
```

#### Componentes Customizados

##### ZanaiLayout
```typescript
// Layout principal do sistema
interface ZanaiLayoutProps {
  children: React.ReactNode;
  breadcrumbItems?: BreadcrumbItem[];
}

const ZanaiLayout: React.FC<ZanaiLayoutProps> = ({ 
  children, 
  breadcrumbItems = [] 
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:to-slate-800">
      <ZanaiHeader />
      <div className="container mx-auto px-4 py-8">
        {breadcrumbItems.length > 0 && (
          <ZanaiBreadcrumb items={breadcrumbItems} />
        )}
        {children}
      </div>
    </div>
  );
};
```

##### ZanaiStatsCard
```typescript
// Card de estatísticas
interface ZanaiStatsCardProps {
  title: string;
  value: number;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    type: 'positive' | 'negative' | 'neutral';
  };
  badge?: string;
  borderColor?: string;
  textColor?: string;
}
```

### Responsividade

#### Breakpoints
```css
/* Breakpoints do Tailwind */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

#### Estratégia Mobile-First
```typescript
// Exemplo de componente responsivo
const ResponsiveCard = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Cards responsivos */}
  </div>
);
```

---

## ⚡ Performance e Otimização

### Estratégias de Performance

#### 1. Otimização de Carregamento

##### Code Splitting
```typescript
// Lazy loading de componentes
const LazyComponent = React.lazy(() => import('./LazyComponent'));

// Uso no componente
const App = () => (
  <Suspense fallback={<Loading />}>
    <LazyComponent />
  </Suspense>
);
```

##### Dynamic Imports
```typescript
// Import dinâmico de rotas
const AgentsPage = dynamic(() => import('@/app/agents/page'), {
  loading: () => <Loading />,
  ssr: false // Desabilita SSR se necessário
});
```

#### 2. Otimização de Imagens

```typescript
import Image from 'next/image';

// Uso otimizado de imagens
<Image
  src="/hero-image.jpg"
  alt="Hero image"
  width={800}
  height={600}
  priority // Para imagens acima da fold
  placeholder="blur" // Placeholder com blur
  blurDataURL="data:image/jpeg;base64,/..." // Data URL para blur
/>
```

#### 3. Caching

##### Cache de API
```typescript
// Cache com TanStack Query
const useAgents = () => {
  return useQuery({
    queryKey: ['agents'],
    queryFn: () => fetch('/api/agents').then(res => res.json()),
    staleTime: 5 * 60 * 1000, // 5 minutos
    cacheTime: 10 * 60 * 1000, // 10 minutos
  });
};
```

##### Cache de Banco de Dados
```typescript
// Cache no nível do Prisma
const agents = await prisma.agent.findMany({
  cacheStrategy: {
    ttl: 60, // 60 segundos
  },
});
```

#### 4. Otimização de Banco de Dados

##### Query Optimization
```typescript
// Query otimizada com includes e selects
const agents = await prisma.agent.findMany({
  include: {
    workspace: {
      select: {
        id: true,
        name: true,
      },
    },
    user: {
      select: {
        id: true,
        name: true,
      },
    },
  },
  where: {
    status: 'active',
  },
  orderBy: {
    createdAt: 'desc',
  },
  take: 20, // Limitação de resultados
});
```

##### Indexação
```typescript
// Índices compostos para queries complexas
model Agent {
  // ...
  @@index([workspaceId, status, createdAt])
}
```

### Monitoramento de Performance

#### Métricas
```typescript
// Sistema de métricas
interface AgentMetrics {
  id: string;
  timestamp: BigInt;
  agentId: string;
  metricName: string;
  metricValue: Float;
  tags?: string;
}
```

#### Health Checks
```typescript
// Health check endpoint
export async function GET() {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    services: {
      database: await checkDatabase(),
      cache: await checkCache(),
      ai: await checkAIService(),
    },
  };
  
  return NextResponse.json(health);
}
```

---

## 🔒 Segurança

### Autenticação e Autorização

#### Estrutura de Autenticação
```typescript
// Middleware de autenticação
import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  const token = await getToken({ req });
  
  if (!token) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  
  // Adicionar usuário ao request
  req.headers.set('x-user-id', token.sub as string);
  req.headers.set('x-user-role', token.role as string);
  
  return NextResponse.next();
}
```

#### Role-Based Access Control (RBAC)
```typescript
// Verificação de permissões
const checkPermission = (userRole: string, requiredRole: string) => {
  const roleHierarchy = {
    'user': 0,
    'admin': 1,
    'super_admin': 2,
  };
  
  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
};
```

### Validação de Input

#### Schema Validation com Zod
```typescript
import { z } from 'zod';

const createAgentSchema = z.object({
  name: z.string().min(1, 'Name is required').max(100, 'Name too long'),
  description: z.string().optional(),
  type: z.enum(['template', 'custom', 'composed']),
  config: z.string().min(1, 'Configuration is required'),
  knowledge: z.string().optional(),
  workspaceId: z.string().min(1, 'Workspace is required'),
});

export const validateCreateAgent = (data: unknown) => {
  return createAgentSchema.parse(data);
};
```

### Proteção contra Ataques

#### XSS Prevention
```typescript
// Sanitização de HTML
import DOMPurify from 'dompurify';

const sanitizeHTML = (html: string) => {
  return DOMPurify.sanitize(html);
};
```

#### SQL Injection Prevention
```typescript
// Uso de parameterized queries com Prisma
const agents = await prisma.agent.findMany({
  where: {
    name: {
      contains: searchTerm, // Prisma sanitiza automaticamente
    },
  },
});
```

#### Rate Limiting
```typescript
// Implementação de rate limiting
import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // limite por IP
  message: {
    error: 'Too many requests',
    message: 'Please try again later',
  },
});
```

---

## 🧪 Testes

### Estratégia de Testes

#### Testes Unitários
```typescript
// Exemplo com Jest
import { render, screen } from '@testing-library/react';
import { ZanaiStatsCard } from '@/components/cards/ZanaiStatsCard';

describe('ZanaiStatsCard', () => {
  it('renders with correct props', () => {
    render(
      <ZanaiStatsCard
        title="Test Title"
        value={42}
        description="Test Description"
        icon={<div>Icon</div>}
      />
    );
    
    expect(screen.getByText('Test Title')).toBeInTheDocument();
    expect(screen.getByText('42')).toBeInTheDocument();
    expect(screen.getByText('Test Description')).toBeInTheDocument();
  });
});
```

#### Testes de Integração
```typescript
// Testes de API com Supertest
import request from 'supertest';
import { app } from '@/app';

describe('Agents API', () => {
  it('should create a new agent', async () => {
    const response = await request(app)
      .post('/api/agents')
      .send({
        name: 'Test Agent',
        description: 'Test Description',
        type: 'template',
        config: 'test: config',
        workspaceId: 'test-workspace-id',
      })
      .expect(201);
    
    expect(response.body.success).toBe(true);
    expect(response.body.data.name).toBe('Test Agent');
  });
});
```

#### Testes E2E
```typescript
// Testes E2E com Playwright
import { test, expect } from '@playwright/test';

test('user can create agent', async ({ page }) => {
  await page.goto('/agents');
  await page.click('text=Novo Agente');
  await page.fill('input[name="name"]', 'Test Agent');
  await page.fill('textarea[name="description"]', 'Test Description');
  await page.click('button:has-text("Criar Agente")');
  
  await expect(page.locator('text=Test Agent')).toBeVisible();
});
```

### Configuração de Testes

#### Jest Configuration
```json
{
  "jest": {
    "testEnvironment": "jsdom",
    "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
    "testPathIgnorePatterns": [
      "<rootDir>/.next/",
      "<rootDir>/node_modules/"
    ],
    "collectCoverageFrom": [
      "src/**/*.{js,jsx,ts,tsx}",
      "!src/**/*.d.ts"
    ]
  }
}
```

#### Playwright Configuration
```typescript
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
```

---

## 🚀 Deploy e DevOps

### Estratégia de Deploy

#### Build Process
```json
{
  "scripts": {
    "build": "next build",
    "build:analyze": "ANALYZE=true next build",
    "export": "next build && next export",
    "start": "next start",
    "dev": "next dev",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
```

#### Environment Configuration
```bash
# .env.local
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"
ZAI_API_KEY="your-zai-api-key"
```

#### Docker Configuration
```dockerfile
# Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# Set the correct permission for prerender cache
RUN mkdir .next
RUN chown nextjs:nodejs .next

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### CI/CD Pipeline

#### GitHub Actions
```yaml
# .github/workflows/deploy.yml
name: Deploy

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Run tests
      run: npm test
      
    - name: Build
      run: npm run build
      
    - name: Deploy to production
      run: |
        # Deploy commands
        echo "Deploying to production..."
```

### Monitoramento e Logging

#### Logging Structure
```typescript
// Logger configuration
import winston from 'winston';

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'zanai-api' },
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}
```

#### Error Tracking
```typescript
// Error boundary component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Log error to monitoring service
    logger.error('React Error Boundary:', { error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return <ZanaiErrorState title="Something went wrong" />;
    }

    return this.props.children;
  }
}
```

---

## 📚 Documentação Adicional

### API Reference

Consulte o arquivo `API-REFERENCE.md` para documentação completa da API.

### Guia de Contribuição

Consulte o arquivo `CONTRIBUTING.md` para guia de contribuição ao projeto.

### Changelog

Consulte o arquivo `CHANGELOG.md` para histórico de alterações.

---

*Esta documentação técnica cobre os aspectos fundamentais do projeto Zanai, fornecendo uma base sólida para desenvolvedores trabalharem no sistema.*