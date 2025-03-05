import { app } from "./app";
import { Config } from "./config/env";

const startServer = async () => {
	try {
		const PORT = Config.PORT;
		app.listen(PORT, () => {
			console.log(`Server is running on port ${PORT}`);
		});
	} catch (error) {
		console.error(error);
		process.exit(1);
	}
};

void startServer();
