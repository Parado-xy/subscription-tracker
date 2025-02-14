import { config } from "dotenv";

config({
  // eslint-disable-next-line no-undef
  path: `./config/.env.${process.env.NODE_ENV || "development"}.local`,
});

// eslint-disable-next-line no-undef
export const { PORT, DB_URI, NODE_ENV } = process.env;