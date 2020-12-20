import { gql } from '@apollo/client';

const getAllPost = gql`query getAllPost($page: Int, $limit: Int, $filter: Filter) {
  data:getAllPost (
    page: $page,
    limit: $limit,
    filter: $filter
  ) {
    info {
      count
      pages
      currentPage
      limit
    }
    result {
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
  }
}`;

export default getAllPost;