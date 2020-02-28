import gql from 'graphql-tag';

const ALL_MAP = gql`
  query Map {
    Map {
      externalId
      name
      vicinity
      plus_code {
        id
        compound_code
        global_code
      }
      photos
      features {
        id
        title
      }
      geometry {
        id
        location {
          id
          lat
          lng
        }
        viewport {
          northeast
          southwest
        }
      }
    }
  }
`;
