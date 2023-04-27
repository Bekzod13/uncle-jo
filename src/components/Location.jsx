import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Location = () => {
    const defaultState = {
        center: [41.324940, 69.249526],
        zoom: 15,
      };
  return (
  
        <YMaps>
            <Map width={'100%'} height={'100%'} defaultState={defaultState}>
                <Placemark geometry={[41.324940, 69.249526]} />
            </Map>
        </YMaps>
  );
}

export default Location;