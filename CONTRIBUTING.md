# 🤝 Contributing Guide - Zanai Project

Olá! Somos muito felizes em que você esteja interessado em contribuir para o **Zanai Project**! Este guia irá ajudá-lo a entender como contribuir de forma eficaz para o nosso projeto.

---

## 📋 Table of Contents

- [🏗️ Nosso Processo de Contribuição](#-nosso-processo-de-contribuição)
- [🚀 Começando](#-começando)
- [📝 Padrões de Código](#-padrões-de-código)
- [🧪 Testes](#-testes)
- [🔄 Git Workflow](#-git-workflow)
- [📋 Pull Request Process](#-pull-request-process)
- [🐛 Reportando Bugs](#-reportando-bugs)
- [✨ Sugerindo Features](#-sugerindo-features)
- [📚 Documentação](#-documentação)
- [🎨 Design e UI](#-design-e-ui)
- [🤝 Código de Conduta](#-código-de-conduta)

---

## 🏗️ Nosso Processo de Contribuição

### Visão Geral

Nós seguimos um processo de contribuição baseado em Pull Requests (PRs) para garantir a qualidade e consistência do código. Aqui está o fluxo básico:

1. **Fork** o repositório
2. **Clone** seu fork localmente
3. **Crie** uma branch para sua contribuição
4. **Faça** as alterações seguindo nossos padrões
5. **Adicione** testes para as novas funcionalidades
6. **Atualize** a documentação se necessário
7. **Crie** um Pull Request com descrição detalhada
8. **Aguarde** o review e merge

---

## 🚀 Começando

### Pré-requisitos

- **Node.js**: 18.x ou superior
- **npm**: 8.x ou superior
- **Git**: 2.x ou superior
- **VS Code**: Recomendado com nossas extensões

### Setup do Ambiente

```bash
# 1. Fork o repositório no GitHub
# Clique no botão "Fork" no topo da página do repositório

# 2. Clone seu fork
git clone https://github.com/SEU_USUARIO/ZANAI-PAINEL.git

# 3. Entre no diretório
cd ZANAI-PAINEL

# 4. Adicione o repositório original como upstream
git remote add upstream https://github.com/OARANHA/ZANAI-PAINEL.git

# 5. Instale as dependências
npm install

# 6. Configure o banco de dados
npx prisma db push

# 7. Inicie o servidor de desenvolvimento
npm run dev
```

### Verificando o Setup

```bash
# Rode os testes para garantir tudo está funcionando
npm test

# Verifique o linting
npm run lint

# Verifique os tipos TypeScript
npm run type-check
```

---

## 📝 Padrões de Código

### TypeScript

#### Tipagem Forte

```typescript
// ✅ Bom - Tipagem explícita
interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
}

function getUserById(id: string): Promise<User | null> {
  return prisma.user.findUnique({ where: { id } });
}

// ❌ Ruim - Uso de any
function getUserById(id: string): Promise<any> {
  return prisma.user.findUnique({ where: { id } });
}
```

#### Interfaces vs Types

```typescript
// ✅ Use interfaces para objetos com campos
interface Agent {
  id: string;
  name: string;
  config: string;
}

// ✅ Use types para utilitários
type AgentStatus = 'active' | 'inactive' | 'training';
type AgentId = string;
```

### React

#### Componentes Funcionais

```typescript
// ✅ Bom - Componente funcional tipado
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
// ✅ Bom - Hook customizado com tipagem
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

### Estilos com Tailwind CSS

#### Organização de Classes

```typescript
// ✅ Bom - Classes organizadas por propósito
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

#### Componentes com Variantes

```typescript
// ✅ Bom - Componentes com variantes
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

### Nomenclatura

#### Arquivos e Diretórios

```
✅ Bom:
src/
├── components/
│   ├── ui/
│   │   ├── Button.tsx
│   │   └── Card.tsx
│   ├── agents/
│   │   ├── AgentCard.tsx
│   │   └── AgentList.tsx
│   └── layout/
│       ├── Header.tsx
│       └── Sidebar.tsx
├── lib/
│   ├── db.ts
│   ├── utils.ts
│   └── colors.ts
└── hooks/
    ├── use-mobile.ts
    └── use-toast.ts

❌ Ruim:
src/
├── Components/
│   ├── button.tsx
│   └── card.tsx
├── lib/
│   ├── database.ts
│   └── helpers.ts
└── Hooks/
    ├── useMobile.ts
    └── useToast.ts
```

#### Variáveis e Funções

```typescript
// ✅ Bom
const userName = 'John Doe';
const MAX_RETRIES = 3;
const isLoading = false;

function getUserData() { }
function setUserActive() { }
function hasPermission() { }

// ❌ Ruim
const username = 'John Doe';
const maxretries = 3;
const isloading = false;

function getuserdata() { }
function setuseractive() { }
function haspermission() { }
```

---

## 🧪 Testes

### Estratégia de Testes

Nós usamos uma combinação de testes unitários, de integração e E2E para garantir a qualidade do código.

#### Testes Unitários

```typescript
// __tests__/components/UserProfile.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { UserProfile } from '@/components/UserProfile';
import { User } from '@/types/user';

const mockUser: User = {
  id: '1',
  name: 'John Doe',
  email: 'john@example.com',
  role: 'user'
};

describe('UserProfile', () => {
  it('renders user information correctly', () => {
    render(<UserProfile user={mockUser} />);
    
    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  it('calls onEdit when edit button is clicked', () => {
    const mockOnEdit = jest.fn();
    render(<UserProfile user={mockUser} onEdit={mockOnEdit} />);
    
    fireEvent.click(screen.getByText('Edit'));
    expect(mockOnEdit).toHaveBeenCalledWith(mockUser);
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
  describe('GET /api/agents', () => {
    it('returns list of agents', async () => {
      const mockAgents = [
        { id: '1', name: 'Agent 1', status: 'active' }
      ];

      (prisma.agent.findMany as jest.Mock).mockResolvedValue(mockAgents);

      const { req } = createMocks({ method: 'GET' });
      const res = await GET(req);
      const data = await res.json();

      expect(res.status).toBe(200);
      expect(data.success).toBe(true);
      expect(data.data).toEqual(mockAgents);
    });
  });
});
```

#### Testes E2E

```typescript
// tests/agents.spec.ts
import { test, expect } from '@playwright/test';

test('user can create a new agent', async ({ page }) => {
  await page.goto('/agents');
  
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
});
```

### Cobertura de Testes

Nós almejamos uma cobertura de testes de pelo menos 80% para todo o código novo.

```bash
# Rodar testes com cobertura
npm run test:coverage

# Verificar cobertura específica
npm run test:coverage -- --collectCoverageFrom='src/components/**/*'
```

---

## 🔄 Git Workflow

### Branch Strategy

Nós usamos a seguinte estratégia de branches:

```
main           # Branch principal de produção (protegida)
├── develop     # Branch de desenvolvimento integrado
├── feature/new-feature    # Nova funcionalidade
├── bugfix/fix-bug        # Correção de bug
├── hotfix/urgent-fix    # Correção crítica
└── release/v1.0.0        # Preparação para release
```

### Convenções de Commit

#### Formato

```
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

### Processo de Branch

#### 1. Criando uma Branch

```bash
# Atualize sua branch develop
git checkout develop
git pull upstream develop

# Crie uma nova branch
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

#### 3. Mantendo sua Branch Atualizada

```bash
# Rebase com a branch develop
git fetch upstream
git rebase upstream/develop

# Se houver conflitos, resolva e continue
git add .
git rebase --continue

# Force push se necessário
git push origin feature/nova-funcionalidade --force-with-lease
```

---

## 📋 Pull Request Process

### Criando um Pull Request

#### 1. Prepare seu PR

```bash
# Certifique-se que sua branch está atualizada
git fetch upstream
git rebase upstream/develop

# Push as alterações finais
git push origin feature/nova-funcionalidade
```

#### 2. Crie o PR no GitHub

1. Vá para o repositório no GitHub
2. Clique em "Pull Requests" → "New Pull Request"
3. Selecione sua branch como source e `develop` como target
4. Preencha o template do PR

#### 3. Template do PR

```markdown
## Descrição
Breve descrição do que este PR implementa.

## Tipo de Mudança
- [ ] Bug fix (non-breaking change which fixes an issue)
- [ ] New feature (non-breaking change which adds functionality)
- [ ] Breaking change (fix or feature that would cause existing functionality to not work as expected)
- [ ] Documentation update

## Checklist
- [ ] Meu código segue os padrões de estilo do projeto
- [ ] Eu adicionei testes para cobrir minhas mudanças
- [ ] Eu atualizei a documentação se necessário
- [ ] Eu testei manualmente as mudanças
- [ ] Todos os testes estão passando

## Como Testar
Instruções passo a passo sobre como testar as mudanças:

1. Vá para a página `/agents`
2. Clique em "Novo Agente"
3. Preencha o formulário com os seguintes dados:
   - Nome: "Test Agent"
   - Descrição: "Test Description"
   - Tipo: "template"
4. Clique em "Criar Agente"
5. Verifique se o agente aparece na lista

## Issues Relacionadas
Closes #123
Fixes #456

## Screenshots (se aplicável)
<!-- Adicione screenshots para demonstrar as mudanças -->

## Notas Adicionais
Qualquer informação adicional que os revisores deveriam saber.
```

### Review Process

#### O que esperamos dos reviewers:

1. **Code Review**: Qualidade do código, padrões, melhores práticas
2. **Test Review**: Cobertura de testes, qualidade dos testes
3. **Documentation Review**: Documentação atualizada e clara
4. **Functional Review**: A funcionalidade funciona como esperado

#### Como responder a reviews:

```markdown
## Resposta ao Review

### Comentários Gerais
Obrigado pelo review! Vou implementar as sugestões.

### Itens Endereçados
- [x] Sugestão 1 implementada
- [x] Sugestão 2 implementada

### Itens Pendentes
- [ ] Sugestão 3 - Vou implementar na próxima iteração

### Justificativas
- [ ] Sugestão 4 - Não implementei porque [razão]
```

### Merge Process

#### Após o review:

1. **Aprovação**: Pelo menos um approval é necessário
2. **Testes**: Todos os testes devem estar passando
3. **Conflicts**: Não deve haver conflicts com a branch target
4. **Documentation**: A documentação deve estar atualizada

#### Mergeando o PR:

```bash
# Faça o merge localmente primeiro
git checkout develop
git merge --no-ff feature/nova-funcionalidade

# Push para o repositório remoto
git push upstream develop

# Delete a branch local e remota
git branch -d feature/nova-funcionalidade
git push origin --delete feature/nova-funcionalidade
```

---

## 🐛 Reportando Bugs

### Encontrando um Bug

Se você encontrou um bug, por favor, verifique se ele já foi reportado:

1. **Busque** nos [issues existentes](https://github.com/OARANHA/ZANAI-PAINEL/issues)
2. **Verifique** se o bug já foi reportado
3. **Se não existir**, crie um novo issue

### Criando um Bug Report

Use o template de bug report:

```markdown
## Descrição do Bug
Breve descrição do bug encontrado.

## Passos para Reproduzir
1. Vá para '...'
2. Clique em '....'
3. Role para '....'
4. Veja o erro

## Comportamento Esperado
Descrição clara e concisa do que você esperava que acontecesse.

## Comportamento Atual
Descrição do que realmente aconteceu.

## Screenshots
Se aplicável, adicione screenshots para ajudar a explicar o problema.

## Ambiente
- Sistema Operacional: [ex. iOS]
- Navegador: [ex. Chrome, Safari]
- Versão: [ex. 22]

## Contexto Adicional
Adicione qualquer outro contexto sobre o problema aqui.
```

### Boas Práticas para Bug Reports

- **Seja Específico**: Forneça detalhes precisos
- **Inclua Passos**: Passos claros para reproduzir o bug
- **Adicione Contexto**: Ambiente, versões, etc.
- **Seja Reprodutível**: Garanta que o bug possa ser reproduzido

---

## ✨ Sugerindo Features

### Sugerindo uma Nova Funcionalidade

Nós adoramos receber sugestões de novas funcionalidades! Por favor, siga estas diretrizes:

#### Verifique se Já Existe

1. **Busque** nos [issues existentes](https://github.com/OARANHA/ZANAI-PAINEL/issues)
2. **Verifique** o [roadmap](README.md#-roadmap)
3. **Confira** as [discussões](https://github.com/OARANHA/ZANAI-PAINEL/discussions)

#### Criando uma Feature Request

Use o template de feature request:

```markdown
## Título da Feature
Breve título descritivo da funcionalidade.

## Problema
Qual problema esta funcionalidade resolve?
Por que ela é necessária?

## Solução Proposta
Descreva a solução que você está propondo.
Como ela funcionaria?

## Alternativas
Quais alternativas você considerou?
Por que esta solução é melhor?

## Contexto Adicional
Adicione qualquer outro contexto ou screenshots sobre a funcionalidade.
```

### Boas Práticas para Feature Requests

- **Seja Claro**: Descrição clara do problema e solução
- **Seja Específico**: Detalhes sobre como a funcionalidade deve funcionar
- **Justifique**: Explique por que esta funcionalidade é importante
- **Seja Realista**: Sugestões que sejam viáveis de implementar

---

## 📚 Documentação

### Atualizando a Documentação

Quando você adiciona uma nova funcionalidade, por favor, atualize a documentação relevante:

#### Documentação que Precisa ser Atualizada:

1. **README.md**: Se for uma funcionalidade principal
2. **MANUAL-USUARIO.md**: Se afetar usuários finais
3. **DOCUMENTACAO-TECNICA.md**: Se for uma mudança técnica
4. **GUIA-DESENVOLVIMENTO.md**: Se for uma mudança no processo de desenvolvimento
5. **API-REFERENCE.md**: Se adicionar ou modificar APIs
6. **Code Comments**: Comentários no código para desenvolvedores

#### Exemplo de Atualização de Documentação:

```markdown
## Atualização Necessária

### Arquivos Afetados
- `README.md`: Adicionar nova funcionalidade na lista de features
- `MANUAL-USUARIO.md`: Adicionar seção sobre como usar a nova funcionalidade
- `API-REFERENCE.md`: Documentar novos endpoints da API

### Mudanças Realizadas
- Adicionado suporte para [funcionalidade]
- Modificado o componente [Componente] para suportar [funcionalidade]
- Adicionados testes para [funcionalidade]
```

### Escrevendo Boa Documentação

#### Para Usuários Finais:

- **Seja Clara**: Use linguagem simples e direta
- **Forneça Exemplos**: Exemplos práticos de uso
- **Seja Completa**: Cubra todos os aspectos da funcionalidade
- **Use Screenshots**: Imagens para ilustrar o uso

#### Para Desenvolvedores:

- **Seja Técnica**: Inclua detalhes técnicos
- **Forneça Exemplos de Código**: Exemplos práticos de código
- **Documente APIs**: Parâmetros, respostas, erros
- **Inclua Diagramas**: Quando aplicável, use diagramas para explicar

---

## 🎨 Design e UI

### Contribuindo com Design

Se você é um designer ou quer contribuir com melhorias de UI:

#### Nosso Design System

Nós usamos:
- **Cores**: Paleta definida em `src/lib/colors.ts`
- **Componentes**: shadcn/ui como base
- **Spacing**: Sistema baseado em Tailwind CSS
- **Tipografia**: Fontes padrão do sistema

#### Sugerindo Melhorias de Design

1. **Crie um Issue**: Descreva a melhoria proposta
2. **Inclua Mockups**: Se possível, inclua mockups ou wireframes
3. **Explique o Porquê**: Justifique a melhoria com base em UX/UI
4. **Considere Acessibilidade**: Pense em acessibilidade

#### Exemplo de Sugestão de Design:

```markdown
## Sugestão de Melhoria de UI

### Problema Atual
O formulário de criação de agentes é confuso e difícil de usar.

### Solução Proposta
Redesenhar o formulário com:
- Campos melhor organizados
- Validação em tempo real
- Mensagens de ajuda mais claras
- Design mais limpo e moderno

### Mockups
[Incluir imagens ou links para mockups]

### Benefícios
- Melhor experiência do usuário
- Menos erros no preenchimento
- Tempo reduzido para criar agentes
```

### Acessibilidade

Nós nos comprometemos com a acessibilidade. Ao contribuir com UI:

- **Use ARIA Labels**: Para elementos interativos
- **Contraste de Cores**: Garanta bom contraste
- **Navegação por Teclado**: Suporte completo para navegação por teclado
- **Screen Readers**: Compatibilidade com screen readers

---

## 🤝 Código de Conduta

### Nosso Compromisso

Para proporcionar um ambiente inclusivo e amigável, nós nos comprometemos a:

- **Ser Respeitosos**: Tratar todos com respeito e dignidade
- **Ser Inclusivos**: Bem-vindos a todos, independentemente de background
- **Ser Colaborativos**: Trabalhar juntos para o bem do projeto
- **Ser Construtivos**: Fornecer feedback construtivo e útil

### Comportamento Esperado

- **Seja Gentil**: Use linguagem amigável e respeitosa
- **Seja Construtivo**: Forneça feedback útil e acionável
- **Seja Colaborativo**: Trabalhe em equipe e ajude outros
- **Seja Respeitoso**: Respeite diferentes opiniões e experiências

### Comportamento Inaceitável

- **Harassment**: Qualquer forma de assédio é inaceitável
- **Discriminação**: Discriminação baseada em qualquer característica
- **Agressão**: Linguagem agressiva ou ataques pessoais
- **Spam**: Conteúdo irrelevante ou repetitivo

### Reportando Problemas

Se você testemunhar ou experimentar comportamento inaceitável:

1. **Contate os Mantenedores**: [maintainers@zanai.com](mailto:maintainers@zanai.com)
2. **Seja Específico**: Forneça detalhes sobre o incidente
3. **Seja Confidencial**: Seu relatório será tratado confidencialmente

### Consequências

Comportamento inaceitável pode resultar em:

- **Aviso**: Aviso formal sobre o comportamento
- **Suspensão**: Suspensão temporária de participação
- **Expulsão**: Remoção permanente do projeto

---

## 🏆 Reconhecimento

### Como os Contribuintes São Reconhecidos

Nós valorizamos muito todas as contribuições e reconhecemos os contribuintes de várias formas:

#### Reconhecimento no Código

```typescript
/**
 * @contributor Seu Nome <seu.email@example.com>
 * @since 2025.1.0
 */
```

#### Reconhecimento no CHANGELOG

```markdown
## [2025.1.0] - 2025-06-23

### Added
- Nova funcionalidade X (@seu-usuario)
- Melhoria Y (@outro-usuario)

### Fixed
- Correção do bug Z (@seu-usuario)
```

#### Reconhecimento no README

```markdown
### Contribuidores
- [@seu-usuario](https://github.com/seu-usuario) - Contribuição X
- [@outro-usuario](https://github.com/outro-usuario) - Contribuição Y
```

### Níveis de Contribuição

Nós reconhecemos diferentes níveis de contribuição:

#### 🌟 Contribuinte Estrela
- 5+ PRs merged
- Contribuições significativas para funcionalidades principais
- Ajuda na comunidade (responder issues, ajudar outros contribuintes)

#### 🚀 Contribuinte Avançado
- 10+ PRs merged
- Contribuições para múltiplas áreas do projeto
- Mentoria de outros contribuintes

#### 👑 Contribuinte Mestre
- 20+ PRs merged
- Contribuições arquitetônicas significativas
- Liderança na comunidade

---

## 📞 Suporte para Contribuintes

### Como Obter Ajuda

Se você precisa de ajuda para contribuir:

#### Documentação
- [📖 Manual do Usuário](./MANUAL-USUARIO.md)
- [📚 Documentação Técnica](./DOCUMENTACAO-TECNICA.md)
- [🛠️ Guia de Desenvolvimento](./GUIA-DESENVOLVIMENTO.md)
- [🔗 API Reference](./API-REFERENCE.md)

#### Comunidade
- [GitHub Discussions](https://github.com/OARANHA/ZANAI-PAINEL/discussions)
- [Discord Server](https://discord.gg/zanai)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/zanai)

#### Contato Direto
- **Questões Técnicas**: [dev@zanai.com](mailto:dev@zanai.com)
- **Questões de Contribuição**: [contribute@zanai.com](mailto:contribute@zanai.com)
- **Questões Gerais**: [hello@zanai.com](mailto:hello@zanai.com)

### Mentoria

Nós oferecemos mentoria para novos contribuintes:

#### Programa de Mentoria
- **Mentores**: Desenvolvedores experientes do projeto
- **Mentorados**: Novos contribuintes que querem aprender
- **Duração**: 3 meses
- **Foco**: Aprender o códigobase, contribuir efetivamente, boas práticas

#### Como Participar

1. **Envie um email** para [mentorship@zanai.com](mailto:mentorship@zanai.com)
2. **Descreva seu interesse** e o que você quer aprender
3. **Seja Paciente**: Nós temos capacidade limitada de mentores

---

## 🎉 Conclusão

Contribuir para o Zanai Project é uma ótima maneira de:

- **Aprender**: Melhorar suas habilidades de desenvolvimento
- **Colaborar**: Trabalhar em um projeto de código aberto
- **Impactar**: Contribuir para uma ferramenta usada por muitas pessoas
- **Construir**: Construir seu portfólio e reputação

Nós valorizamos todas as contribuições, grandes ou pequenas, e estamos sempre ansiosos para receber novas ideias e melhorias.

### Próximos Passos

1. **Explore o Código**: Familiarize-se com o códigobase
2. **Encontre uma Issue**: Encontre algo que você queira trabalhar
3. **Faça sua Primeira Contribuição**: Comece com algo pequeno
4. **Participe da Comunidade**: Junte-se às discussões e ajude outros

### Obrigado!

Obrigado por considerar contribuir para o Zanai Project! Juntos, podemos construir algo incrível. 🚀

---

<div align="center">

**Feito com ❤️ pela comunidade Zanai**

[🏠 Início](README.md) • [📖 Documentação](MANUAL-USUARIO.md) • [🛠️ Guia de Desenvolvimento](GUIA-DESENVOLVIMENTO.md) • [🔗 API](API-REFERENCE.md)

</div>