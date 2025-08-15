# 🔗 API Reference - Zanai Project

## 📋 Visão Geral

A API do Zanai Project segue padrões RESTful com extensões para funcionalidades específicas de agentes de IA. Todos os endpoints retornam JSON e suportam CORS para aplicações web.

### Base URL

```
Desenvolvimento: http://localhost:3000/api
Produção: https://your-domain.com/api
```

### Autenticação

A maioria dos endpoints requer autenticação via Bearer token:

```http
Authorization: Bearer {your-jwt-token}
```

### Formatos de Resposta

#### Sucesso
```json
{
  "success": true,
  "data": {},
  "message": "Operation successful",
  "timestamp": "2025-06-23T10:30:00.000Z"
}
```

#### Erro
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Error description",
    "details": {}
  },
  "timestamp": "2025-06-23T10:30:00.000Z"
}
```

---

## 🤖 Agents API

### GET /api/agents

Lista todos os agentes do usuário.

#### Endpoint
```
GET /api/agents
```

#### Query Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `workspaceId` | string | Não | ID do workspace para filtrar |
| `status` | string | Não | Status do agente (active, inactive, training) |
| `type` | string | Não | Tipo do agente (template, custom, composed) |
| `page` | number | Não | Número da página (padrão: 1) |
| `limit` | number | Não | Itens por página (padrão: 20, máximo: 100) |

#### Exemplo de Requisição
```bash
curl -X GET "http://localhost:3000/api/agents?workspaceId=workspace-1&status=active&limit=10" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": [
    {
      "id": "agent-1",
      "name": "Code Analyzer",
      "description": "Analyzes code for issues and improvements",
      "type": "template",
      "config": "name: Code Analyzer\nversion: 1.0.0",
      "knowledge": "# Code Analyzer\n\nSpecialized in code analysis...",
      "status": "active",
      "workspaceId": "workspace-1",
      "workspace": {
        "id": "workspace-1",
        "name": "Development Workspace"
      },
      "createdAt": "2025-06-23T10:30:00.000Z",
      "updatedAt": "2025-06-23T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 25,
    "totalPages": 3
  }
}
```

#### Códigos de Status
- `200`: Sucesso
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

### POST /api/agents

Cria um novo agente.

#### Endpoint
```
POST /api/agents
```

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `name` | string | Sim | Nome do agente (1-100 caracteres) |
| `description` | string | Não | Descrição do agente |
| `type` | string | Sim | Tipo do agente (template, custom, composed) |
| `config` | string | Sim | Configuração em YAML |
| `knowledge` | string | Não | Conhecimento em Markdown |
| `workspaceId` | string | Sim | ID do workspace |

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/agents" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Code Analyzer",
    "description": "Analyzes code for issues and improvements",
    "type": "template",
    "config": "name: Code Analyzer\nversion: 1.0.0\ndescription: Analyzes code",
    "knowledge": "# Code Analyzer\n\nSpecialized in code analysis...",
    "workspaceId": "workspace-1"
  }'
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "id": "agent-new-1",
    "name": "Code Analyzer",
    "description": "Analyzes code for issues and improvements",
    "type": "template",
    "config": "name: Code Analyzer\nversion: 1.0.0\ndescription: Analyzes code",
    "knowledge": "# Code Analyzer\n\nSpecialized in code analysis...",
    "status": "active",
    "workspaceId": "workspace-1",
    "createdAt": "2025-06-23T10:30:00.000Z",
    "updatedAt": "2025-06-23T10:30:00.000Z"
  },
  "message": "Agent created successfully"
}
```

#### Códigos de Status
- `201`: Criado com sucesso
- `400`: Dados inválidos
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

### GET /api/agents/[id]

Obtém detalhes de um agente específico.

#### Endpoint
```
GET /api/agents/{id}
```

#### Path Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `id` | string | Sim | ID do agente |

#### Exemplo de Requisição
```bash
curl -X GET "http://localhost:3000/api/agents/agent-1" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "id": "agent-1",
    "name": "Code Analyzer",
    "description": "Analyzes code for issues and improvements",
    "type": "template",
    "config": "name: Code Analyzer\nversion: 1.0.0\ndescription: Analyzes code",
    "knowledge": "# Code Analyzer\n\nSpecialized in code analysis...",
    "status": "active",
    "workspaceId": "workspace-1",
    "workspace": {
      "id": "workspace-1",
      "name": "Development Workspace"
    },
    "user": {
      "id": "user-1",
      "name": "John Doe"
    },
    "createdAt": "2025-06-23T10:30:00.000Z",
    "updatedAt": "2025-06-23T10:30:00.000Z"
  }
}
```

#### Códigos de Status
- `200`: Sucesso
- `401`: Não autorizado
- `404`: Agente não encontrado
- `500`: Erro interno do servidor

---

### PUT /api/agents/[id]

Atualiza um agente existente.

#### Endpoint
```
PUT /api/agents/{id}
```

#### Path Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `id` | string | Sim | ID do agente |

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `name` | string | Não | Nome do agente |
| `description` | string | Não | Descrição do agente |
| `type` | string | Não | Tipo do agente |
| `config` | string | Não | Configuração em YAML |
| `knowledge` | string | Não | Conhecimento em Markdown |
| `status` | string | Não | Status do agente |

#### Exemplo de Requisição
```bash
curl -X PUT "http://localhost:3000/api/agents/agent-1" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Advanced Code Analyzer",
    "description": "Advanced code analysis with AI",
    "status": "active"
  }'
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "id": "agent-1",
    "name": "Advanced Code Analyzer",
    "description": "Advanced code analysis with AI",
    "type": "template",
    "config": "name: Code Analyzer\nversion: 1.0.0\ndescription: Analyzes code",
    "knowledge": "# Code Analyzer\n\nSpecialized in code analysis...",
    "status": "active",
    "workspaceId": "workspace-1",
    "updatedAt": "2025-06-23T11:00:00.000Z"
  },
  "message": "Agent updated successfully"
}
```

#### Códigos de Status
- `200`: Atualizado com sucesso
- `400`: Dados inválidos
- `401`: Não autorizado
- `404`: Agente não encontrado
- `500`: Erro interno do servidor

---

### DELETE /api/agents/[id]

Remove um agente.

#### Endpoint
```
DELETE /api/agents/{id}
```

#### Path Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `id` | string | Sim | ID do agente |

#### Exemplo de Requisição
```bash
curl -X DELETE "http://localhost:3000/api/agents/agent-1" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "message": "Agent deleted successfully"
}
```

#### Códigos de Status
- `200`: Removido com sucesso
- `401`: Não autorizado
- `404`: Agente não encontrado
- `500`: Erro interno do servidor

---

### POST /api/agents/[id]/execute

Executa um agente específico.

#### Endpoint
```
POST /api/agents/{id}/execute
```

#### Path Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `id` | string | Sim | ID do agente |

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `input` | string | Sim | Input para o agente |
| `context` | object | Não | Contexto adicional |

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/agents/agent-1/execute" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "input": "Analyze this code: function add(a, b) { return a + b; }",
    "context": {
      "language": "javascript",
      "framework": "nodejs"
    }
  }'
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "id": "execution-1",
    "agentId": "agent-1",
    "input": "Analyze this code: function add(a, b) { return a + b; }",
    "output": "The code is a simple function that adds two numbers...",
    "status": "completed",
    "context": {
      "language": "javascript",
      "framework": "nodejs"
    },
    "result": {
      "analysis": {
        "complexity": "low",
        "issues": [],
        "suggestions": []
      }
    },
    "startedAt": "2025-06-23T10:30:00.000Z",
    "completedAt": "2025-06-23T10:30:05.000Z",
    "createdAt": "2025-06-23T10:30:00.000Z"
  }
}
```

#### Códigos de Status
- `200`: Execução iniciada/completada
- `400`: Dados inválidos
- `401`: Não autorizado
- `404`: Agente não encontrado
- `500`: Erro interno do servidor

---

## 🧠 Specialists API

### GET /api/specialists

Lista categorias e templates de especialistas.

#### Endpoint
```
GET /api/specialists
```

#### Query Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `category` | string | Não | Filtrar por categoria |

#### Exemplo de Requisição
```bash
curl -X GET "http://localhost:3000/api/specialists?category=business" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "categories": [
      {
        "id": "business",
        "name": "Business",
        "description": "Business specialists",
        "icon": "📊"
      },
      {
        "id": "technical",
        "name": "Technical",
        "description": "Technical specialists",
        "icon": "⚙️"
      }
    ],
    "templates": [
      {
        "id": "specialist-1",
        "name": "Business Analyst",
        "description": "Business process analysis specialist",
        "category": "business",
        "prompt": "You are a business analyst...",
        "skills": ["Process Analysis", "Requirements Gathering"],
        "useCases": ["Business Process Improvement", "Requirements Documentation"],
        "created": "2025-06-23T10:30:00.000Z"
      }
    ]
  }
}
```

#### Códigos de Status
- `200`: Sucesso
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

### POST /api/specialists

Gera um novo especialista usando IA.

#### Endpoint
```
POST /api/specialists
```

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `category` | string | Sim | Categoria do especialista |
| `specialty` | string | Sim | Especialidade desejada |
| `requirements` | string | Sim | Requisitos específicos |

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/specialists" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "category": "business",
    "specialty": "Financial Analyst",
    "requirements": "Expert in financial analysis, budgeting, and investment strategies"
  }'
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "id": "specialist-generated-1",
    "name": "Financial Analyst",
    "description": "Expert financial analysis and investment specialist",
    "category": "business",
    "prompt": "You are a financial analyst with expertise in...",
    "skills": [
      "Financial Analysis",
      "Investment Strategies",
      "Budget Planning",
      "Risk Assessment"
    ],
    "useCases": [
      "Investment Portfolio Analysis",
      "Budget Planning",
      "Financial Risk Assessment",
      "Market Analysis"
    ],
    "created": "2025-06-23T10:30:00.000Z"
  },
  "message": "Specialist generated successfully"
}
```

#### Códigos de Status
- `201`: Gerado com sucesso
- `400`: Dados inválidos
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

### POST /api/specialists/download

Baixa um especialista em formato Markdown.

#### Endpoint
```
POST /api/specialists/download
```

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `specialistId` | string | Sim | ID do especialista |

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/specialists/download" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "specialistId": "specialist-1"
  }'
```

#### Resposta
A resposta é um arquivo Markdown com o conteúdo do especialista.

#### Códigos de Status
- `200`: Download iniciado
- `400`: Dados inválidos
- `401`: Não autorizado
- `404`: Especialista não encontrado
- `500`: Erro interno do servidor

---

### POST /api/specialists/structure

Gera uma estrutura de pastas para especialistas.

#### Endpoint
```
POST /api/specialists/structure
```

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `basePath` | string | Não | Caminho base (padrão: ".zanai/specialists") |

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/specialists/structure" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "basePath": ".zanai/specialists"
  }'
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "basePath": ".zanai/specialists",
    "totalFiles": 15,
    "structure": [
      {
        "path": ".zanai/specialists/business/",
        "type": "directory"
      },
      {
        "path": ".zanai/specialists/business/business-analyst.md",
        "type": "file",
        "size": 2048
      }
    ]
  },
  "message": "Structure generated successfully"
}
```

#### Códigos de Status
- `200`: Estrutura gerada com sucesso
- `400`: Dados inválidos
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

## 🔄 Compositions API

### GET /api/compositions

Lista todas as composições.

#### Endpoint
```
GET /api/compositions
```

#### Query Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `workspaceId` | string | Não | ID do workspace |
| `status` | string | Não | Status da composição |
| `page` | number | Não | Número da página |
| `limit` | number | Não | Itens por página |

#### Exemplo de Requisição
```bash
curl -X GET "http://localhost:3000/api/compositions?workspaceId=workspace-1&status=active" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": [
    {
      "id": "composition-1",
      "name": "Development Pipeline",
      "description": "Complete software development workflow",
      "config": "name: Development Pipeline\nworkflow:...",
      "status": "active",
      "workspaceId": "workspace-1",
      "agents": ["agent-1", "agent-2"],
      "createdAt": "2025-06-23T10:30:00.000Z",
      "updatedAt": "2025-06-23T10:30:00.000Z"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 5,
    "totalPages": 1
  }
}
```

#### Códigos de Status
- `200`: Sucesso
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

### POST /api/compositions

Cria uma nova composição.

#### Endpoint
```
POST /api/compositions
```

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `name` | string | Sim | Nome da composição |
| `description` | string | Não | Descrição da composição |
| `config` | string | Sim | Configuração em YAML |
| `workspaceId` | string | Sim | ID do workspace |
| `agents` | string[] | Não | IDs dos agentes |

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/compositions" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Development Pipeline",
    "description": "Complete software development workflow",
    "config": "name: Development Pipeline\nworkflow:...",
    "workspaceId": "workspace-1",
    "agents": ["agent-1", "agent-2"]
  }'
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "id": "composition-new-1",
    "name": "Development Pipeline",
    "description": "Complete software development workflow",
    "config": "name: Development Pipeline\nworkflow:...",
    "status": "draft",
    "workspaceId": "workspace-1",
    "agents": ["agent-1", "agent-2"],
    "createdAt": "2025-06-23T10:30:00.000Z",
    "updatedAt": "2025-06-23T10:30:00.000Z"
  },
  "message": "Composition created successfully"
}
```

#### Códigos de Status
- `201`: Criado com sucesso
- `400`: Dados inválidos
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

### POST /api/compositions/execute

Executa uma composição.

#### Endpoint
```
POST /api/compositions/execute
```

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `compositionId` | string | Sim | ID da composição |
| `input` | string | Sim | Input para a composição |

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/compositions/execute" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "compositionId": "composition-1",
    "input": "Create a new user management system"
  }'
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "id": "execution-1",
    "compositionId": "composition-1",
    "input": "Create a new user management system",
    "results": {
      "steps": [
        {
          "step": 1,
          "agent": "agent-1",
          "input": "Create a new user management system",
          "output": "Requirements gathered...",
          "status": "completed"
        },
        {
          "step": 2,
          "agent": "agent-2",
          "input": "Requirements gathered...",
          "output": "Code generated...",
          "status": "completed"
        }
      ]
    },
    "status": "completed",
    "startedAt": "2025-06-23T10:30:00.000Z",
    "completedAt": "2025-06-23T10:30:15.000Z",
    "createdAt": "2025-06-23T10:30:00.000Z"
  },
  "message": "Composition executed successfully"
}
```

#### Códigos de Status
- `200`: Execução iniciada/completada
- `400`: Dados inválidos
- `401`: Não autorizado
- `404`: Composição não encontrada
- `500`: Erro interno do servidor

---

### PATCH /api/compositions/[id]/archive

Arquiva ou desarquiva uma composição.

#### Endpoint
```
PATCH /api/compositions/{id}/archive
```

#### Path Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `id` | string | Sim | ID da composição |

#### Exemplo de Requisição
```bash
curl -X PATCH "http://localhost:3000/api/compositions/composition-1/archive" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "id": "composition-1",
    "name": "Development Pipeline",
    "status": "archived",
    "updatedAt": "2025-06-23T11:00:00.000Z"
  },
  "message": "Composition archived successfully"
}
```

#### Códigos de Status
- `200`: Operação realizada com sucesso
- `401`: Não autorizado
- `404`: Composição não encontrada
- `500`: Erro interno do servidor

---

## 📊 Learning API

### GET /api/learning

Obtém dados de aprendizado.

#### Endpoint
```
GET /api/learning
```

#### Query Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `agentId` | string | Não | ID do agente |
| `type` | string | Não | Tipo de aprendizado |
| `startDate` | string | Não | Data inicial (ISO 8601) |
| `endDate` | string | Não | Data final (ISO 8601) |

#### Exemplo de Requisição
```bash
curl -X GET "http://localhost:3000/api/learning?agentId=agent-1&type=feedback" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": [
    {
      "id": "learning-1",
      "agentId": "agent-1",
      "type": "feedback",
      "data": {
        "feedback": "Excellent analysis",
        "rating": 5,
        "comments": "Very detailed and helpful"
      },
      "confidence": 0.95,
      "createdAt": "2025-06-23T10:30:00.000Z"
    }
  ]
}
```

#### Códigos de Status
- `200`: Sucesso
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

### GET /api/analytics

Obtém analytics avançados.

#### Endpoint
```
GET /api/analytics
```

#### Query Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `agentId` | string | Não | ID do agente |
| `metricName` | string | Não | Nome da métrica |
| `startDate` | string | Não | Data inicial |
| `endDate` | string | Não | Data final |

#### Exemplo de Requisição
```bash
curl -X GET "http://localhost:3000/api/analytics?agentId=agent-1&metricName=execution_time" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "metrics": [
      {
        "id": "metric-1",
        "timestamp": 1719142800000,
        "agentId": "agent-1",
        "metricName": "execution_time",
        "metricValue": 1.5,
        "tags": "environment:production"
      }
    ],
    "insights": [
      {
        "type": "performance_improvement",
        "message": "Execution time improved by 15%",
        "confidence": 0.85
      }
    ]
  }
}
```

#### Códigos de Status
- `200`: Sucesso
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

## 🏢 Workspaces API

### GET /api/workspaces

Lista workspaces do usuário.

#### Endpoint
```
GET /api/workspaces
```

#### Exemplo de Requisição
```bash
curl -X GET "http://localhost:3000/api/workspaces" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": [
    {
      "id": "workspace-1",
      "name": "Development Workspace",
      "description": "Main development environment",
      "config": "{}",
      "userId": "user-1",
      "createdAt": "2025-06-23T10:30:00.000Z",
      "updatedAt": "2025-06-23T10:30:00.000Z"
    }
  ]
}
```

#### Códigos de Status
- `200`: Sucesso
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

### POST /api/workspaces

Cria um novo workspace.

#### Endpoint
```
POST /api/workspaces
```

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `name` | string | Sim | Nome do workspace |
| `description` | string | Não | Descrição do workspace |
| `config` | string | Não | Configuração em JSON |

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/workspaces" \
  -H "Authorization: Bearer {token}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "New Workspace",
    "description": "A new workspace for testing",
    "config": "{}"
  }'
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "id": "workspace-new-1",
    "name": "New Workspace",
    "description": "A new workspace for testing",
    "config": "{}",
    "userId": "user-1",
    "createdAt": "2025-06-23T10:30:00.000Z",
    "updatedAt": "2025-06-23T10:30:00.000Z"
  },
  "message": "Workspace created successfully"
}
```

#### Códigos de Status
- `201`: Criado com sucesso
- `400`: Dados inválidos
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

## 🔐 Auth API

### POST /api/auth/login

Autentica um usuário.

#### Endpoint
```
POST /api/auth/login
```

#### Body Parameters
| Parâmetro | Tipo | Obrigatório | Descrição |
|-----------|------|-------------|-----------|
| `email` | string | Sim | Email do usuário |
| `password` | string | Sim | Senha do usuário |

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/auth/login" \
  -H "Content-Type: application/json" \
  -d '{
    "email": "user@example.com",
    "password": "password123"
  }'
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user-1",
      "email": "user@example.com",
      "name": "John Doe",
      "role": "user"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresAt": "2025-06-24T10:30:00.000Z"
  },
  "message": "Login successful"
}
```

#### Códigos de Status
- `200`: Login bem-sucedido
- `400`: Credenciais inválidas
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

### POST /api/auth/logout

Logout do usuário.

#### Endpoint
```
POST /api/auth/logout
```

#### Exemplo de Requisição
```bash
curl -X POST "http://localhost:3000/api/auth/logout" \
  -H "Authorization: Bearer {token}"
```

#### Exemplo de Resposta
```json
{
  "success": true,
  "message": "Logout successful"
}
```

#### Códigos de Status
- `200': Logout bem-sucedido
- `401`: Não autorizado
- `500`: Erro interno do servidor

---

## 🏥 Health Check

### GET /api/health

Verifica a saúde do sistema.

#### Endpoint
```
GET /api/health
```

#### Exemplo de Requisição
```bash
curl -X GET "http://localhost:3000/api/health"
```

#### Exemplo de Resposta
```json
{
  "status": "healthy",
  "timestamp": "2025-06-23T10:30:00.000Z",
  "services": {
    "database": "up",
    "cache": "up",
    "ai": "up"
  },
  "version": "2025.1.0",
  "uptime": 86400
}
```

#### Códigos de Status
- `200`: Sistema saudável
- `503`: Serviço indisponível

---

## 🚨 Erros Comuns

### Códigos de Erro

| Código | Descrição |
|--------|-----------|
| `VALIDATION_ERROR` | Dados de entrada inválidos |
| `AUTHENTICATION_ERROR` | Falha na autenticação |
| `AUTHORIZATION_ERROR` | Permissão negada |
| `NOT_FOUND` | Recurso não encontrado |
| `INTERNAL_ERROR` | Erro interno do servidor |
| `RATE_LIMIT_EXCEEDED` | Limite de requisições excedido |
| `SERVICE_UNAVAILABLE` | Serviço temporariamente indisponível |

### Exemplos de Respostas de Erro

#### Validação
```json
{
  "success": false,
  "error": {
    "code": "VALIDATION_ERROR",
    "message": "Invalid input data",
    "details": {
      "name": "Name is required",
      "email": "Invalid email format"
    }
  },
  "timestamp": "2025-06-23T10:30:00.000Z"
}
```

#### Autenticação
```json
{
  "success": false,
  "error": {
    "code": "AUTHENTICATION_ERROR",
    "message": "Invalid credentials"
  },
  "timestamp": "2025-06-23T10:30:00.000Z"
}
```

#### Não Encontrado
```json
{
  "success": false,
  "error": {
    "code": "NOT_FOUND",
    "message": "Agent not found"
  },
  "timestamp": "2025-06-23T10:30:00.000Z"
}
```

---

## 📝 Melhores Práticas

### Autenticação

```javascript
// Sempre inclua o token de autenticação
const headers = {
  'Authorization': `Bearer ${token}`,
  'Content-Type': 'application/json'
};

// Armazene o token de forma segura
localStorage.setItem('zanai_token', token);
```

### Tratamento de Erros

```javascript
try {
  const response = await fetch('/api/agents', {
    headers,
    method: 'POST',
    body: JSON.stringify(data)
  });
  
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error.message);
  }
  
  const result = await response.json();
  return result.data;
} catch (error) {
  console.error('API Error:', error);
  throw error;
}
```

### Paginação

```javascript
// Use paginação para grandes conjuntos de dados
async function getAgents(page = 1, limit = 20) {
  const response = await fetch(`/api/agents?page=${page}&limit=${limit}`, {
    headers
  });
  
  const result = await response.json();
  return {
    agents: result.data,
    pagination: result.pagination
  };
}
```

### Rate Limiting

```javascript
// Respeite os limites de requisição
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function makeRequestWithRetry(url, options, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      
      if (response.status === 429) {
        const retryAfter = response.headers.get('Retry-After');
        await delay(retryAfter ? parseInt(retryAfter) * 1000 : 1000);
        continue;
      }
      
      return response;
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await delay(1000 * Math.pow(2, i));
    }
  }
}
```

---

## 🔄 WebSockets

### Conexão

```javascript
const socket = io('http://localhost:3000', {
  auth: {
    token: 'your-jwt-token'
  }
});

socket.on('connect', () => {
  console.log('Connected to Zanai WebSocket');
});

socket.on('agent-execution', (data) => {
  console.log('Agent execution update:', data);
});

socket.on('disconnect', () => {
  console.log('Disconnected from Zanai WebSocket');
});
```

### Eventos

| Evento | Descrição |
|--------|-----------|
| `agent-execution` | Atualização de execução de agente |
| `composition-execution` | Atualização de execução de composição |
| `learning-update` | Atualização de aprendizado |
| `system-status` | Status do sistema |

---

*Esta documentação cobre todos os endpoints disponíveis na API do Zanai Project. Para dúvidas adicionais, consulte o [Guia de Desenvolvimento](./GUIA-DESENVOLVIMENTO.md) ou entre em contato com nossa equipe de suporte.*