import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";

interface MapComponentsProps {
  location: number[];
  hotel: string;
  address: string;
}

export const MapComponent: React.FC<MapComponentsProps> = ({
  location,
  hotel,
  address,
}) => {
  return (
    <YMaps>
      <Map
        state={{
          center: location,
          zoom: 7,
          controls: [],
        }}
        width="100%"
        height="100%"
      >
        <Placemark
          geometry={location}
          options={{
            iconLayout: "default#image",
            iconImageSize: [40, 40],
            iconImageHref:
              "https://cdn-icons-png.flaticon.com/512/4974/4974589.png",
            hasHint: true,
            balloonContent: "asasgfgas",
          }}
          properties={{
            hintContent: hotel,
            balloonContentHeader: hotel,
            balloonContent: address,
          }}
          modules={["geoObject.addon.balloon", "geoObject.addon.hint"]}
        />
      </Map>
    </YMaps>
  );
};
