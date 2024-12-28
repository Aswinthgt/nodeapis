import App from "./app";
import Logger from "./utils/logger";

class Server extends App {
    constructor() {
        super();
    }

    public start(port: number = 3000) {
        this.app.listen(port, () => {
            Logger.success(`Server is running on port ${port}`);
        });
    }
    
    public stop() {
        process.exit(1);
    }

}

new Server().start(3000);
