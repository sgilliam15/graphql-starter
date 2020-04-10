import * as os from "os";
import { ApolloServer } from "apollo-server";
import { schema } from "./generate-nexus";
import { createContext } from "./context";

new ApolloServer({ schema, context: createContext }).listen(
  { port: 4000 },
  () => {
    console.info(
      `Running on ${os.hostname()} with ${
        os.cpus().length
      } CPU's and ${os.totalmem()} mem`
    );
    console.info("🚀 Server ready at: http://localhost:4000\n⭐️");
  }
);
