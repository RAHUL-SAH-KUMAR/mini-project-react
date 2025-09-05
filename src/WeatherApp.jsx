import SearchBox from "./SearchBox"
import InfoBox from "./infoBox"
import { useState } from "react"


export default function weatherApp(){
 const [WeatherInfo, setWeatherInfo] = useState({
    city:"Delhi",
    feelslike: 34.23,
    humidity: 3,
    temp: 37.42,
    tempMax: 37.42,
    tempMin: 37.42,
     weather: "overcast clouds"
 });

 let updateInfo =(newInfo) =>{
    setWeatherInfo(newInfo);
 }

    return (
        <div style={{textAlign:"center"}}>
            <h2> Weather app</h2>
          <SearchBox  updateInfo={updateInfo}/>
          <InfoBox info={WeatherInfo} />
        </div>
    )
}