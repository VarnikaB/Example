import { Email as TEmail } from "../api/email/Email";

export const EMAIL_TITLE_FIELD = "name";

export const EmailTitle = (record: TEmail): string => {
  return record.name?.toString() || String(record.id);
};
