// __mock__ folder should be in same directory as the file you want to mock


//import {vi} from "vitest"

/*
export const Prisma = {
  request: {
    create: vi.fn(),
    
  },
};
*/
//now we will let vitest on its own deep mock , it will on its own fig out all keys and mock them

import { PrismaClient } from "../generated/prisma/client.js";

import { mockDeep } from "vitest-mock-extended";


export const Prisma = mockDeep<PrismaClient>();