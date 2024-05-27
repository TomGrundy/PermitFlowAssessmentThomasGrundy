import { Server } from "http";
import app from "./app";
import { db } from "./db.config";

let appServer: Server | undefined;

db.then(async () => {
    appServer = await app.listen(3001, () => console.log('Server is listening on port 3001'));
});

export default appServer; 