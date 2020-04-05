# node-graphql-starter

## Quick Start

### Setup

```bash
$ yarn install
```

or you can use Docker...

### 🐳 Docker

You can build your docker images using the command

```bash
$ yarn docker:build
```

The images created by the build will be tagged with the name and version of your project as specified in the package.json. You can run the image using docker directly or you can run it as an `yarn script`.

```bash
$ yarn docker:run
```

If you need to modify the way your image is built, runned or published, you can edit the `docker:*` scripts
located in the package.json.

Notice that the `Dockerfile` takes advantage of the `layers cache`, if you modify the code in the `src` folder it won't run `yarn install`, it will only build the typescript code. If you change the `package.json` it will install deps and then build.

### Develop and Run

Write your program using `src/index.ts` as the entry point, and run it.

```bash
$ yarn start
```
