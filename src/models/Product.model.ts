import { getModelForClass, prop, Ref } from '@typegoose/typegoose';
import { ObjectId } from 'mongoose';
import { Field, ID, Int, ObjectType } from 'type-graphql'
import { Category } from './Category.model';
import {IProduct} from '../interfaces/IProduct';

@ObjectType()
export class Product implements IProduct {
    // Manejando el ID por cuenta propia
    /*  @Field(type => ID)
    @prop()
    _id!: string; */
    @Field(type=>ID)
    readonly _id!: ObjectId

    @Field(() => String)
    @prop()
    sku!:string;
    
    @Field(() => String)
    @prop()
    name!:string;
    
    @Field(() => Int)
    @prop()
    quantity!:number;

    @Field()
    @prop()
    createdAt!:string;

    @Field(type => Category)
    category!: Category;

    @prop({ ref: () => Category })
    _category!: Ref<Category>;
    // set _category(value: Ref<Category>) {
    //     this.category = value as any;
    // }
    // get _category(): Ref<Category> {
    //     return this.category as any;
    // }
    //_category!: Ref<Category>;
}

const ProductModel = getModelForClass(Product);
export default ProductModel;