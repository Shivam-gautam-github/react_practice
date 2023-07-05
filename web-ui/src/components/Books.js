import { useQuery } from '@apollo/client';
import Book from './Book';
import { BOOKS_QUERY } from '../graphql';

function Books() {
  const { data, loading, error } = useQuery(BOOKS_QUERY);

  if (error) {
    console.error('Books Query Error ::::: ', error);
  }
  return (
    <div>
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Show Loading */}
          {loading && (
            <tr>
              <td>Loading...</td>
            </tr>
          )}

          {/* Display Error */}
          {error && (
            <tr>
              <td>Books Query Error (Check console)</td>
            </tr>
          )}

          {/* Show Data */}
          {!loading &&
            !error &&
            data?.books.map((book) => <Book book={book} key={book.id} />)}
        </tbody>
      </table>
    </div>
  );
}

export default Books;
