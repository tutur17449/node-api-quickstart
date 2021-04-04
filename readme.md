# Node API quickstart

API starter kit with Node.js, Express, MongoDB, Docker & Swagger

## Folder structure

- `/public` : express static folder
- `/src/controllers` : controllers
- `/src/database` : database connection and seeder
- `/src/docs` : swagger configuration files
- `/src/helpers` : helper functions
- `/src/lib` : somes packages global configuration : cors, passport, swagger
- `/src/mandatories` : configuration files who validate body data
- `/src/models` : mongo models
- `/src/routes` : api routes

## Start

```bash
# Create .env file
cp .env.example .env

docker-compose up -d --build
```

## ToDo

- [ ] continue swagger
- [ ] add refresh token
