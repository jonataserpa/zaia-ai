## Login

![Login](https://cdn.discordapp.com/attachments/1083115321935798314/1191833456020303972/image.png?ex=65f9eee7&is=65e779e7&hm=1a2ec564f3e0796be45f98b9362e810cea490e03f6d97573293dced650075a92&)

## Dashboard

![Dashboard](https://cdn.discordapp.com/attachments/1083115321935798314/1191823481407537312/image.png?ex=65f9e59c&is=65e7709c&hm=7d26831cc541932dc57e390414ec392e39c8497c535ee9fb57ef515d440fa9bb&)

## Chat

![Chat](https://cdn.discordapp.com/attachments/1083115321935798314/1191825074131579000/image.png?ex=65f9e718&is=65e77218&hm=236e30b4ae76963e89fa941a04fc11f9ec6621b811319c1004e3c42d4b0b0071&)

## Vídeo

![Video](https://cdn.discordapp.com/attachments/1083115321935798314/1191822205496070317/image.png?ex=65f9e46c&is=65e76f6c&hm=f1b8567ed3eb3b1207e9e5ec0f4f50ad418b7298892cbde68502f138a028ac57&)

## Histórico da chat e video

![History](https://cdn.discordapp.com/attachments/1083115321935798314/1191825211893497936/image.png?ex=65f9e739&is=65e77239&hm=85b390c3faa727d39277b555c08b6b68ef6c542f8edb42ad53a1784e33649fb5&)

## Mobile

![Mobile](https://cdn.discordapp.com/attachments/1083115321935798314/1189614452933414932/image.png?ex=65fb16cb&is=65e8a1cb&hm=d17b33d3f607a3166e2aa279f2464c6655336b61f77955d91834b95d7f95143d&)

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
- LLM :
    - openai: 
        - chat:
            - modelo: gpt-3.5-turbo
    - replicate
        - video:
            - modelo: anotherjesse/zeroscope-v2-xl

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
