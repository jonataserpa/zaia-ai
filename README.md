## Painel

![Painel](https://cdn.discordapp.com/attachments/1083115321935798314/1172478129172905984/painel.png?ex=65607659&is=654e0159&hm=b30b38d7d34db1303e9f4a058cf04a31f910ec5988f313fbab6bdbf36931a03d&)

## Mobile

![Mobile](https://cdn.discordapp.com/attachments/1083115321935798314/1172271386786545695/painel-phone.png?ex=655fb5ce&is=654d40ce&hm=5c5eda063c7e5a0ed825024de4eb0fb015693e254cf66be28932161b22ac1173&)

## Cypress - test e2e

![test](https://cdn.discordapp.com/attachments/1083115321935798314/1185256949596565554/image.png?ex=658ef38d&is=657c7e8d&hm=dccc17f571e6ba586475d9d13e47939e38ca1696b8cfb64b6b9a089b5f627e5b&)

## Description

Frontend projeto: Chat AI
- Front: React.js v.18
- Framework: Next.js v.14
- UI: radix-ui
- Icons: lucide-react
- CSS: tailwind - Responsible (Mobile)
- Validation: useForm e zod
- Gerenciamento de estado: zustand
- Test-unitario: Jest 
- Test e2e: Cypress
- Mock: Json-server
- Docker e docker-compose

## Installation

```bash
$ npm install
```

## Running the app

```bash
# exec json-server
$ npm run mock

# dev
$ npm run dev

# test
$ npm test

# se desejar usar uma imagem docker: 
# docker-compose permissao
$ npm sudo chmod +x .docker/entrypoint.sh

# docker-compose up
$ sudo docker-compose up

```

## Example production on Vercel

- Link: [https://next14-defense.vercel.app/](https://next14-defense.vercel.app/)
