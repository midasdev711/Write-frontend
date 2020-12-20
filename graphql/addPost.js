import { gql } from '@apollo/client';

const getPostById = gql`mutation addPost (
  $title: String,
  $subtitle: String,
  $slug: String,
  $content: String,
  $tags: [String],
	$metaRobots: String,
  $thumbnail: String,
  $status: String
) {
  post:addPost(
    title: $title,
    subtitle: $subtitle,
    slug: $slug,
    content: $content,
    tags: $tags,
    metaRobots: $metaRobots,
    thumbnail: $thumbnail,
    status: $status
  ) {
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