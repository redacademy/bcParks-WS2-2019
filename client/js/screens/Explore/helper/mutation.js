import gql from 'graphql-tag';
const ADD_MAP = gql`
  mutation {
    createMap(
      data: {
        externalId: "6cef22a76079cabbba7008e5e50634cb4227cfcc"
        name: "VanDusen Botanical Garden"
        vicinity: "5251 Oak Street, Vancouver"
        plus_code: {
          create: {
            compound_code: "6VQC+QC Vancouver, British Columbia, Canada"
            global_code: "84XR6VQC+QC"
          }
        }
        geometry: {
          create: {
            location: {create: {lat: 49.2394052, lng: -123.1288986}}
            viewport: {
              create: {
                northeast: {
                  create: {lat: 49.2407541802915, lng: -123.1275496197085}
                }
                southwest: {
                  create: {lat: 49.2380562197085, lng: -123.1302475802915}
                }
              }
            }
          }
        }
      }
    ) {
      id
      name
      externalId
      vicinity
      geometry {
        location {
          lat
          lng
        }
      }
    }
  }
`;
