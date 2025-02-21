import { int, sqliteTable, text } from 'drizzle-orm/sqlite-core'

export const pantryItems = sqliteTable('pantry_items', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  age: int().notNull(),
  email: text().notNull().unique(),
})
