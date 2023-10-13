import { CustomerCreateNestedManyWithoutUsersInput } from "./CustomerCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  address_1?: string | null;
  address_2?: string | null;
  city?: string | null;
  customers?: CustomerCreateNestedManyWithoutUsersInput;
  state?: string | null;
  zip?: number | null;
};
