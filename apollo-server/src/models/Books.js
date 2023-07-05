import mongoose from 'mongoose';

export const Book = mongoose.model('Book', {
  title: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});
