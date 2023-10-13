import { SortOrder } from "../../util/SortOrder";

export type EmailOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  itemPrice?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
