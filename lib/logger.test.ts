import { describe, test, expect, vi, afterAll } from "vitest";
import chalk from "chalk";
import logger from "./logger";

const statuses = {
  success: {
    msg: "Status success",
    style: chalk.green.bold,
  },
  warn: {
    msg: "Status warn",
    style: chalk.yellow.bold,
  },
  error: {
    msg: "Status error",
    style: chalk.red.bold,
  },
};

describe("logger", () => {
  afterAll(() => {
    vi.restoreAllMocks();
  });

  test(`method 'success' logs in ${statuses.success.style(
    "bold green"
  )}`, () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => null);
    logger.success(statuses.success.msg);

    expect(logSpy).toHaveBeenCalledWith(
      statuses.success.style(statuses.success.msg)
    );
  });

  test(`method 'warn' logs in ${statuses.warn.style("bold yellow")}`, () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => null);
    logger.warn(statuses.warn.msg);

    expect(logSpy).toHaveBeenCalledWith(statuses.warn.style(statuses.warn.msg));
  });

  test(`method 'error' logs in ${statuses.error.style("bold red")}`, () => {
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => null);
    logger.error(statuses.error.msg);

    expect(logSpy).toHaveBeenCalledWith(
      statuses.error.style(statuses.error.msg)
    );
  });
});
