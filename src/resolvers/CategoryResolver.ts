import { Resolver, Query, Mutation, Arg, Int, Field, InputType, FieldResolver, Root } from "type-graphql";
import { Category } from "../models/Category.model";
import CategoryModel from "../models/Category.model";

@InputType()
class CategoryInput implements Partial<Category> {
    @Field()
    name!: string;
    @Field()
    code!: string;
    @Field(() => String)
    description!: string;
}

@Resolver(of => Category)
export class CategoryResolver {
  @Query(() => String)
  hello() {
    return "Hello World!";
  }

  @Mutation(()=>Category)
  async createCategory(
    @Arg("options") options: CategoryInput
  )
  {
    const category = new CategoryModel({ ...options });
    return await category.save();
  }

  /* @Mutation(()=>Product)
  async createProduct(
    @Arg("options") options: ProductInput
  )
  {
    const product = await  Product.create({...options});
    return await product.save();
  } */

  @Query(() => [Category])
 async categories() {
    const categories =await CategoryModel.find();

    return categories;
  }

 
}