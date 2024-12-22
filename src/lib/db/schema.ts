
import { pgTable, serial, text, varchar, timestamp, integer, pgEnum } from 'drizzle-orm/pg-core'

export const userSystem = pgEnum('user_system_enum', ['system', 'user'])


export const chats = pgTable('chats', {
    id: serial('id').primaryKey(),
    pdfname: text('pdfname').notNull(),
    pdfUrl: text('pdf_url').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    UserId: varchar('user_id', { length: 256 }).notNull(),
    fileKey: text('file_key').notNull(),

})

export const messages = pgTable('messages', {
    id: serial('id').primaryKey(),
    chatId: integer('chat_id').references(() => chats.id).notNull(),
    content: text('content').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    role: userSystem('role').notNull(),

})


