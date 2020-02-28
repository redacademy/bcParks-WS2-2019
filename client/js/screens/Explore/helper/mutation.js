import gql from 'graphql-tag';

const ADD_MAP = gql`
  mutation     createMap(type: $type) {
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
  
`;
