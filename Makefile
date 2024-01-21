build:
    docker compose -f local.yml up --build -d --remove orphans

up:
    docker compose -f local.yml up -d

down:
    docker compose -f local.yml down

down-v:
    docker compose -f local.yml down -v

logs:
    docker compose -f local.yml logs

logs-api:
    docker compose -f local.yml logs api

show-logs-client:
    docker compose -f local.yml logs client

user:
    docker run --rm mern-voice-api whoami

volume:
    docker volume inspect mern-voice_mongodb-data