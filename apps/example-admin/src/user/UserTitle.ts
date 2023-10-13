import { User as TUser } from "../api/user/User";

export const USER_TITLE_FIELD = "address_1";

export const UserTitle = (record: TUser): string => {
  return record.address_1?.toString() || String(record.id);
};
