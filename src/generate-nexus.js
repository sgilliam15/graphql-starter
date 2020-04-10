const {
  makeSchema,
  queryType,
  mutationType,
  objectType,
} = require("@nexus/schema");
const { nexusPrismaPlugin } = require("nexus-prisma");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// https://github.com/graphql-nexus/nexus-schema-plugin-prisma/issues/339
const allTheThings = (obj) => {
  for (const method in obj) {
    if (typeof obj[method] === "function") {
      obj[method]();
    }
  }
};

// extract all models from prisma dmmf
const parentTypes = () => {
  const models = prisma.dmmf.mappings.map((e) => e.model);
  return models.map((name) =>
    objectType({
      name,
      definition(t) {
        allTheThings(t.model);
      },
    })
  );
};

export const schema = makeSchema({
  // Where to export the data
  outputs: {
    schema: __dirname + "/generated/nexus.graphql",
    typegen: __dirname + "/generated/nexus.ts",
  },
  // all the types to expose
  types: [
    queryType({
      definition(t) {
        allTheThings(t.crud);
      },
    }),
    mutationType({
      definition(t) {
        allTheThings(t.crud);
      },
    }),
    ...parentTypes(),
  ],
  // just few stuff to make this workaround work
  typegenAutoConfig: {
    contextType: "{ prisma: PrismaClient.PrismaClient }",
    sources: [{ source: "@prisma/client", alias: "PrismaClient" }],
  },
  plugins: [nexusPrismaPlugin()],
});
