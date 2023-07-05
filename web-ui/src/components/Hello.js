import { gql, useQuery } from '@apollo/client';

const HELLO_QUERY = gql`
  # Without Arguments
  #   query Query {
  #     hello
  #   }

  # With Arguments
  query Query($name: String) {
    hello(name: $name)
  }
`;

function Hello() {
  const { data, loading, error } = useQuery(HELLO_QUERY, {
    variables: { name: 'World' },
  });

  if (loading) return <div>loading...</div>;

  if (error) {
    console.error('HELLO_QUERY error :::::: ', error);
    return <div>Error Occurred (check console)</div>;
  }

  return <div>{data?.hello}</div>;
}

export default Hello;
