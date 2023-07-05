import { Book } from './models/Books.js';

export const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name}`,
    books: async () => await Book.find({}),
  },
  Mutation: {
    create: async (_, { title, year }) => {
      const newBook = new Book({ title, year });
      await newBook.save();
      return newBook;
    },
    delete: async (_, { id }) => {
      const res = await Book.deleteOne({ _id: id });
      if (res.acknowledged && res.deletedCount === 1) return id;
      return null;
    },
    edit: async (_, { id, title, year }) => {
      const res = await Book.updateOne({ _id: id }, { $set: { title, year } });

      if (res.acknowledged && res.modifiedCount === 1)
        return await Book.findOne({ _id: id });
      return null;
    },
  },
};
