import mongoose from "mongoose";

export async function connect(){
    return mongoose.connect('mongodb://localhost:27017/learn_graphql')
}