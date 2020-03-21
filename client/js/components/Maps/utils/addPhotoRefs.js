const photoReference = (photo_reference, id) => `
  mutation{
    updateMap(data:{
      photo_reference:"${photo_reference}"
    } where:{id:"${id}"}){
      id
      name
      photo_reference
    }
  }
  `;

const AddPhotoRefs = (APIMaps, mapData) =>
  APIMaps.map(APIMap =>
    mapData.filter(map => {
      if (map.externalId === APIMap.id && !map.photo_reference) {
        const mutation = photoReference(
          APIMap.photos ? APIMap.photos[0].photo_reference : '',
          map.id,
        );
        fetchData(mutation);
      }
    }),
  );

export default AddPhotoRefs;
