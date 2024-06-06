/*
  Warnings:

  - You are about to drop the column `OrderReadyAt` on the `Order` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Order" DROP COLUMN "OrderReadyAt",
ADD COLUMN     "orderReadyAt" TIMESTAMP(3);
