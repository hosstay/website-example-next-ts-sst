import { pgTable, text, timestamp, integer, unique, index } from "drizzle-orm/pg-core";
// @ts-ignore
import cuid from "cuid";

export const todo = pgTable("todo", {
  id: text("id").primaryKey().$defaultFn(() => cuid()),
  title: text("title").notNull(),
  description: text("description"),
});

export const post = pgTable("post", {
  id: text("id").primaryKey().$defaultFn(() => cuid()),
  name: text("name").notNull(),
  createdAt: timestamp('createdAt').defaultNow(),
  updatedAt: timestamp('updatedAt'),
  createdById: text("createdBy").references(() => user.id),
}, (t) => {
  return {
    nameIdx: index("nameIdx").on(t.name),
  };
});

// Necessary for Next auth
export const account  = pgTable("account", {
  id: text("id").primaryKey().$defaultFn(() => cuid()),
  userId: text("userId").notNull().references(() => user.id, { onDelete: 'cascade' }),
  type: text("type").notNull(),
  provider: text("provider").notNull(),
  providerAccountId: text("providerAccountId").notNull(),
  refresh_token: text("refresh_token"),
  access_token: text("access_token"),
  expires_at: integer("expires_at"),
  token_type: text("token_type"),
  scope: text("scope"),
  id_token: text("id_token"),
  session_state: text("session_state"),
  refresh_token_expires_in: integer("refresh_token_expires_in"),
}, (t) => ({
  unq: unique().on(t.provider, t.providerAccountId),
}));


export const session  = pgTable("session", {
  id: text("id").primaryKey().$defaultFn(() => cuid()),
  sessionToken: text("sessionToken").notNull().unique(),
  userId: text("userId").notNull().references(() => user.id, { onDelete: 'cascade' }),
  expires: timestamp("expires").notNull(),
});

export const user  = pgTable("user", {
  id: text("id").primaryKey().$defaultFn(() => cuid()),
  name: text("name"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified"),
  image: text("image"),
});

export const verificationToken  = pgTable("verification_token", {
  identifier: text("identifier"),
  token: text("token").unique(),
  expires: timestamp("expires"),
}, (t) => ({
  unq: unique().on(t.identifier, t.token),
}));
