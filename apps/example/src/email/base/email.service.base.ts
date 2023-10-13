/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Email, Order } from "@prisma/client";

export class EmailServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.EmailCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailCountArgs>
  ): Promise<number> {
    return this.prisma.email.count(args);
  }

  async findMany<T extends Prisma.EmailFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailFindManyArgs>
  ): Promise<Email[]> {
    return this.prisma.email.findMany(args);
  }
  async findOne<T extends Prisma.EmailFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailFindUniqueArgs>
  ): Promise<Email | null> {
    return this.prisma.email.findUnique(args);
  }
  async create<T extends Prisma.EmailCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailCreateArgs>
  ): Promise<Email> {
    return this.prisma.email.create<T>(args);
  }
  async update<T extends Prisma.EmailUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailUpdateArgs>
  ): Promise<Email> {
    return this.prisma.email.update<T>(args);
  }
  async delete<T extends Prisma.EmailDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.EmailDeleteArgs>
  ): Promise<Email> {
    return this.prisma.email.delete(args);
  }

  async findOrders(
    parentId: string,
    args: Prisma.OrderFindManyArgs
  ): Promise<Order[]> {
    return this.prisma.email
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .orders(args);
  }
}
