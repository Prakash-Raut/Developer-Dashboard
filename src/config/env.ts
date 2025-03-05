import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

const { PORT, NODE_ENV } = process.env;

export const Config = {
	PORT,
	NODE_ENV,
};
