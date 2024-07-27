/* eslint-disable react/prop-types */
import location from "../assets/location.png";

const TravelCard = (props) => {
  return (
    <div className="container">
      <div className="image-poster">
        <img
          className="card-img"
          src={props.dataEl.imageUrl}
          alt="mount-fuji"
        />
      </div>
      <div className="travel-content">
        <div className="location">
          <img src={location} alt="location-icon" className="location-img" />
          <h2>{props.dataEl.location}</h2>
          <a href={props.dataEl.googleMapsUrl} className="maps-link">
            View on Google Maps
          </a>
        </div>
        <div className="place">
          <h2>{props.dataEl.title}</h2>
        </div>
        <div className="content">
          <p className="date">
            {props.dataEl.startDate} - {props.dataEl.endDate}
          </p>
          <p className="description">{props.dataEl.description}</p>
        </div>
      </div>
    </div>
  );
};

export default TravelCard;
