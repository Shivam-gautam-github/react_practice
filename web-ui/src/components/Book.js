import { useState } from 'react';
import { useMutation } from '@apollo/client';
import {
  DELETE_BOOK_MUTATION,
  BOOKS_QUERY,
  EDIT_BOOK_MUTATION,
} from '../graphql';

function Book({ book }) {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(book.title);
  const [year, setYear] = useState(book.year);

  const [deleteMutation] = useMutation(DELETE_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });
  const [editMutation] = useMutation(EDIT_BOOK_MUTATION, {
    refetchQueries: [{ query: BOOKS_QUERY }],
  });

  const deleteBook = () => {
    deleteMutation({
      variables: {
        id: book.id,
      },
    });
  };

  const discardChanges = (e) => {
    setIsEditing(false);
    setTitle(book.title);
    setYear(book.year);
  };

  const saveChanges = (e) => {
    e.preventDefault();

    editMutation({
      variables: {
        id: book.id,
        title,
        year: +year,
      },
    });
    setIsEditing(false);
  };

  return (
    <tr>
      <td>
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          book.title
        )}
      </td>
      <td>
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        ) : (
          book.year
        )}
      </td>
      <td>
        {isEditing ? (
          <>
            <button className="btn btn-success mr-2" onClick={saveChanges}>
              Save
            </button>
            <button className="btn btn-danger mr-2" onClick={discardChanges}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              className="btn btn-info mr-2"
              onClick={() => setIsEditing(true)}
            >
              Edit
            </button>
            <button className="btn btn-danger" onClick={deleteBook}>
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  );
}

export default Book;
