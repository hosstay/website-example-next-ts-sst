import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { post } from "../../schema.sql";

type PostTableSelect = InferSelectModel<typeof post>;
type PostTableInsert = InferInsertModel<typeof post>;
type PostTableUpdate = InferInsertModel<typeof post>;

export type PostRecord = PostTableSelect;
export type PostRecordCreate = Omit<PostTableInsert, "id">;
export type PostRecordCreateManualId = PostTableInsert;
export type PostRecordUpdate = PostTableUpdate;
