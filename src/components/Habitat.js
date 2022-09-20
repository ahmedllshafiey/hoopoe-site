import React from "react";
import '../styles/habitat.css'
import map from '../images/map.png'

function Habitat(){
    return(
        <div className="row habitat">
            <div className="col-sm-12 col-md-6">
                <img src={map} alt="map" className="map"/>
            </div>
            <div className="col-sm-12 col-md-6">
                <p className="info"> Hoopoes are widespread in Europe, Asia, and North Africa, Sub-Saharan Africa and Madagascar.
                    Most European and north Asian birds migrate to the tropics in winter. 
                    In contrast, the African populations are sedentary all year. 
                </p>
            </div>
        </div>
    )
}

export default Habitat;