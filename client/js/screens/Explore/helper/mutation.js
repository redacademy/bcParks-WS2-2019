const addMap = ({id, name, vicinity}) => `
  mutation {
    createMap(
      data: {
        externalId: ${id}
        name: ${name}
        vicinity: ${vicinity}
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
