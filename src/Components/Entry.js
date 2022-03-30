import MapIcon from "../Icons/loc_icon.png";

export default function Entry(props) {
    console.log(props);
    return (
        <div className="Entry--container">
            <img src={props.coverImg} alt="" className="Entry--img" />
            <div className="Entry--body">
                <div className="Entry--body_header">
                    <img src={MapIcon} alt="" />
                    <h2 className="Entry--body_header-country">
                        {props.country}
                    </h2>
                    <a href={props.googleMaps}>View on Google Maps</a>
                </div>
                <h3 className="Entry--body_location">
                    {props.location}
                </h3>
                <h4 className="Entry--body_date">{props.dates}</h4>
                <p className="Entry--body_description">
                    {props.description}
                </p>
            </div>
        </div>
    );
}
