/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { CreateEmailArgs } from "./CreateEmailArgs";
import { UpdateEmailArgs } from "./UpdateEmailArgs";
import { DeleteEmailArgs } from "./DeleteEmailArgs";
import { EmailCountArgs } from "./EmailCountArgs";
import { EmailFindManyArgs } from "./EmailFindManyArgs";
import { EmailFindUniqueArgs } from "./EmailFindUniqueArgs";
import { Email } from "./Email";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { EmailService } from "../email.service";
@graphql.Resolver(() => Email)
export class EmailResolverBase {
  constructor(protected readonly service: EmailService) {}

  async _emailsMeta(
    @graphql.Args() args: EmailCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Email])
  async emails(@graphql.Args() args: EmailFindManyArgs): Promise<Email[]> {
    return this.service.findMany(args);
  }

  @graphql.Query(() => Email, { nullable: true })
  async email(
    @graphql.Args() args: EmailFindUniqueArgs
  ): Promise<Email | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Email)
  async createEmail(@graphql.Args() args: CreateEmailArgs): Promise<Email> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Email)
  async updateEmail(
    @graphql.Args() args: UpdateEmailArgs
  ): Promise<Email | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Email)
  async deleteEmail(
    @graphql.Args() args: DeleteEmailArgs
  ): Promise<Email | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async resolveFieldOrders(
    @graphql.Parent() parent: Email,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
