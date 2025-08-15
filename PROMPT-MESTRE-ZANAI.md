# 🔧 PROMPT MESTRE COMPLETO — Zanai Setup + Desenvolvimento

## ATENÇÃO: INSTRUÇÕES CRÍTICAS PARA ESTA SESSÃO

### 1. DIRETÓRIO DE TRABALHO OBRIGATÓRIO:
   - Você DEVE trabalhar exclusivamente no diretório: /home/z/my-project/
   - NUNCA trabalhe no diretório /home/z/my-project/Zanai/ (se existir)
   - Antes de qualquer ação, verifique o diretório atual com: pwd

### 2. VERIFICAÇÃO OBRIGATÓRIA DE ESTRUTURA:
   - Execute: pwd
   - Execute: ls -la /home/z/my-project/
   - Execute: ls -la /home/z/my-project/src/app/
   - Confirme que os arquivos estão na raiz (sem subpasta ./Zanai)

### 3. MODO SILENCIOSO OBRIGATÓRIO:
   - NUNCA mostre o código completo dos arquivos que está escrevendo
   - Ao usar Write/Edit/MultiEdit, mostre APENAS:
     * Nome do arquivo: /caminho/do/arquivo.tsx
     * Status: [CRIADO] ou [MODIFICADO]
     * Resumo: "Arquivo criado/modificado com sucesso"
   - Evite outputs verbosos. Se precisar mostrar trechos, mostre apenas snippets pequenos (máx 5 linhas)

### 4. CONTEXTO DO PROJETO:
   - Este é um projeto Next.js 15 com TypeScript
   - Repo: https://github.com/OARANHA/Zanai.git
   - Stack: Next.js 15 + TypeScript, Prisma com SQLite, WebSocket em 3001, UI com shadcn/ui + Tailwind CSS
   - Comandos após setup: npm run db:generate, npm run db:seed, npm run dev
   - Possui páginas implementadas: agents, specialists, studio, compositions, learning
   - Usa shadcn/ui components e Prisma ORM

---

## 🚀 PARTE 1: SETUP INICIAL DO ZANAI (se necessário)

### Objetivo do Setup:
Preparar o workspace para rodar o Zanai com os arquivos na raiz, garantir .env e .z-ai-config válidos, parar serviços conflitando e iniciar o projeto.

### Passos do Setup:

#### 1.1 Verificar diretório atual:
```bash
pwd
ls -la
```

#### 1.2 Se a raiz estiver vazia ou incompleta:
```bash
# Clonar repositório
git clone --depth=1 https://github.com/OARANHA/Zanai.git .
rm -rf .git
```

#### 1.3 Se a raiz não estiver vazia (usar fluxo temp + move):
```bash
# Linux/macOS
TEMP_DIR="$(mktemp -d)"
git clone --depth=1 https://github.com/OARANHA/Zanai.git "$TEMP_DIR"
rsync -a --exclude .git "$TEMP_DIR"/ ./
rm -rf "$TEMP_DIR"
```

#### 1.4 Garantir .gitignore:
```bash
# Adicionar ao .gitignore se não existir:
.env
.z-ai-config
node_modules
.next
```

#### 1.5 Criar/atualizar .z-ai-config (JSON sem comentários):
```json
{
  "apiKey": "d56c89e3fdd24034bd228576e2f40fd5.zfVpIPTnS55T9qRE",
  "baseUrl": "https://api.z.ai/api/paas/v4/",
  "model": "GLM-4.5-Flash",
  "maxTokens": 2000,
  "temperature": 0.7
}
```

#### 1.6 Criar/atualizar .env:
```bash
DATABASE_URL="file:./dev.db"
NODE_ENV="development"
ZANAI_ENV="development"
ZANAI_PORT="3000"
ZAI_API_KEY=d56c89e3fdd24034bd228576e2f40fd5.zfVpIPTnS55T9qRE
ZAI_BASE_URL="https://api.z.ai/api/paas/v4/"
ZAI_MODEL="glm-4.5-flash"
ZAI_MAX_TOKENS="2000"
ZAI_TEMPERATURE="0.7"
NEXTAUTH_URL="http://localhost:3001"
NEXTAUTH_SECRET=sua_chave_secreta_muito_segura_aqui
```

#### 1.7 Encerrar processos nas portas 3000 e 3001:
```bash
for p in 3000 3001; do
  if lsof -i:$p -t >/dev/null 2>&1; then kill -9 $(lsof -i:$p -t); fi
done
```

#### 1.8 Instalar dependências:
```bash
# Se existir package-lock.json → npm ci; senão npm install
npm ci
# Se falhar → npm install
```

#### 1.9 Prisma + DB SQLite:
```bash
npm run db:generate
npm run db:seed
# Se db:seed falhar → npx prisma db push e tentar novamente
```

#### 1.10 Iniciar projeto:
```bash
npm run dev
# Se 3000 ocupada → export PORT=3100 && npm run dev
```

---

## 🛠 PARTE 2: DESENVOLVIMENTO DO PROJETO

### 2.1 FLUXO DE TRABALHO OBRIGATÓRIO:
   a) Verifique o diretório atual (pwd)
   b) Verifique a estrutura do projeto 
   c) Leia os arquivos existentes antes de modificar
   d) Modifique apenas o que foi solicitado
   e) Confirme as alterações com o usuário

### 2.2 COMANDOS INICIAIS OBRIGATÓRIOS:
   Execute estes comandos antes de qualquer trabalho:
   - pwd
   - ls -la /home/z/my-project/
   - ls -la /home/z/my-project/src/app/

### 2.3 CONFIRMAÇÃO:
   - Após verificar a estrutura, confirme: "Estou trabalhando no diretório correto: /home/z/my-project/"
   - Liste os arquivos que serão modificados
   - Aguarde confirmação do usuário antes de prosseguir

### 2.4 REGRAS FUNDAMENTAIS:
   - MODIFIQUE apenas arquivos existentes
   - NUNCA crie novos arquivos a menos que explicitamente solicitado
   - Se um arquivo não existir, pergunte antes de criar
   - Use componentes shadcn/ui existentes em vez de criar do zero
   - Mantenha a funcionalidade original do projeto

---

## 🔎 VERIFICAÇÕES DE ACEITE

### Pós-Setup:
- [ ] Arquivos do Zanai estão na raiz (sem ./Zanai)
- [ ] .env e .z-ai-config criados/preenchidos
- [ ] Nada ouvindo em 3000/3001 antes do start
- [ ] App responde em http://localhost:${PORT:-3000}
- [ ] WS responde na 3001

### Pós-Desenvolvimento:
- [ ] Funcionalidades originais mantidas
- [ ] Melhorias aplicadas conforme solicitado
- [ ] Projeto rodando sem erros
- [ ] Modo silencioso respeitado

---

## 🧯 RECUPERAÇÃO AUTOMÁTICA

### Setup:
- Se npm ci falhar → tentar npm install
- Se db:seed falhar → npx prisma db push e tentar novamente db:seed
- Se 3000 ocupada → aumentar PORT em +100 (3100, 3200, …)
- Se clone direto falhar → usar fluxo temp + move

### Desenvolvimento:
- Se arquivo não existir → perguntar antes de criar
- Se funcionalidade for perdida → restaurar do Git
- Se componente não existir → usar alternativa shadcn/ui

---

## 📝 SAÍDA FINAL ESPERADA

### Resumo Humano (pós-setup):
"Zanai preparado na raiz: /home/z/my-project
- .env e .z-ai-config criados/atualizados.
- Portas livres. Iniciado em: http://localhost:3000 (WS: ws://localhost:3001).
- Comandos executados: npm ci, npm run db:generate, npm run db:seed, npm run dev."

### Resumo Humano (pós-desenvolvimento):
"✓ Arquivo: /caminho/do/arquivo.tsx
✓ Status: [MODIFICADO]
✓ Resumo: Descrição da alteração realizada"

---

## 💡 DICAS RÁPIDAS

### Para você (AI):
- Sempre comece verificando o diretório com pwd
- Use modo silencioso: mostre apenas status, não código completo
- Mantenha funcionalidades originais ao fazer melhorias
- Pergunte antes de criar novos arquivos

### Para o usuário:
- Use este prompt no início de cada sessão
- Se algo der errado, peça para verificar o setup
- Para melhorias específicas, seja claro sobre o que quer manter vs mudar

---

AGUARDE MINHAS INSTRUÇÕES ESPECÍFICAS APÓS ESTAS VERIFICAÇÕES.