import { gql } from '@apollo/client';

export const NAV_QUERY = gql`
  query {
    navs {
      handle
      tree {
        page {
          id
          title
          url
        }
      }
    }
  }
`;