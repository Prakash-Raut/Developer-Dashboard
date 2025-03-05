import { app } from "./app";
import { Config } from "./config/env";
import { logger } from "./config/logger";

const startServer = async () => {
	try {
		const PORT = Config.PORT;
		app.listen(PORT, () => {
			logger.info("Server is running on port", { port: PORT });
		});
	} catch (error) {
		logger.error("Error starting server", { error });
		process.exit(1);
	}
};

void startServer();
