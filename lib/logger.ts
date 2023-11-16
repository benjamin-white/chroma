import chalk from "chalk";

const logger = {
  success: (message: string) => console.log(chalk.green.bold(message)),
  warn: (message: string) => console.log(chalk.yellow.bold(message)),
  error: (message: string) => console.log(chalk.red.bold(message)),
};

export default logger;
