import React, {MutableRefObject, useRef, useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap';
import './styles/mapContainer.css'
import 'mapbox-gl/dist/mapbox-gl.css';


import PageNavBar from "./components/PageNavBar";
import MapComponent from "./components/MapComponent"; // eslint-disable-line import/no-webpack-loader-syntax
import AddressSearchBar from "./components/AddressSearchBar";

export const MapContext = React.createContext({} as MutableRefObject<any>);


function App() {

    const map = useRef();

    const [lng, setLng] = useState(-98.49);
    const [lat, setLat] = useState(29.43);
    const [zoom, setZoom] = useState(9);



    return (
        <MapContext.Provider value={map}>
            <div>
                <div>
                    <PageNavBar/>
                </div>
                <div className={'container-lg'}>
                    <AddressSearchBar
                        setLat={setLat}
                        setLng={setLng}
                        setZoom={setZoom}/>
                    <MapComponent
                        lat={lat}
                        lng={lng}
                        setLat={setLat}
                        setLng={setLng}
                        zoom={zoom}
                        setZoom={setZoom}/>
                </div>
            </div>
        </MapContext.Provider>


    );
}

export default App;
