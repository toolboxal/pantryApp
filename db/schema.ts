import { int, sqliteTable, text, real } from 'drizzle-orm/sqlite-core'

export const pantryItems = sqliteTable('pantry_items', {
  id: int().primaryKey({ autoIncrement: true }),
  name: text('name').notNull(),
  dateBought: text('date_bought').notNull(),
  dateExpiry: text('date_expiry').notNull(),
  cost: real('cost').notNull().default(0),
  category: text('category').notNull(),
  photoUri: text('photo_uri').default(''),
  consumed: int('consumed', { mode: 'boolean' }).default(false),
})
