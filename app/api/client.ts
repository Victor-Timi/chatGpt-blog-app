import { PrismaClient } from "@prisma/client";

let prismaInit: PrismaClient;

if (process.env.Node_ENV === "production") {
  prismaInit = new PrismaClient();
} else {
  if (!(global as any).prisma) {
    (global as any).prisma = new PrismaClient();
  }
  prismaInit = (global as any).prisma;
}

export const prisma = prismaInit;
