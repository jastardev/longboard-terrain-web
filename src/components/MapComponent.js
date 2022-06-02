import React, { useEffect, useRef, useState} from "react";
// @ts-ignore
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from 'mapbox-gl';
import {useContext} from "react";
import {MapContext} from "../App";

mapboxgl.accessToken = 'pk.eyJ1IjoiamFzdGFyIiwiYSI6ImNsMnY0NDF5cDA4Ym0zaG11amZyNnEwdjkifQ.n4K4YdRbME90e_hkaLdJNg';

export default function MapComponent({ lng, setLng, lat, setLat, zoom, setZoom}){
    const map = useContext(MapContext)

    const mapContainer = useRef(null);

    const [savedCoords, setSavedCoords] = useState([])

    useEffect(() => {
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/jastar/cl2mvzipa001014occnhtem0i',
            center: [lng, lat],
            zoom: zoom,
            attributionControl: false
        });

        // @ts-ignore
        map.current.on('click', (e) => {
            setSavedCoords(savedCoords.push([e.lngLat.lng, e.lngLat.lat]))
            // @ts-ignore
            //setSavedCoords(newSavedCoords)
            console.log(savedCoords)
        });

        map.current.on('mouseover', () => {
            map.current.getCanvas().style.cursor = "pointer"
        });
        map.current.on('mouseleave',  () => {
            map.current.getCanvas().style.cursor = ''
        });
    },[]);


    useEffect(()=>{
        //@ts-ignore
        map.current.on('load', () => {
            // @ts-ignore
            map.current.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': [
                            [
                                -98.37893493273002,
                                29.497577100412258
                            ],
                            [
                                -98.37727850985696,
                                29.49878410756088
                            ],
                            [
                                -98.37415827142134,
                                29.50166745529684
                            ],
                            [
                                -98.37284854170763,
                                29.502706781443877
                            ],
                            [
                                -98.37057577544,
                                29.503544939921227
                            ],
                            [
                                -98.36814892332362,
                                29.503477887498065
                            ],
                            [
                                -98.36795631601248,
                                29.503176151045906
                            ],
                            [
                                -98.36811040186127,
                                29.5016339284697
                            ],
                            [
                                -98.3677251872396,
                                29.500292846267385
                            ],
                            [
                                -98.36603024290419,
                                29.49858294070191
                            ],
                            [
                                -98.36287148300684,
                                29.496940063063008
                            ]
                        ]
                    }
                }
            });

            //@ts-ignore
            map.current.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#f00c30',
                    'line-width': 4
                }
            });
        });

    },[savedCoords]);

    function refreshMap(){
        //@ts-ignore
        map.current.getSource("route").setData(savedCoords);
    }


    return (
        <div>
            <div ref={mapContainer} className="map-container" />
        </div>
    )
}

// Cursor style
// style={{cursor: "crosshair"}}
