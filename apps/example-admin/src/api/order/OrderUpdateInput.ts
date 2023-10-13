import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { EmailWhereUniqueInput } from "../email/EmailWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  discount?: number | null;
  product?: EmailWhereUniqueInput | null;
  quantity?: number | null;
  totalPrice?: number | null;
};
