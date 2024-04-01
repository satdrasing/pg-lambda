import { query } from "./run.query.mjs";
import log4js from "log4js";
const logger = log4js.getLogger("app");
logger.level = "debug";

export const lambdaHandler = async (event, context) => {
  logger.debug("event " + JSON.stringify(event));
  logger.debug("Some debug messages");
  logger.info("Some info messages");
  const { rows } = await query("select * from pg_tables");
  logger.log(JSON.stringify(rows[0]));

  const response = {
    statusCode: 200,
    body: {
      message: rows[0],
    },
  };

  return response;
};
