import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';

const Location = () => {

    const mapState = {
        center: [41.324940, 69.249526],
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
                    geometry={[41.324940, 69.249526]}  
                    options={{
                        iconLayout: "default#imageWithContent",
                        iconImageHref:
                        "https://pbe-react-yandex-maps.vercel.app/img/logo.svg",
                        iconImageSize: [40, 40]
                    }}
                 />
            </Map>
        </YMaps>
  );
}

export default Location;