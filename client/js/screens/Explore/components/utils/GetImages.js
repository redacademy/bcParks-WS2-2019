import React from 'react';

import styled from 'styled-components';
import Placeholder from '../../../../assets/images/Placeholder';
import {GOOGLE_API_KEY} from '../../../../config';

const ImageFrame = styled.Image`
  height: 100%;
`;
const GetImages = ({reference}) => {
  const Url = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=800&photoreference=${reference}&key=${GOOGLE_API_KEY}`;

  return reference ? <ImageFrame source={{url: Url}} /> : <Placeholder />;
};

export default GetImages;
