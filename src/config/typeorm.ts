import { createConnection } from "typeorm";
import path from "path";

export async function connect(){
//TODO: Upadate the connection function
   const connection= await createConnection({
        type:'mongodb',
        host:'localhost',
        port:27017,
        database:'learn_graphql',
        entities:[path.join(__dirname, '../entity/**/**.ts')],
        synchronize:true,
        useUnifiedTopology: true
    });
    console.log('Database is connected');
    return connection;
}