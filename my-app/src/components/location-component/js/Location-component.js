import "../css/location-component.css";
import { useState } from "react";


function Location() {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchInputChange = (event) => {
        setSearchQuery(event.target.value);
    };

    const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    searchQuery
    )}&output=embed`;


    return (
        <>
            <div className="set-locaiton-div">
                <div className="head">
                    <div className="text-and-go-back">
                    <button className="go-back-btn" onClick={()=>{
                            document.querySelector(".set-locaiton-div").classList.remove("active");
                        }}>
                        <i className="fa-solid fa-arrow-left"></i>
                    </button>
                        <p>Set Your Location</p>
                    </div>
                    <button className="close-location-btn" onClick={()=>{
                            document.querySelector(".close-request-ask").classList.add("active");
                        }}>
                            <i className="fa-solid fa-xmark"></i>
                    </button>
                </div>


                <div className="location-map">
                    <div className="map-container">
                    <input
                        className="search-input"
                        type="text"
                        value={searchQuery}
                        onChange={handleSearchInputChange}
                        placeholder="Search for a location"
                    />
                    <iframe className="map" title="Map" src={mapUrl} width="100%" height="400px" ></iframe>

                    </div>
                </div>

                <div className="comleate-req-div">
                    <button className="complete-btn" onClick={()=>{
                        document.querySelector(".complete-req-div").classList.add("active")
                    }}>Complete</button>
                </div>
            </div>
        </>
    )
}


export default Location