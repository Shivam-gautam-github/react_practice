import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { BOOKS_QUERY, CREATE_BOOK_MUTATION } from '../graphql';

function CreateBook() {
  const [createMutation] = useMutation(CREATE_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !year) return;

    //call create mutation
    createMutation({
      variables: { title, year: +year },
    });

    alert(`Book ${title} (${year}) created!`);
    setTitle('');
    setYear('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          title="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="form-control"
        />
      </div>

      <div className="form-group">
        <label htmlFor="year">Year</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          title="year"
          className="form-control"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Create
      </button>
    </form>
  );
}

export default CreateBook;
