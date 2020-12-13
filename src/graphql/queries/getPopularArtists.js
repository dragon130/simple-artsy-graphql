import { gql } from "@apollo/client";

const POPULAR_ARTISTS = gql`
  query PopularArtists($size: Int) {
    popular_artists(size: $size) {
      artists {
        name
        years
        imageUrl
        nationality
        formatted_artworks_count
        artworks {
          id
          title
          is_for_sale
          price
          imageUrl
        }
      }
    }
  }
`;

export default POPULAR_ARTISTS;
