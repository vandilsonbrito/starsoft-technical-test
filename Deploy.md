# **DEPLOY.md**

## Instruções para Deploy da Aplicação

Este documento explica como fazer deploy da aplicação utilizando o CLI da Vercel.
Para Deploy com GitHub [acesse](https://blog.formacao.dev/como-fazer-o-deploy-de-uma-aplicacao-no-site-da-vercel/).

---

### **Pré-requisitos**

1. Tenha uma conta na [Vercel](https://vercel.com/).


---

### **Usando o Vercel CLI**

#### Passo a Passo

1. **Instale o Vercel CLI** globalmente no seu sistema:
   ```bash
   npm install -g vercel
   ```

2. **Autentique-se na Vercel CLI**:
    
   ```bash
    vercel login
     ```
    

No terminal, navegue até o diretório do projeto e execute o comando para iniciar o deploy:
 
      vercel

Para deploy em produção:
 
      vercel --prod
 

--- 
Siga as instruções exibidas no terminal:
A Vercel CLI solicitará que você escolha uma conta e um projeto (ou crie um novo).
Responda yes quando perguntado se deseja associar o diretório ao projeto.

Após o processo de deploy, a Vercel fornecerá uma URL pública para a aplicação, onde ela estará acessível, ex: `https://nome-do-projeto.vercel.app`.