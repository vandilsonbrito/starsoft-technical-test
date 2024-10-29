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

--- 
Siga as instruções exibidas no terminal:
A Vercel CLI solicitará que você escolha uma conta e um projeto (ou crie um novo).
Responda yes quando perguntado se deseja associar o diretório ao projeto.
---
Com o projeto criado, vá até o site da Vercel, em *Projects* clique no projeto atual e depois em *Settings*, após isso, no menu do lado esquerdo clique em *Environment Variables*, na seção *Create New*, em *Key* coloque `NEXT_PUBLIC_API_URL` e em *Value* coloque `https://starsoft-challenge-7dfd4a56a575.herokuapp.com`. Após isso, clique em *Save* e continue o processo...

Para deploy em produção:
 
      vercel --prod
 

--- 
Após o processo de deploy, a Vercel fornecerá uma URL pública para a aplicação, onde ela estará acessível, ex: `https://nome-do-projeto.vercel.app`.
