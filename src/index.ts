import * as os from "os";
import { PrismaClient } from "@prisma/client";

const initialize = () => {
  console.info(
    `Running on ${os.hostname()} with ${
      os.cpus().length
    } CPU's and ${os.totalmem()} mem`
  );
};

initialize();
const prisma = new PrismaClient();

async function main() {
  // ... you will write your Prisma Client queries here
  const allUsers = await prisma.user.findMany();
  console.log(allUsers);
}

main()
  .catch((e) => {
    throw e;
  })
  .finally(async () => {
    await prisma.disconnect();
  });
