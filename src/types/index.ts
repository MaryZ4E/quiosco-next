import { Order, OrderProducts, Product } from "@prisma/client";

export type OrderItem = Pick<Product, "id" | "name" | "price"> & {
  quantity: number;
  subtotal: number;
};

export type OrderWithProducts = Order & {
  orderProducts: (OrderProducts & {
    quantity: number; // Añadir esta línea si no está en el modelo original
    product: Product;
  })[];
};
