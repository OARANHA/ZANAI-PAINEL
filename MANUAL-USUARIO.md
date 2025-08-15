# 📖 Manual do Usuário - Zanai Project

## 🌟 Bem-vindo ao Zanai Project

O **Zanai Project** é um sistema completo de gestão de agentes de inteligência artificial projetado para automação de processos, geração de especialistas e composição de fluxos de trabalho complexos. Este manual irá guiá-lo através de todas as funcionalidades do sistema.

---

## 🚀 Introdução Rápida

### O que você pode fazer com o Zanai?

- 🤖 **Criar Agentes IA**: Desenvolva agentes inteligentes com configurações avançadas
- 🧠 **Gerar Especialistas**: Crie especialistas personalizados usando IA para diversas áreas
- 🔄 **Compor Fluxos**: Combine múltiplos agentes para fluxos de trabalho complexos
- 📊 **Acompanhar Aprendizado**: Monitore métricas e evolução do sistema
- 🎨 **Desenvolver com IA**: Ambiente integrado com sugestões e automação

### Primeiros Passos

1. **Acesse o Sistema**: Abra seu navegador e acesse a URL do Zanai
2. **Explore o Dashboard**: Familiarize-se com a interface principal
3. **Crie seu Workspace**: Configure seu ambiente de trabalho
4. **Crie seu Primeiro Agente**: Comece com um agente simples
5. **Experimente as Funcionalidades**: Explore especialistas, composições e studio

---

## 🏠 Dashboard Principal

### Visão Geral

O dashboard é o centro de comando do Zanai, onde você terá uma visão completa do sistema:

#### Componentes Principais

1. **Cards de Estatísticas**
   - Total de Agentes: Mostra o número total de agentes cadastrados
   - Agentes Ativos: Agentes em operação no momento
   - Composições: Fluxos de trabalho configurados
   - Workspaces: Ambientes de trabalho ativos

2. **Navegação por Abas**
   - **Visão Geral**: Dashboard principal com estatísticas
   - **Agentes**: Gestão de agentes de IA
   - **Especialistas**: Gerador de especialistas
   - **Composição**: Fluxos de trabalho complexos
   - **Visual Studio**: Ambiente de desenvolvimento

3. **Cards de Funcionalidades**
   - **Agentes Inteligentes**: Acesso rápido à gestão de agentes
   - **Gerador de Especialistas**: Criação de especialistas via IA
   - **Composição de Agentes**: Combinação de múltiplos agentes
   - **Sistema de Aprendizado**: Métricas e evolução
   - **Visual Studio**: Ambiente de desenvolvimento integrado

### Como Navegar

- Use as abas superiores para alternar entre módulos
- Clique nos cards para acessar funcionalidades específicas
- Utilize o menu lateral para navegação rápida
- A barra de busca permite encontrar itens rapidamente

---

## 🤖 Gestão de Agentes

### Criando um Agente

#### Passo a Passo

1. **Acesse a Página de Agentes**
   - Clique na aba "Agentes" no dashboard
   - Ou acesse diretamente `/agents`

2. **Clique em "Novo Agente"**
   - Botão localizado no canto superior direito
   - Irá abrir um diálogo de criação

3. **Preencha as Informações Básicas**
   ```yaml
   Nome: Ex: "Analista de Código"
   Descrição: Ex: "Agente especializado em análise de código"
   Tipo: Selecione entre Template, Custom ou Composed
   ```

4. **Configure o Agente (YAML)**
   ```yaml
   # Exemplo de configuração
   name: "Analista de Código"
   version: "1.0.0"
   description: "Analisa e otimiza código fonte"
   
   capabilities:
     - code_analysis
     - optimization
     - documentation
   
   settings:
     language: "typescript"
     framework: "nextjs"
     complexity: "medium"
   ```

5. **Adicione Conhecimento (Markdown)**
   ```markdown
   # Conhecimento do Analista de Código
   
   ## Padrões de Código
   - Follow clean code principles
   - Use TypeScript for type safety
   - Implement proper error handling
   
   ## Melhores Práticas
   - Code reviews
   - Testing strategies
   - Performance optimization
   ```

6. **Selecione o Workspace**
   - Escolha o ambiente de trabalho para o agente
   - Cada workspace pode ter seus próprios agentes

7. **Salve o Agente**
   - Clique em "Criar Agente"
   - O agente estará disponível na lista

### Gerenciando Agentes

#### Lista de Agentes

Na página de agentes, você verá:

- **Cards de Agentes**: Cada agente é exibido em um card com:
  - Nome e descrição
  - Status (ativo, inativo, em treinamento)
  - Tipo (template, custom, composed)
  - Data de criação

#### Ações Disponíveis

1. **Executar Agente**
   - Clique no botão de play (▶️)
   - O agente será executado com as configurações atuais

2. **Editar Agente**
   - Clique no ícone de configurações (⚙️)
   - Modifique configurações, YAML ou conhecimento
   - Salve as alterações

3. **Arquivar/Desarquivar**
   - Clique no ícone de arquivo (📁)
   - Agentes arquivados não aparecem na lista principal
   - Podem ser restaurados posteriormente

#### Status dos Agentes

- **Ativo**: Agente pronto para execução
- **Inativo**: Agente temporariamente desativado
- **Em Treinamento**: Agente aprendendo novos padrões

---

## 🧠 Gerador de Especialistas

### O que são Especialistas?

Especialistas são agentes de IA altamente especializados em áreas específicas, gerados automaticamente usando inteligência artificial para atender a requisitos específicos de negócio.

### Criando um Especialista

#### Passo a Passo

1. **Acesse o Gerador de Especialistas**
   - Clique na aba "Especialistas" no dashboard
   - Ou acesse diretamente `/specialists`

2. **Clique em "Novo Especialista"**
   - Botão localizado no canto superior direito

3. **Selecione a Categoria**
   - **Business**: Análise de negócio, marketing, vendas
   - **Technical**: Desenvolvimento, integrações, segurança
   - **Content**: Redação, design, mídia
   - **Legal**: Jurídico, compliance, contratos

4. **Defina a Especialidade**
   - Ex: "Analista Financeiro"
   - Ex: "Especialista em SEO"
   - Ex: "Consultor de Segurança"

5. **Descreva os Requisitos**
   ```
   Exemplo para Analista Financeiro:
   - Experiente em análise de demonstrações financeiras
   - Conhecimento em planejamento orçamentário
   - Habilidade em análise de investimentos
   - Familiaridade com normas contábeis
   ```

6. **Gere o Especialista**
   - Clique em "Gerar Especialista"
   - Aguarde o processamento pela IA
   - O especialista será criado automaticamente

### Gerenciando Especialistas

#### Estrutura do Especialista

Cada especialista gerado inclui:

- **Informações Básicas**: Nome, descrição, categoria
- **Habilidades**: Lista de competências específicas
- **Casos de Uso**: Aplicações práticas do especialista
- **Template Completo**: Configuração YAML pronta para uso

#### Ações Disponíveis

1. **Executar Especialista**
   - Teste o especialista com inputs específicos
   - Verifique a qualidade das respostas

2. **Download em Markdown**
   - Baixe a documentação completa
   - Use para referência ou compartilhamento

3. **Gerar Estrutura de Pastas**
   - Crie uma estrutura organizada no seu projeto
   - Inclui templates e documentação

#### Categorias Disponíveis

##### Business 📊
- **Business Analyst**: Análise de processos de negócio
- **Marketing Specialist**: Estratégias de marketing digital
- **Sales Automator**: Automação de vendas e CRM
- **Financial Advisor**: Consultoria financeira

##### Technical ⚙️
- **Software Developer**: Desenvolvimento de software
- **Security Expert**: Segurança da informação
- **Data Scientist**: Análise de dados e machine learning
- **DevOps Engineer**: Operações e infraestrutura

##### Content ✍️
- **Content Writer**: Redação de conteúdo
- **SEO Specialist**: Otimização para mecanismos de busca
- **Social Media Manager**: Gestão de redes sociais
- **UX Designer**: Design de experiência do usuário

##### Legal ⚖️
- **Legal Consultant**: Consultoria jurídica
- **Compliance Officer**: Conformidade regulatória
- **Contract Analyst**: Análise de contratos
- **Privacy Specialist**: Privacidade e proteção de dados

---

## 🔄 Composição de Agentes

### O que são Composições?

Composições são fluxos de trabalho complexos que combinam múltiplos agentes para realizar tarefas sofisticadas que seriam difíceis ou impossíveis para um único agente.

### Criando uma Composição

#### Passo a Passo

1. **Acesse a Página de Composições**
   - Clique na aba "Composição" no dashboard
   - Ou acesse diretamente `/compositions`

2. **Clique em "Criar Composição"**
   - Botão localizado no canto superior direito

3. **Defina as Informações Básicas**
   - **Nome**: Ex: "Pipeline de Desenvolvimento"
   - **Descrição**: Ex: "Fluxo completo para análise e desenvolvimento de software"

4. **Selecione os Agentes**
   - Escolha múltiplos agentes ativos
   - A ordem de seleção pode influenciar a execução
   - Exemplo de combinação:
     - Analista de Requisitos
     - Desenvolvedor de Código
     - Testador de Qualidade
     - Documentador Técnico

5. **Configure a Composição (YAML)**
   ```yaml
   name: "Pipeline de Desenvolvimento"
   version: "1.0.0"
   description: "Fluxo completo de desenvolvimento de software"
   
   workflow:
     steps:
       - name: "Análise de Requisitos"
         agent: "analista-requisitos"
         input: "Descrição do projeto"
         output: "requisitos-detalhados"
       
       - name: "Desenvolvimento"
         agent: "desenvolvedor"
         input: "requisitos-detalhados"
         output: "codigo-fonte"
       
       - name: "Testes"
         agent: "testador"
         input: "codigo-fonte"
         output: "resultados-testes"
       
       - name: "Documentação"
         agent: "documentador"
         input: "codigo-fonte"
         output: "documentacao-final"
   
   execution:
     mode: "sequential"  # ou "parallel"
     timeout: 3600       # segundos
     retry_count: 3
   ```

6. **Salve a Composição**
   - Clique em "Criar Composição"
   - A composição estará disponível para execução

### Executando Composições

#### Execução Manual

1. **Selecione a Composição**
   - Encontre a composição desejada na lista
   - Clique no card para expandir detalhes

2. **Clique em "Executar"**
   - Botão de play (▶️)
   - A composição começará a executar

3. **Acompanhe a Execução**
   - Status em tempo real
   - Logs de cada passo
   - Resultados intermediários

#### Monitoramento

Durante a execução, você pode:

- **Ver Status**: Pendente, Executando, Concluído, Falhou
- **Acompanhar Progresso**: Barra de progresso visual
- **Ver Logs**: Detalhes de cada etapa
- **Cancelar Execução**: Interromper se necessário

### Gerenciando Composições

#### Filtros e Busca

A página de composições oferece:

- **Busca por Nome**: Encontre composições específicas
- **Filtro por Status**: Ativas, Inativas, Todas
- **Ordenação**: Por nome, data de criação, última execução

#### Estatísticas

Cards informativos mostram:

- **Total de Composições**: Número total no sistema
- **Ativas**: Composições prontas para uso
- **Execuções Totais**: Histórico de execuções
- **Agentes Conectados**: Total de agentes em uso

#### Ações Disponíveis

1. **Executar Composição**
   - Iniciar fluxo de trabalho
   - Monitorar progresso

2. **Editar Composição**
   - Modificar agentes selecionados
   - Atualizar configuração YAML

3. **Arquivar/Desarquivar**
   - Remover da lista principal
   - Preservar para uso futuro

---

## 📊 Sistema de Aprendizado

### O que é o Sistema de Aprendizado?

O sistema de aprendizado monitora continuamente o desempenho dos agentes, identifica padrões, otimiza automaticamente e fornece insights para melhorias.

### Dashboard de Aprendizado

#### Métricas Principais

1. **Total de Execuções**
   - Número total de execuções de agentes
   - Gráfico de evolução temporal

2. **Taxa de Sucesso**
   - Percentual de execuções bem-sucedidas
   - Identificação de falhas recorrentes

3. **Tempo Médio de Resposta**
   - Média de tempo de processamento
   - Identificação de lentidão

4. **Agentes Ativos**
   - Número de agentes em operação
   - Status de cada agente

### Recursos de Aprendizado

#### Análise de Desempenho

- **Precisão**: Acurácia das respostas dos agentes
- **Velocidade**: Tempo de processamento e resposta
- **Satisfação**: Feedback dos usuários (quando disponível)

#### Otimização Automática

- **Otimizações**: Melhorias automáticas aplicadas
- **Melhorias**: Ganhos de performance obtidos
- **Eficiência**: Nível de otimização do sistema

#### Evolução Contínua

- **Atualizações**: Atualizações automáticas dos agentes
- **Novas Habilidades**: Competências adquiridas
- **Adaptação**: Capacidade de adaptação a novos cenários

### Atividade Recente

O sistema mostra:

- **Otimizações Recentes**: Melhorias aplicadas automaticamente
- **Padrões Identificados**: Novos padrões de comportamento
- **Atualizações de Modelo**: Versões atualizadas dos agentes

### Como Utilizar o Sistema de Aprendizado

1. **Monitore as Métricas**
   - Acompanhe os indicadores principais
   - Identifique tendências e anomalias

2. **Analise o Desempenho**
   - Verifique a precisão e velocidade
   - Compare entre diferentes agentes

3. **Revise as Otimizações**
   - Entenda as melhorias aplicadas
   - Valide os resultados obtidos

4. **Acompanhe a Evolução**
   - Observe as atualizações dos agentes
   - Avalie as novas habilidades adquiridas

---

## 🎨 Visual Studio

### O que é o Visual Studio?

O Visual Studio é um ambiente de desenvolvimento integrado que combina ferramentas de desenvolvimento com agentes de IA para proporcionar uma experiência de programação inteligente e assistida.

### Workspace de Desenvolvimento

#### Gerenciamento de Projetos

1. **Criando um Projeto**
   - Clique em "Novo Projeto"
   - Preencha:
     - Nome do projeto
     - Descrição
     - Linguagem de programação
     - Framework utilizado

2. **Selecionando Projetos**
   - Use o seletor no topo da página
   - Projetos ativos aparecem na lista lateral

3. **Sincronização**
   - Clique em "Sync" para sincronizar com VS Code
   - Mantenha o projeto atualizado

#### Área de Trabalho

O workspace oferece:

- **Editor de Código**: Editor integrado com syntax highlighting
- **Sugestões de IA**: Recomendações inteligentes em tempo real
- **Execução de Código**: Teste e execução direta
- **Versionamento**: Controle de versões integrado

### Funcionalidades Principais

#### Abas de Navegação

1. **Workspace**
   - Gerenciamento de projetos
   - Editor de código principal
   - Sugestões de IA

2. **Agentes IA**
   - Agentes disponíveis para assistência
   - Configuração de assistentes
   - Histórico de interações

3. **Automação**
   - Scripts e automações
   - Agendamento de tarefas
   - Monitoramento de processos

4. **Analytics**
   - Métricas de desenvolvimento
   - Análise de código
   - Relatórios de performance

#### Sugestões de IA

O sistema oferece sugestões inteligentes:

- **Otimização de Código**: Melhorias de performance
- **Refatoração**: Sugestões de refatoração
- **Padrões de Projeto**: Aplicação de design patterns
- **Correção de Bugs**: Identificação e correção de erros

#### Automação de Tarefas

Funcionalidades de automação:

- **Build Automático**: Compilação automática
- **Testes Automatizados**: Execução de testes
- **Deploy**: Implantação automática
- **Monitoramento**: Acompanhamento de performance

### Integrando com VS Code

#### Configuração Inicial

1. **Instale a Extensão Zanai**
   - Disponível na VS Code Marketplace
   - Busque por "Zanai AI Assistant"

2. **Configure a Conexão**
   - URL do servidor Zanai
   - Credenciais de autenticação
   - Workspace padrão

3. **Sincronize Projetos**
   - Selecione projetos para sincronizar
   - Configure opções de sincronização
   - Mantenha projetos atualizados

#### Recursos da Extensão

- **Code Completion**: Autocompletar inteligente
- **Error Detection**: Detecção de erros em tempo real
- **Refactoring Suggestions**: Sugestões de refatoração
- **Documentation Generation**: Geração automática de documentação
- **Code Review**: Revisão de código automatizada

---

## 🔧 Configuração e Personalização

### Configurações do Sistema

#### Preferências do Usuário

1. **Acesse as Configurações**
   - Menu lateral > Configurações
   - Ou clique no seu perfil

2. **Personalize**
   - **Tema**: Claro, Escuro, Automático
   - **Idioma**: Português, Inglês, Espanhol
   - **Notificações**: Email, Push, In-app
   - **Privacidade**: Opções de privacidade

#### Configurações de Workspace

1. **Gerencie Workspaces**
   - Crie workspaces para diferentes projetos
   - Configure permissões por workspace
   - Personalize configurações específicas

2. **Integrações**
   - Conecte ferramentas externas
   - Configure webhooks
   - Gerencie API keys

### Personalização da Interface

#### Temas e Cores

- **Temas Padrão**: Claro, Escuro
- **Temas Personalizados**: Crie seus próprios temas
- **Cores da Marca**: Adapte cores institucionais

#### Layout e Organização

- **Arrastar e Soltar**: Reorganize componentes
- **Tamanhos Ajustáveis**: Redimensione painéis
- **Atalhos**: Configure atalhos personalizados

---

## 🚀 Melhores Práticas

### Para Agentes

#### 1. Design de Agentes
- **Seja Específico**: Defina claramente o propósito do agente
- **Modular**: Crie agentes com responsabilidades bem definidas
- **Documente**: Mantenha documentação atualizada
- **Teste**: Valide funcionalidades antes de produção

#### 2. Configuração YAML
```yaml
# Boas práticas de configuração
name: "Nome Descritivo"
version: "1.0.0"
description: "Descrição clara e objetiva"

capabilities:
  - habilidade_principal
  - habilidade_secundaria

settings:
  parametro_1: "valor"
  parametro_2: "valor"
  
  # Valores padrão
  defaults:
    timeout: 30
    retries: 3
```

#### 3. Conhecimento em Markdown
```markdown
# Estrutura recomendada

## Visão Geral
Breve descrição do agente

## Responsabilidades
- Tarefa principal
- Tarefas secundárias

## Conhecimento Específico
Informações detalhadas

## Limitações
O que o agente NÃO faz
```

### Para Composições

#### 1. Design de Fluxos
- **Sequência Lógica**: Ordem coerente de execução
- **Tratamento de Erros**: Preveja falhas e recuperação
- **Paralelismo**: Use execução paralela quando possível
- **Timeouts**: Defina tempos limite adequados

#### 2. Configuração de Workflow
```yaml
workflow:
  steps:
    - name: "Etapa 1"
      agent: "agente1"
      input: "entrada1"
      output: "saida1"
      timeout: 300
      
    - name: "Etapa 2"
      agent: "agente2"
      input: "saida1"  # Usa saída da etapa anterior
      output: "saida_final"
      
  execution:
    mode: "sequential"
    max_retries: 2
    error_handling: "continue"  # ou "stop"
```

### Para Especialistas

#### 1. Definição de Requisitos
- **Seja Específico**: Detalhe exatamente o que precisa
- **Contexto**: Forneça contexto suficiente
- **Exemplos**: Inclua exemplos quando possível
- **Limitações**: Defina limitações claras

#### 2. Validação
- **Teste o Especialista**: Valide as respostas
- **Itere**: Refine se necessário
- **Documente**: Mantenha registro das versões

---

## 🛠️ Solução de Problemas

### Problemas Comuns

#### 1. Agentes Não Executam

**Causas Possíveis:**
- Agente inativo
- Configuração YAML inválida
- Problemas de conexão

**Soluções:**
- Verifique o status do agente
- Revise a configuração YAML
- Teste a conexão com o servidor

#### 2. Composições Falham

**Causas Possíveis:**
- Agentes dependentes inativos
- Configuração de workflow inválida
- Timeout excedido

**Soluções:**
- Verifique status de todos os agentes
- Revise a configuração do workflow
- Ajuste timeouts e retries

#### 3. Lentidão no Sistema

**Causas Possíveis:**
- Muitas execuções simultâneas
- Problemas de performance do servidor
- Banco de dados lento

**Soluções:**
- Reduza carga simultânea
- Verifique recursos do servidor
- Otimize queries do banco

### Erros e Mensagens

#### Códigos de Erro Comuns

- **E001**: Erro de configuração YAML
- **E002**: Agente não encontrado
- **E003**: Timeout de execução
- **E004**: Erro de conexão com API
- **E005**: Permissão negada

#### Interpretação de Logs

```log
2025-06-23 10:30:15 [INFO] Agent execution started
2025-06-23 10:30:16 [DEBUG] Processing input: "test input"
2025-06-23 10:30:17 [WARN] Timeout approaching, 5s remaining
2025-06-23 10:30:18 [ERROR] Execution failed: timeout exceeded
2025-06-23 10:30:18 [INFO] Agent execution completed with error
```

### Suporte e Ajuda

#### Recursos de Ajuda

1. **Documentação**: Consulte os manuais disponíveis
2. **Logs**: Verifique logs do sistema
3. **Status**: Verifique status dos serviços
4. **Comunidade**: Fóruns e grupos de discussão

#### Contato de Suporte

- **Email**: suporte@zanai.com
- **Chat**: Suporte online no sistema
- **Issue Tracker**: Sistema de rastreamento de issues

---

## 📈 Dicas Avançadas

### Otimização de Performance

#### 1. Agentes Eficientes
- **Limite Escopo**: Mantenha agentes focados
- **Cache**: Use cache para respostas comuns
- **Batch Processing**: Processe múltiplas requisições juntas

#### 2. Composições Otimizadas
- **Paralelismo**: Execute etapas independentes em paralelo
- **Async Processing**: Use processamento assíncrono
- **Resource Management**: Gerencie recursos adequadamente

### Segurança

#### 1. Boas Práticas
- **Validação**: Valide todos os inputs
- **Sanitização**: Limpe dados sensíveis
- **Autenticação**: Use autenticação forte
- **Autorização**: Controle acesso por nível

#### 2. Proteção de Dados
- **Criptografia**: Use criptografia para dados sensíveis
- **Backup**: Mantenha backups regulares
- **Audit**: Mantenha logs de auditoria

### Integrações

#### 1. APIs Externas
- **Rate Limiting**: Respeite limites de API
- **Error Handling**: Trate erros de API adequadamente
- **Caching**: Cache respostas quando possível

#### 2. Webhooks
- **Validation**: Valide payloads de webhook
- **Security**: Use tokens de segurança
- **Retry Logic**: Implemente lógica de retry

---

## 🎉 Conclusão

O Zanai Project é uma plataforma poderosa e flexível para gestão de agentes de IA. Com este manual, você está preparado para:

- ✅ Criar e gerenciar agentes inteligentes
- ✅ Gerar especialistas personalizados
- ✅ Compor fluxos de trabalho complexos
- ✅ Monitorar e otimizar performance
- ✅ Desenvolver com assistência de IA

### Próximos Passos

1. **Explore**: Continue explorando todas as funcionalidades
2. **Experimente**: Teste diferentes combinações e configurações
3. **Otimize**: Melhore seus agentes e fluxos continuamente
4. **Compartilhe**: Compartilhe suas experiências com a comunidade

### Recursos Adicionais

- **Documentação Técnica**: Para desenvolvedores
- **API Reference**: Referência completa da API
- **Comunidade**: Fóruns e grupos de discussão
- **Atualizações**: Notas de versão e roadmap

---

*Este manual foi criado com ❤️ pela equipe Zanai para proporcionar a melhor experiência possível com nossa plataforma.*