import "reflect-metadata";
import { startServer } from "./app";
const PORT=process.env.PORT || 3000;

async function main(){
    const app =await startServer();
    app.listen(PORT);
    console.log(`http://localhost:${PORT}/graphql`);
}
main();