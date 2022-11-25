import { Resolver, Query, Mutation, Arg, Int, Field, InputType, FieldResolver, Root } from "type-graphql";
import { Product } from "../models/Product.model";
import ProductModel from "../models/Product.model";
import CategoryModel, { Category } from "../models/Category.model";

@InputType()
class ProductInput implements Partial<Product> {
    @Field()
    name!: string;
    @Field()
    sku!: string;
    @Field(() => Int)
    quantity!: number;
    @Field()
    categoryId!: string;
}

@Resolver(of => Product)
export class ProductResolver {
  @Query(() => String)
  hello() {
    return "Hello World!";
  }

  @Mutation(()=>Product)
  async createProduct(
    @Arg("options") options: ProductInput
  )
  {
    const product = new ProductModel({ ...options,_category:options.categoryId });
    return await product.save();
  }

  /* @Mutation(()=>Product)
  async createProduct(
    @Arg("options") options: ProductInput
  )
  {
    const product = await  Product.create({...options});
    return await product.save();
  } */

  @Query(() => [Product])
 async products() {
    const products =await ProductModel.find({});

    //console.log(products);

    return products;
  }

  @FieldResolver()
  async category(@Root('_doc') product: Product) {
    return await CategoryModel.findById(product._category);
  }
}