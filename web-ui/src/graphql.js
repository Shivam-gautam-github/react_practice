import { gql } from '@apollo/client';

export const CREATE_BOOK_MUTATION = gql`
  mutation Mutation($title: String, $year: Int) {
    create(title: $title, year: $year) {
      id
      id
      title
      year
    }
  }
`;

export const BOOKS_QUERY = gql`
  query Query {
    books {
      id
      year
      title
    }
  }
`;

export const DELETE_BOOK_MUTATION = gql`
  mutation Mutation($id: ID) {
    delete(id: $id)
  }
`;

export const EDIT_BOOK_MUTATION = gql`
  mutation Mutation($id: ID, $year: Int, $title: String) {
    edit(id: $id, year: $year, title: $title) {
      title
      id
      year
    }
  }
`;
