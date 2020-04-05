import * as os from 'os';

const initialize = () => {
  console.info(
    `Running on ${os.hostname()} with ${
      os.cpus().length
    } CPU's and ${os.totalmem()} mem`,
  );
};

initialize();
