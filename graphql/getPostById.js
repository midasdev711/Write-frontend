import { gql } from '@apollo/client';

const getPostById = gql`query getPostById($id: ID!){
  post:getPostById (id: $id) {
    _id
    title
    subtitle
    slug
    content
    tags
    metaRobots
    thumbnail
    status
  }
}`;

export default getPostById;