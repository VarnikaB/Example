import { OrderCreateNestedManyWithoutEmailsInput } from "./OrderCreateNestedManyWithoutEmailsInput";

export type EmailCreateInput = {
  description?: string | null;
  itemPrice?: number | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutEmailsInput;
};
