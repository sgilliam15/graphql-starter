# node-graphql-starter

## Quick Start

### Setup

1. Build postgresqldb and prisma containers. You can build your docker images using the command

```bash
$ yarn docker:build
```

The images created by the build will be tagged with the name and version of your project as specified in the package.json.

2. In `./prisma/schema.prisma` define the desired schema as a Prisma data model. The defualt schema has only a User model.

```prisma
model User {
  id      Int     @default(autoincrement()) @id
  name    String?
  email   String  @unique
  isAdmin Boolean @default(false)
}
```

### Development with Docker 🐳

You can run the image using docker directly or you can run it as an `yarn script`.

```bash
$ yarn docker:run
```

If you need to modify the way your image is built, runned or published, you can edit the `docker:*` scripts
located in the package.json.

Notice that the `Dockerfile` takes advantage of the `layers cache`, if you modify the code in the `src` folder it won't run `yarn install`, it will only build the typescript code. If you change the `package.json` it will install deps and then build.

### Database

The Postgres database can be accessed in a Docker service called `db` by using [docker-compose commands](https://docs.docker.com/compose/compose-file/). We are using the postgres:12 image from [hub.docker.com](https://hum.docker.com) . and the Docker container is named `postgresql_db`.

The service connects port 5432 inside Docker as port 54320 on the host machine. It uses a volume named "postgresql_db" for storing the database data. Even if the container and image are deleted, the volume will remain unless explicitly deleted using `$ docker volume rm <name of volume>`

### See the logs

`$ docker logs -f postgres_db`

### Try running psql

`$ docker exec -it postgresql_db psql -U postgres`

\*hit CTRL+D to exit

### Create a database

`$ docker exec -it postgresql_db psql -U postgres -c "create database <my_database>"`

## Develop and Run

Write your program using `src/index.ts` as the entry point, and run it.

```bash
$ yarn start
```
