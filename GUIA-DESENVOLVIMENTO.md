# 🛠️ Guia de Desenvolvimento - Zanai Project

## 🚀 Introdução

Bem-vindo ao guia de desenvolvimento do Zanai Project! Este documento irá guiá-lo através do processo de configuração do ambiente de desenvolvimento, padrões de código, e melhores práticas para contribuir com o projeto.

---

## 📋 Pré-requisitos

### Requisitos Mínimos

- **Node.js**: Versão 18.x ou superior
- **npm**: Versão 8.x ou superior
- **Git**: Versão 2.x ou superior
- **VS Code**: Versão 1.70 ou superior (recomendado)

### Ferramentas Recomendadas

- **VS Code**: Editor de código principal
- **Docker**: Para containerização (opcional)
- **Postman/Insomnia**: Para testes de API
- **GitKraken/GitLens**: Para melhor experiência com Git

---

## 🔧 Configuração do Ambiente

### 1. Clonando o Repositório

```bash
# Clone o repositório
git clone https://github.com/OARANHA/ZANAI-PAINEL.git

# Entre no diretório do projeto
cd ZANAI-PAINEL

# Instale as dependências
npm install
```

### 2. Configuração do Banco de Dados

```bash
# Instale o Prisma CLI globalmente (se necessário)
npm install -g prisma

# Gere o cliente Prisma
npx prisma generate

# Crie o banco de dados e rode as migrações
npx prisma db push

# (Opcional) Rode o seed para dados iniciais
npx prisma db seed
```

### 3. Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```bash
# .env.local

# Banco de Dados
DATABASE_URL="file:./dev.db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-super-secret-key-here"

# Z.ai SDK
ZAI_API_KEY="your-zai-api-key-here"

# (Opcional) Supabase
NEXT_PUBLIC_SUPABASE_URL="your-supabase-url"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-supabase-anon-key"
```

### 4. Iniciando o Servidor de Desenvolvimento

```bash
# Inicie o servidor de desenvolvimento
npm run dev

# Acesse a aplicação em http://localhost:3000
```

### 5. Verificando a Instalação

```bash
# Rode os testes para verificar tudo está funcionando
npm test

# Verifique o linting
npm run lint

# Verifique os tipos TypeScript
npm run type-check
```

---

## 📁 Estrutura do Projeto

### Visão Geral

```
ZANAI-PAINEL/
├── src/                    # Código fonte principal
│   ├── app/               # Next.js App Router
│   ├── components/        # Componentes React
│   ├── lib/               # Utilitários e configurações
│   └── hooks/             # Hooks customizados
├── prisma/                # Schema e migrações do banco
├── public/                # Arquivos estáticos
├── docs/                  # Documentação
└── tests/                 # Testes
```

### Convenções de Nomenclatura

#### Arquivos e Diretórios

- **Componentes React**: `PascalCase.tsx` (ex: `ZanaiLayout.tsx`)
- **Páginas**: `kebab-case/` (ex: `agents/`)
- **Utilitários**: `kebab-case.ts` (ex: `agent-execution.ts`)
- **Hooks**: `use-{kebab-case}.ts` (ex: `use-mobile.ts`)
- **Constantes**: `UPPER_CASE.ts` (ex: `COLORS.ts`)
- **Tipos**: `{name}.types.ts` (ex: `agent.types.ts`)

#### Variáveis e Funções

```typescript
// Variáveis
const userName = 'John Doe';           // camelCase
const MAX_RETRIES = 3;                 // UPPER_CASE para constantes
const isLoading = false;              // booleano prefixado com is/has/should

// Funções
function getUserData() { }             // camelCase, verbo no infinitivo
function setUserActive() { }           // set + nome da propriedade
function hasPermission() { }           // has + nome da propriedade
function shouldRender() { }            // should + verbo no infinitivo

// Componentes
const UserProfile = () => { }          // PascalCase
const useUserData = () => { }          // use + PascalCase
```

---

## 💻 Padrões de Código

### TypeScript

#### Tipagem Forte

```typescript
// ❌ Ruim - any explícito
function processData(data: any) {
  return data.map(item => item.name);
}

// ✅ Bom - tipagem explícita
interface User {
  id: string;
  name: string;
  email: string;
}

function processData(data: User[]) {
  return data.map(item => item.name);
}
```

#### Interfaces vs Types

```typescript
// ✅ Use interfaces para objetos
interface User {
  id: string;
  name: string;
  email: string;
}

// ✅ Use types para unions, tuples, utilities
type Status = 'active' | 'inactive' | 'pending';
type Coordinates = [number, number];
type PartialUser = Partial<User>;
```

#### Generics

```typescript
// ✅ Use generics para componentes e funções reutilizáveis
interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
}

async function fetchApi<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  return response.json();
}

// Uso
const userResponse = await fetchApi<User>('/api/user');
```

### React

#### Componentes Funcionais

```typescript
// ✅ Bom - componente funcional com TypeScript
interface UserProfileProps {
  user: User;
  onEdit?: (user: User) => void;
  className?: string;
}

const UserProfile: React.FC<UserProfileProps> = ({ 
  user, 
  onEdit,
  className = '' 
}) => {
  return (
    <div className={`user-profile ${className}`}>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      {onEdit && (
        <button onClick={() => onEdit(user)}>
          Edit
        </button>
      )}
    </div>
  );
};
```

#### Hooks Customizados

```typescript
// ✅ Bom - hook customizado tipado
interface UseApiOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: Error) => void;
  enabled?: boolean;
}

function useApi<T>(
  url: string,
  options: UseApiOptions<T> = {}
) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    if (!options.enabled) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
        options.onSuccess?.(result);
      } catch (err) {
        setError(err as Error);
        options.onError?.(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, options.enabled]);

  return { data, loading, error, refetch: fetchData };
}
```

#### Gerenciamento de Estado

```typescript
// ✅ Bom - useReducer para estados complexos
interface AgentState {
  agents: Agent[];
  loading: boolean;
  error: string | null;
  selectedAgent: Agent | null;
}

type AgentAction =
  | { type: 'SET_AGENTS'; payload: Agent[] }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SELECT_AGENT'; payload: Agent | null };

function agentReducer(state: AgentState, action: AgentAction): AgentState {
  switch (action.type) {
    case 'SET_AGENTS':
      return { ...state, agents: action.payload, loading: false };
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload, loading: false };
    case 'SELECT_AGENT':
      return { ...state, selectedAgent: action.payload };
    default:
      return state;
  }
}
```

### Estilos com Tailwind CSS

#### Organização de Classes

```typescript
// ✅ Bom - classes organizadas por propósito
const Card = ({ children, className = '' }) => (
  <div className={`
    bg-white dark:bg-slate-800
    rounded-lg shadow-lg
    border border-gray-200 dark:border-slate-700
    hover:shadow-xl transition-all duration-300
    ${className}
  `}>
    {children}
  </div>
);
```

#### Componentes Estilizados

```typescript
// ✅ Bom - componentes com variantes
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick
}) => {
  const baseClasses = 'font-medium rounded-lg transition-colors';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
    outline: 'border border-gray-300 text-gray-700 hover:bg-gray-50'
  };
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };
  
  return (
    <button
      className={`
        ${baseClasses}
        ${variantClasses[variant]}
        ${sizeClasses[size]}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

---

## 🧪 Testes

### Estratégia de Testes

#### Testes Unitários

```typescript
// __tests__/components/UserProfile.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { UserProfile } from '@/components/UserProfile';
import { User } from '@/types/user';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com'
};

const mockOnEdit = jest.fn();

describe('UserProfile', () => {
  beforeEach(() => {
    mockOnEdit.mockClear();
  });

  it('renders user information correctly', () => {
    render(
      <UserProfile 
        user={mockUser} 
        onEdit={mockOnEdit} 
      />
    );

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('calls onEdit when edit button is clicked', () => {
    render(
      <UserProfile 
        user={mockUser} 
        onEdit={mockOnEdit} 
      />
    );

    fireEvent.click(screen.getByText('Edit'));
    expect(mockOnEdit).toHaveBeenCalledWith(mockUser);
  });

  it('does not render edit button when onEdit is not provided', () => {
    render(<UserProfile user={mockUser} />);
    
    expect(screen.queryByText('Edit')).not.toBeInTheDocument();
  });
});
```

#### Testes de API

```typescript
// __tests__/api/agents.test.ts
import { createMocks } from 'node-mocks-http';
import { GET, POST } from '@/app/api/agents/route';
import prisma from '@/lib/db';

jest.mock('@/lib/db');

describe('Agents API', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/agents', () => {
    it('returns list of agents', async () => {
      const mockAgents = [
        { id: '1', name: 'Agent 1', status: 'active' },
        { id: '2', name: 'Agent 2', status: 'inactive' }
      ];

      (prisma.agent.findMany as jest.Mock).mockResolvedValue(mockAgents);

      const { req } = createMocks({
        method: 'GET',
      });

      const res = await GET(req);
      const data = await res.json();

      expect(res.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.data).toEqual(mockAgents);
    });
  });

  describe('POST /api/agents', () => {
    it('creates a new agent', async () => {
      const newAgent = {
        name: 'New Agent',
        description: 'Test agent',
        type: 'template',
        config: 'test: config',
        workspaceId: 'workspace-1'
      };

      const createdAgent = { id: '3', ...newAgent, status: 'active' };

      (prisma.agent.create as jest.Mock).mockResolvedValue(createdAgent);

      const { req } = createMocks({
        method: 'POST',
        body: newAgent,
      });

      const res = await POST(req);
      const data = await res.json();

      expect(res.status).toBe(201);
      expect(data.success).toBe(true);
      expect(data.data).toEqual(createdAgent);
      expect(prisma.agent.create).toHaveBeenCalledWith({
        data: newAgent,
      });
    });
  });
});
```

#### Testes E2E com Playwright

```typescript
// tests/agents.spec.ts
import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/agents');
});

test('user can create a new agent', async ({ page }) => {
  // Click on "Novo Agente" button
  await page.click('button:has-text("Novo Agente")');
  
  // Fill in the form
  await page.fill('input[name="name"]', 'Test Agent');
  await page.fill('textarea[name="description"]', 'Test Description');
  await page.selectOption('select[name="type"]', 'template');
  await page.fill('textarea[name="config"]', 'test: config');
  
  // Submit the form
  await page.click('button:has-text("Criar Agente")');
  
  // Verify the agent was created
  await expect(page.locator('text=Test Agent')).toBeVisible();
  await expect(page.locator('text=Test Description')).toBeVisible();
});

test('user can edit an existing agent', async ({ page }) => {
  // Assuming there's at least one agent
  await page.click('button:has-text("⚙️")');
  
  // Wait for edit dialog to appear
  await page.waitForSelector('text=Editar Agente');
  
  // Modify the name
  await page.fill('input[name="name"]', 'Updated Agent Name');
  
  // Save changes
  await page.click('button:has-text("Salvar")');
  
  // Verify the change
  await expect(page.locator('text=Updated Agent Name')).toBeVisible();
});
```

### Configuração de Testes

#### Jest Configuration

```json
// jest.config.json
{
  "preset": "ts-jest",
  "testEnvironment": "jsdom",
  "setupFilesAfterEnv": ["<rootDir>/jest.setup.js"],
  "moduleNameMapping": {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  "testMatch": [
    "**/__tests__/**/*.(ts|tsx|js)",
    "**/*.(test|spec).(ts|tsx|js)"
  ],
  "collectCoverageFrom": [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/**/*.stories.{ts,tsx}"
  ],
  "coverageThreshold": {
    "global": {
      "branches": 80,
      "functions": 80,
      "lines": 80,
      "statements": 80
    }
  }
}
```

#### Setup File

```javascript
// jest.setup.js
import '@testing-library/jest-dom';

// Mock de fetch global
global.fetch = jest.fn();

// Limpar mocks antes de cada teste
beforeEach(() => {
  fetch.mockClear();
});

// Mock do Next.js router
jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/',
      pathname: '/',
      query: {},
      asPath: '/',
      push: jest.fn(),
      pop: jest.fn(),
      reload: jest.fn(),
      back: jest.fn(),
      prefetch: jest.fn().mockResolvedValue(undefined),
      beforePopState: jest.fn(),
      events: {
        on: jest.fn(),
        off: jest.fn(),
        emit: jest.fn(),
      },
      isFallback: false,
    };
  },
}));
```

---

## 🔄 Git e Workflow

### Branch Strategy

```
main
├── develop
├── feature/agent-execution
├── bugfix/fix-agent-status
├── hotfix/security-patch
└── release/v1.0.0
```

#### Convenções de Branch

- **`main`**: Branch principal de produção (protegida)
- **`develop`**: Branch de desenvolvimento integrado
- **`feature/`**: Novas funcionalidades (ex: `feature/user-authentication`)
- **`bugfix/`**: Correções de bugs (ex: `bugfix/fix-agent-creation`)
- **`hotfix/`**: Correções críticas em produção (ex: `hotfix/security-vulnerability`)
- **`release/`**: Preparação para release (ex: `release/v1.0.0`)

### Convenções de Commit

#### Formato de Commit Mensagens

```bash
<tipo>(<escopo>): <descrição>

[corpo opcional]

[rodapé opcional]
```

#### Tipos de Commit

- **`feat`**: Nova funcionalidade
- **`fix`**: Correção de bug
- **`docs`**: Atualização de documentação
- **`style`**: Alterações de estilo (formatação, etc.)
- **`refactor`**: Refatoração de código
- **`test`**: Adição ou modificação de testes
- **`chore`**: Tarefas de manutenção

#### Exemplos

```bash
# Nova funcionalidade
feat(agents): add agent execution dialog

# Correção de bug
fix(compositions): resolve composition execution timeout

# Documentação
docs(readme): update installation guide

# Refatoração
refactor(layout): extract header component

# Testes
test(agents): add unit tests for agent creation

# Manutenção
chore(deps): update dependencies to latest versions
```

### Processo de Pull Request

#### 1. Criando uma Branch

```bash
# Atualize sua branch develop
git checkout develop
git pull origin develop

# Crie uma nova branch para sua feature
git checkout -b feature/nova-funcionalidade
```

#### 2. Fazendo as Alterações

```bash
# Faça suas alterações
git add .
git commit -m "feat(agents): add new agent type"

# Push para o repositório remoto
git push origin feature/nova-funcionalidade
```

#### 3. Criando o Pull Request

1. Vá para o GitHub e crie um PR da sua branch para `develop`
2. Preencha o template de PR com:
   - **Descrição**: O que foi feito e por quê
   - **Changes**: Lista de alterações
   - **Testing**: Como testar as alterações
   - **Related Issues**: Issues relacionadas

#### 4. Review e Merge

1. Espere pelo menos um approval
2. Garanta que todos os testes estejam passando
3. Resolva os conflicts se houver
4. Merge a branch para `develop`

---

## 🏗️ Arquitetura e Padrões

### Padrão de Componentes

#### Componentes Atômicos

```typescript
// Componentes pequenos e reutilizáveis
interface BadgeProps {
  variant: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ variant, children }) => {
  const variantClasses = {
    primary: 'bg-blue-100 text-blue-800',
    secondary: 'bg-gray-100 text-gray-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${variantClasses[variant]}`}>
      {children}
    </span>
  );
};
```

#### Componentes Compostos

```typescript
// Componentes que combinam outros componentes
interface StatsCardProps {
  title: string;
  value: number | string;
  description: string;
  icon: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    type: 'positive' | 'negative' | 'neutral';
  };
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, description, icon, trend }) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="p-2 bg-blue-100 rounded-lg">
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <p className="text-xs text-muted-foreground">{description}</p>
        {trend && (
          <div className="mt-2">
            <Badge variant={trend.type === 'positive' ? 'success' : 'warning'}>
              {trend.label}
            </Badge>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
```

### Padrão de API

#### Estrutura de Controllers

```typescript
// Padrão para API routes
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { z } from 'zod';

// Schema de validação
const createAgentSchema = z.object({
  name: z.string().min(1).max(100),
  description: z.string().optional(),
  type: z.enum(['template', 'custom', 'composed']),
  config: z.string().min(1),
  workspaceId: z.string(),
});

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const workspaceId = searchParams.get('workspaceId');
    
    const agents = await prisma.agent.findMany({
      where: workspaceId ? { workspaceId } : {},
      include: {
        workspace: {
          select: { id: true, name: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({
      success: true,
      data: agents,
    });
  } catch (error) {
    console.error('Error fetching agents:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to fetch agents',
        },
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar input
    const validatedData = createAgentSchema.parse(body);
    
    // Criar agente
    const agent = await prisma.agent.create({
      data: validatedData,
      include: {
        workspace: {
          select: { id: true, name: true },
        },
      },
    });

    return NextResponse.json({
      success: true,
      data: agent,
    }, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: 'Invalid input data',
            details: error.errors,
          },
        },
        { status: 400 }
      );
    }

    console.error('Error creating agent:', error);
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: 'Failed to create agent',
        },
      },
      { status: 500 }
    );
  }
}
```

### Padrão de Banco de Dados

#### Migrations com Prisma

```bash
# Criar uma nova migration
npx prisma migrate dev --name add-agent-metrics

# Gerar cliente Prisma
npx prisma generate

# Push schema para banco (desenvolvimento)
npx prisma db push

# Reset banco (cuidado - perde dados)
npx prisma migrate reset
```

#### Seed de Dados

```typescript
// prisma/seed.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Criar usuário admin
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@zanai.com' },
    update: {},
    create: {
      email: 'admin@zanai.com',
      name: 'Admin User',
      role: 'admin',
    },
  });

  // Criar workspace padrão
  const defaultWorkspace = await prisma.workspace.upsert({
    where: { id: 'default-workspace' },
    update: {},
    create: {
      id: 'default-workspace',
      name: 'Default Workspace',
      description: 'Default workspace for testing',
      userId: adminUser.id,
    },
  });

  // Criar agentes de exemplo
  const sampleAgents = [
    {
      name: 'Code Analyzer',
      description: 'Analyzes code for issues and improvements',
      type: 'template',
      config: 'name: Code Analyzer\nversion: 1.0.0',
      workspaceId: defaultWorkspace.id,
    },
    {
      name: 'Documentation Writer',
      description: 'Generates documentation from code',
      type: 'template',
      config: 'name: Documentation Writer\nversion: 1.0.0',
      workspaceId: defaultWorkspace.id,
    },
  ];

  for (const agent of sampleAgents) {
    await prisma.agent.upsert({
      where: { name: agent.name },
      update: {},
      create: agent,
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
```

---

## 🚀 Deploy e Publicação

### Processo de Build

```bash
# Build para produção
npm run build

# Verificar build
npm run build:analyze

# Exportar estático (se aplicável)
npm run export
```

### Environment Configurations

#### Desenvolvimento

```bash
# .env.development
NODE_ENV=development
DATABASE_URL="file:./dev.db"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="dev-secret-key"
```

#### Produção

```bash
# .env.production
NODE_ENV=production
DATABASE_URL="file:./prod.db"
NEXTAUTH_URL="https://your-domain.com"
NEXTAUTH_SECRET="your-production-secret-key"
```

### Docker para Produção

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

# Generate Prisma client
RUN npx prisma generate

# Build the application
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

# Automatically leverage output traces to reduce image size
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

### CI/CD com GitHub Actions

```yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main, develop ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linter
      run: npm run lint
    
    - name: Run type check
      run: npm run type-check
    
    - name: Run tests
      run: npm test
    
    - name: Build application
      run: npm run build
    
    - name: Upload coverage reports
      if: github.event_name == 'push'
      uses: codecov/codecov-action@v3

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build application
      run: npm run build
    
    - name: Deploy to production
      run: |
        # Deploy commands here
        echo "Deploying to production..."
```

---

## 🐛 Debugging e Troubleshooting

### Debugging no VS Code

#### Configuração de Debug

```json
// .vscode/launch.json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

#### Breakpoints e Inspeção

```typescript
// Use console.log para debugging rápido
function processAgent(agent: Agent) {
  console.log('Processing agent:', agent.name);
  console.log('Agent config:', agent.config);
  
  // Use debugger para breakpoints
  debugger;
  
  // Continue processing...
}
```

### Problemas Comuns

#### 1. Erros de Build

```bash
# Limpar cache e reinstalar
rm -rf node_modules .next
npm install
npm run build
```

#### 2. Problemas com Banco de Dados

```bash
# Resetar banco de dados
npx prisma migrate reset

# Regenerar cliente Prisma
npx prisma generate

# Verificar conexão
npx prisma db pull
```

#### 3. Problemas com TypeScript

```bash
# Limpar cache TypeScript
npm run type-check -- --noEmit

# Verificar tipos
npx tsc --noEmit
```

#### 4. Problemas com Dependências

```bash
# Verificar vulnerabilidades
npm audit

# Atualizar dependências
npm update

# Verificar versões
npm outdated
```

---

## 📖 Recursos Adicionais

### Documentação

- [API Reference](./API-REFERENCE.md) - Documentação completa da API
- [Manual do Usuário](./MANUAL-USUARIO.md) - Guia para usuários finais
- [Documentação Técnica](./DOCUMENTACAO-TECNICA.md) - Detalhes técnicos

### Ferramentas

- [VS Code](https://code.visualstudio.com/) - Editor recomendado
- [Prisma Studio](https://www.prisma.io/studio) - Visualizador de banco de dados
- [Postman](https://www.postman.com/) - Testes de API
- [Playwright](https://playwright.dev/) - Testes E2E

### Comunidade

- [GitHub Issues](https://github.com/OARANHA/ZANAI-PAINEL/issues) - Reportar bugs e solicitar features
- [GitHub Discussions](https://github.com/OARANHA/ZANAI-PAINEL/discussions) - Discussões e dúvidas
- [Discord](https://discord.gg/zanai) - Chat da comunidade

### Templates e Exemplos

```bash
# Gerar novo componente
npm run generate:component

# Gerar nova página
npm run generate:page

# Gerar novo hook
npm run generate:hook
```

---

## 🤝 Contribuindo para o Projeto

### Como Contribuir

1. **Fork o repositório**
2. **Crie uma branch** para sua feature/bugfix
3. **Faça as alterações** seguindo os padrões deste guia
4. **Adicione testes** para as novas funcionalidades
5. **Atualize a documentação** se necessário
6. **Crie um Pull Request** com descrição detalhada

### Código de Conduta

- Seja respeitoso e inclusivo
- Forneça feedback construtivo
- Ajude outros contribuintes
- Siga os padrões estabelecidos

### Suporte

Se precisar de ajuda:

- Verifique a [documentação](./docs/)
- Procure em [Issues](https://github.com/OARANHA/ZANAI-PAINEL/issues)
- Pergunte em [Discussions](https://github.com/OARANHA/ZANAI-PAINEL/discussions)
- Entre em contato com os mantenedores

---

*Este guia foi criado para ajudar desenvolvedores a contribuírem efetivamente para o projeto Zanai. Sinta-se à vontade para sugerir melhorias!*