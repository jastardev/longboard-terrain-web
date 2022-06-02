import {AddressAutofill} from "@mapbox/search-js-react";
import {useContext} from "react";
import {MapContext} from "../App";


export default function AddressSearchBar({ setLat, setLng, setZoom}){

    const map = useContext(MapContext)

    function handleOnRetrieve(e){

        // map.current.setZoom(17)
        map.current.flyTo({
            center: [e.features[0].geometry.coordinates[0], e.features[0].geometry.coordinates[1] ],
            zoom:15
        });

    }
    return (
        <form className={'mx-5 my-2'}>
            <div className={'row'}>
                <label className={'col'}>Search Address:</label>
                <div className={'col-9'}>
                    <AddressAutofill
                        accessToken={"pk.eyJ1IjoiamFzdGFyIiwiYSI6ImNsMnY0NDF5cDA4Ym0zaG11amZyNnEwdjkifQ.n4K4YdRbME90e_hkaLdJNg"}
                        onRetrieve={(e)=>handleOnRetrieve(e)}
                    >
                        <input className={'form-control'} name="address" placeholder={"Address"} type={"text"} autoComplete={"street-address"}/>
                    </AddressAutofill>
                </div>

            </div>

        </form>
    )
}
