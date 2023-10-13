import { OrderUpdateManyWithoutEmailsInput } from "./OrderUpdateManyWithoutEmailsInput";

export type EmailUpdateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutEmailsInput;
};
