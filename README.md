# notes-challenge


# Notes Challenge

## Sobre o projeto
Esse projeto é um CRUD de anotações. Você pode criar, editar e remover anotações. O frontend foi feito com React, o backend com NestJS e o banco de dados é PostgreSQL. Tudo roda junto usando Docker.

## Como rodar
1. Instale o Docker Desktop e deixe ele aberto.
2. No terminal, dentro da pasta do projeto, rode:
	```powershell
	docker-compose up --build -d
	```
3. Isso vai subir três partes:
	- O frontend (React) em `http://localhost:3001`
	- O backend (NestJS) em `http://localhost:3000`
	- O banco de dados (PostgreSQL)

## Como usar
- Abra o navegador e acesse `http://localhost:3001` para usar o sistema de anotações.
- Se quiser ver os dados direto da API, acesse `http://localhost:3000/notes`.

## Banco de dados
- O banco é criado automaticamente pelo Docker, não precisa configurar nada.
- As anotações ficam salvas no banco `notes_db`.

## Dicas
- Se mudar algum código, reinicie o container para ver a alteração:
  ```powershell
  docker restart notes-challenge-frontend-1
  docker restart notes-challenge-backend-1
  ```
- Se der algum erro, confira se o Docker está rodando e se os containers estão ativos.

---

Qualquer dúvida, pode olhar os READMEs das pastas ou pedir ajuda!