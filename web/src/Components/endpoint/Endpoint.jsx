import React, { useState, useEffect} from "react";
import axios from "axios";

import "./Endpoint.scss";

import EndpointCard from "../endpointCard/EndpointCard";

import { ReactComponent as Clock } from '../../Images/clock.svg';
import { ReactComponent as Activity } from '../../Images/activity.svg';

function Endpoint() {
    const [time, setTime] = useState("");
    const [activity, setActivity] = useState("");

    const getAPI = async (endpoint) => {

      const url = window.__RUNTIME_CONFIG__.REACT_APP_API_URL + "/" + endpoint; 
      console.log("env is: " + window.__RUNTIME_CONFIG__.REACT_APP_API_URL);
      console.log(url); 

      try {
        const response = await axios.get(url);
        console.log(response.data);
        if (endpoint === 'time') {
            setTime(response.data);
        } else {
            setActivity(response.data);
        }
      } catch (error) {
        console.log(`ERROR: ${error}`);
      }
    }

    useEffect(() => {
        getAPI("time");
        console.log(time);
    });

    return (
        <div className="endpoint">
            <div id="endpoint"><h3>TEST API ENDPOINT</h3></div>
            <div className="res">
                <EndpointCard img={<Clock />} cta="GET TIME" ctaAction={() => getAPI("time")} result={time}/>
                <EndpointCard img={<Activity />} cta="LET's DO" ctaAction={() => getAPI("activity")} result={activity}/>
            </div>
        </div>
    )

}

export default Endpoint;