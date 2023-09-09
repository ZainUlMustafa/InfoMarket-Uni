import { LayerGroup, LayersControl, MapContainer, Marker, Polyline, Popup, TileLayer, useMap, Tooltip, Circle, useMapEvent, Rectangle } from 'react-leaflet'
// import icon from 'leaflet/dist/images/marker-icon.png';
import L, { LatLng } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useEventHandlers } from '@react-leaflet/core'
// import marker from '../../../../../assets/pin_sm.svg';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { CircularProgress } from '@mui/material';

import iconMarker from 'leaflet/dist/images/marker-icon.png'
import iconRetina from 'leaflet/dist/images/marker-icon-2x.png'
import iconShadow from 'leaflet/dist/images/marker-shadow.png'
const icon = L.icon({
    iconRetinaUrl: iconRetina,
    iconUrl: iconMarker,
    shadowUrl: iconShadow
});

const StoreFinderMap = (props) => {

    const { stores } = props
    console.log(stores)

    const storeList = Object.values(stores)
    const center = storeList.at(0).geo
    return (
        <>
            <div style={{ width: '100vw' }}></div>
            <MapContainer attributionControl={false} center={center} zoom={16} scrollWheelZoom={true} maxZoom={25}>
                {/* {pinned ? <MinimapControl position="bottomleft" zoom={12} /> : <></>} */}
                <TileLayer
                    attribution=''
                    // url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    // detectRetina={true}
                    maxZoom={25}
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {storeList.map((e, i) => {
                    return <Marker key={e.storeId} position={e.geo} icon={icon}>
                        <Popup>
                            {e.name}
                        </Popup>
                        <Tooltip>{e.name}</Tooltip>
                    </Marker>
                })}
            </MapContainer>
        </>
    )

}

export default StoreFinderMap