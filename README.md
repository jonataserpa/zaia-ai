## Login

![Login](https://cdn.discordapp.com/attachments/1083115321935798314/1191833456020303972/image.png?ex=65a6e067&is=65946b67&hm=d200a3e400cf90a81882564a8786422e008288647da2076c2465b4ceb576a340&)

## Dashboard

![Dashboard](https://cdn.discordapp.com/attachments/1083115321935798314/1191823481407537312/image.png?ex=65a6d71c&is=6594621c&hm=5ae8d96a9454e7c3d241b1ebbb3153be947cd1831276432949f98bdb3aba6170&)

## Chat

![Chat](https://cdn.discordapp.com/attachments/1083115321935798314/1191825074131579000/image.png?ex=65a6d898&is=65946398&hm=0b8bdcbda3ea200e479a0f78679b267e65dce1f3b4eed5bc09620d3b847d7920&)

## Vídeo

![Video](https://cdn.discordapp.com/attachments/1083115321935798314/1191822205496070317/image.png?ex=65a6d5ec&is=659460ec&hm=44bb59ff48e0db95773e8bafd8eaeb52575857c7cbd57b0579bffb1978b9db4a&)

## Histórico da chat e video

![History](https://cdn.discordapp.com/attachments/1083115321935798314/1191825211893497936/image.png?ex=65a6d8b9&is=659463b9&hm=68fcc81f9e8507cc0ae75660b32b93fd532b4a53edc11339e7c8cd6e61c95297&)

## Mobile

![Mobile](https://cdn.discordapp.com/attachments/1083115321935798314/1189614452933414932/image.png?ex=659ecdcb&is=658c58cb&hm=3993f285de8f870230e2087968c2fa4f93628832b946fcb9e1296575ac9e58fd&)

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
- Docker e docker-compose

Backend:
- Project API create with Node.js:
- Framework: Nest.js,
- ORM: Prisma
- Bd: Mysql
- Test unit - (Jest)
- Desgin patterns
    - Mapper
    - Factory
    - DTO
- Documentation - Swagger API
- Software architecture:

    - Ports & Adapters (Hexagonal Architecture)
        - Application
            - Use cases
    - Infra
        - Http - (Controllers)
        - Database - (Orm - Prisma)
        - Dtos - (Validators)
        - Messaging - (Kafka)
        - AI
    - Helpers
    - Solid

    Repositório: https://github.com/jonataserpa/backend-thewayschool

## Installation

```bash
$ npm install
```

## Running the app

```bash

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

- Link: [https://zaia-ai-jonataserpa.vercel.app/](https://zaia-ai-jonataserpa.vercel.app/)
