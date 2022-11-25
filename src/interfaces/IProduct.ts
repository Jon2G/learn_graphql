import { Category } from "../models/Category.model";

export interface IProduct {
    sku: string;
    name: string;
    quantity: number;
    createdAt: string;

    category: Category;
}