import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

// import location image
import location from '../assets/location.svg';
const Location = () => {

    const mapState = {
        center: [41.260118, 69.240145],
        zoom: 15,
      };

  return (
  
        <YMaps>
            <Map 
                width={'100%'} 
                height={'100%'} 
                state={mapState}
                modules={["layout.ImageWithContent"]}
                >
                <Placemark 
                    geometry={mapState.center}  
                    options={{
                        iconLayout: "default#imageWithContent",
                        iconImageHref: location,
                        iconImageSize: [45, 45]
                    }}
                 />
            </Map>
        </YMaps>
  );
}

export default Location;