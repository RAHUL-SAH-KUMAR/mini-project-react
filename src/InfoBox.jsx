import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1698414127035-2a722848ff70?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const HOT_URL =
    "https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdHxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL =
    "https://plus.unsplash.com/premium_photo-1671127303910-754ac2224c7a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjM3fHxjb2xkfGVufDB8fDB8fHww";
  const RAIN_URL =
    "https://plus.unsplash.com/premium_photo-1733259714554-8b85501e585a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDg5fHxyYWlufGVufDB8fDB8fHww";
  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 445 }}>
          <CardMedia
            component="img"
            alt={`${info?.city || "city"} weather image`}
            height="240"
            image={
              info?.humidity > 80
                ? RAIN_URL
                : info?.temp > 15
                ? HOT_URL
                : COLD_URL
            }
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info?.city || "Unknown City"}&#160;&#160;
              {info?.humidity > 80 ?  (
                 <ThunderstormIcon />
              ) : info?.temp > 15 ? (
                  <WbSunnyIcon />
              ) : (
                  <AcUnitIcon />
              )}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Temperature = {info?.temp}&deg;C
              <br />
              Humidity = {info?.humidity}
              <br />
              Min temp = {info?.tempMin}&deg;C
              <br />
              Max temp = {info?.tempMax}&deg;C
              <br />
              The weather can be described as <i>{info?.weather}</i> and feels
              like {info?.feelslike}&deg;C
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
