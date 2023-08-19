import React, {useMemo} from "react";

import styles from "./Map.module.scss";
import "./Map.css"

import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api"

const Map = () => {

    const center = useMemo(() => ({ lat: 40.182350158691406, lng: 44.56821823120117 }))

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyBxFnPQRPd7ZH150cBomremSb0kOemQbBg"
    })

    return isLoaded ? <GoogleMap zoom={16.8} center={center} mapContainerClassName={styles.map}>
        <Marker position={center} />
    </GoogleMap> : <></>
}

export default Map