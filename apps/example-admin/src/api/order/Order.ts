import { Customer } from "../customer/Customer";
import { Email } from "../email/Email";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  discount: number | null;
  id: string;
  product?: Email | null;
  quantity: number | null;
  totalPrice: number | null;
  updatedAt: Date;
};
