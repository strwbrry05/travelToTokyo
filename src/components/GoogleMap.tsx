import React, { useCallback, useState } from "react";
import {
  AdvancedMarker,
  APIProvider,
  Map,
  Pin,
  useAdvancedMarkerRef,
  InfoWindow,
} from "@vis.gl/react-google-maps";

const GoogleMap = () => {
  const key = import.meta.env.VITE_MAP_API_KEY;
  const mapID = import.meta.env.VITE_MAP_ID;

  const [markerRef, marker] = useAdvancedMarkerRef();
  const [infoWindowShown, setInfoWindowShown] = useState(false);

  const handleMarkerClick = useCallback(
    () => setInfoWindowShown((isShown) => !isShown),
    []
  );

  const handleClose = useCallback(() => setInfoWindowShown(true), []);

  return (
    <div className="bg-(--color-white) pt-[5em] pb-[5em]">
      <APIProvider
        apiKey={key}
        onLoad={() => console.log("Maps API has loaded.")}
      >
        <Map
          className="w-[355px] h-[575px] m-auto bg-(--color-red) border-1 rounded-md border-(--color-red) p-[1em]
          sm:w-[500px] sm:h-[650px]
          lg:w-[850px]
          xl:w-[1100px] xl:h-[700px]"
          defaultZoom={13}
          defaultCenter={{ lat: 35.681615, lng: 139.75331 }}
          mapId={mapID}
        >
          <AdvancedMarker
            key={"tokyo"}
            ref={markerRef}
            onClick={handleMarkerClick}
            position={{ lat: 35.679814, lng: 139.767973 }}
            clickable={true}
          >
            {infoWindowShown && (
              <InfoWindow
                anchor={marker}
                onClose={handleClose}
                headerContent={<h1 className="font-bold">Tokyo, Japan</h1>}
              >
                <p>
                  Take a look around the city to find cool new places to explore
                  and add to your itinerary!
                </p>
              </InfoWindow>
            )}
            <Pin
              background={" #7E1A1A"}
              glyphColor={"#fef8ecff"}
              borderColor={"#7E1A1A"}
            ></Pin>
          </AdvancedMarker>
        </Map>
      </APIProvider>
    </div>
  );
};

export default GoogleMap;
