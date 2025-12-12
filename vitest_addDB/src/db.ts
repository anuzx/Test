import { PrismaClient } from "./generated/prisma/client.js";

//we did not wrote this code in index.ts because we will be mocking out this request 
export const Prisma = new PrismaClient()