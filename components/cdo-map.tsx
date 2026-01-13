import { Map, MapCircle, MapTileLayer } from "@/components/ui/map/map"
import type { LatLngExpression } from "leaflet"

export function MapWithCircle() {
    const CDO_COORDINATES = [8.486790, 124.644879] satisfies LatLngExpression

    return (
        <Map 
            center={CDO_COORDINATES}
            zoom={12}>
            <MapTileLayer />
            <MapCircle center={CDO_COORDINATES} radius={5000} />
        </Map>
    )
}

export default MapWithCircle