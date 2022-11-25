import "reflect-metadata";
import { startServer } from "./app";
import { connect } from "./config/mongoose";

const PORT=process.env.PORT || 3000;

async function main() {
    await connect();
    const app =await startServer();
    app.listen(PORT);
    console.log(`http://localhost:${PORT}/graphql`);
}
main();