# graphql-starter

## Quick Start

1. Clone this repository:

```bash
$ https://github.com/sgilliam15/graphql-starter.git
```

2. Build postgresqldb and prisma containers. You can build your docker images using the command

```bash
$ yarn docker:build
```

The images created by the build will be tagged with the name and version of your project as specified in the package.json.

3. In `./prisma/schema.prisma` define the desired schema as a Prisma data model. The defualt schema has only a User model.

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

### Commits

This Repo utitilzes the [Conventional Commits Specification](https://www.conventionalcommits.org/en/v1.0.0/)
The commit message should be structured as follows:

```bash
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```
*Examples*
Examples
Commit message with description and breaking change footer

```bash
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```
Commit message with ! to draw attention to breaking change

```bash
refactor!: drop support for Node 6
```

Commit message with both ! and BREAKING CHANGE footer

```bash
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```
Commit message with no body

`docs: correct spelling of CHANGELOG`

Commit message with scope

`feat(lang): add polish language`

Commit message with multi-paragraph body and multiple footers

```bash
fix: correct minor typos in code

see the issue for details

on typos fixed.

Reviewed-by: Z
Refs #133
```

**Specifications**
The commit contains the following structural elements, to communicate intent to the consumers of your library:

*Types* (<type>)
`fix:` - a commit of the type fix patches a bug in your codebase (this correlates with PATCH in semantic versioning).
`feat:` - a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in semantic versioning).
`BREAKING CHANGE:` a commit that has a footer `BREAKING CHANGE:`, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in semantic versioning). A BREAKING CHANGE can be part of commits of any type.

Types other than `fix:` and `feat:` are allowed, for example @commitlint/config-conventional (based on the the Angular convention) recommends `build:`, `chore:`, `ci:`, `docs:`, `style:`, `refactor:`, `perf:`, `test:`, and others.
footers other than `BREAKING CHANGE: <description>` may be provided and follow a convention similar to git trailer format.

Additional types are not mandated by the Conventional Commits specification, and have no implicit effect in semantic versioning (unless they include a `BREAKING CHANGE`).

*Scope*
A scope may be provided to a commit’s type, to provide additional contextual information and is contained within parenthesis, e.g., `feat(parser): add ability to parse arrays`.
