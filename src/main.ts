import { createLogger } from "./util/logger.ts";
import { VERSION } from "../etc/version.ts";

const log = createLogger();

log.info(`Hello template program! Current version: ${VERSION}.`);
