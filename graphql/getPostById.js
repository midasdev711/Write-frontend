import { gql } from '@apollo/client';

const getPostById = gql`query getPostById ($id: String!) {
  getPostById (id: $id) {
      title
      subtitle
      slug
      content
      tags
      metaRobots
      thumbnail
      status
      createdAt
  }
}`;

export default getPostById;