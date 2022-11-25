

import { getModelForClass, prop } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { type } from 'os';
import { Field, ID, Int, ObjectType } from 'type-graphql'
import { ICategory } from '../interfaces/ICategory';
import {IProduct} from '../interfaces/IProduct';

@ObjectType()
export class Category implements ICategory {
    // Manejando el ID por cuenta propia
    /*  @Field(type => ID)
    @prop()
    _id!: string; */
    @Field(type=>ID)
    readonly _id!: ObjectId;

    @Field(() => String)
    @prop()
    code!:string;
    
    @Field(() => String)
    @prop()
    name!:string;
    
    @Field(() => String)
    @prop()
    description!: string;;

}

const CategoryModel = getModelForClass(Category);
export default CategoryModel;