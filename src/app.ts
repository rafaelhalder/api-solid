import fastify from "fastify";
import { PrismaClient } from "generated/prisma/client";
export const app = fastify()
const prisma = new PrismaClient();
prisma.user.create({
  data:{
    name: 'John Doe',
    email:"rafa@teste.com"
  }
})