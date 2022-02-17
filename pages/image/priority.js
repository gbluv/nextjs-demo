import React from 'react';
import Image from 'next/image';
import humusImage from '../../public/humus.jpg';
import lentilSoupImage from '../../public/lentil_soup.jpg';

export default () =>
  <>
    <div>
      <Image src={humusImage} alt={"Beautifu picutre of the humus that my wife made"} />
    </div>
    <div>
      <Image priority src={lentilSoupImage} alt={"Beautifu picutre of the lentil soup that my wife made"} />
    </div>

  </>;


