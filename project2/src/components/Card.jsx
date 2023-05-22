export default function Card(props) {
    console.log(props.item)
    let badgeText
    if (props.item.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.item.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className="card">
            {badgeText && <div className="card-title">{badgeText}</div>}
            <img className="card-img" src={props.item.coverImg} alt="player image" />
            <div className="card-info">
                <img className="card-info-img" src="/star.png" alt="star" />
                <p> <span> {props.item.stats.rating} </span>({props.item.stats.reviewCount}) &#9679; {props.item.location}</p>
            </div>
            <p className="card-topic">{props.item.title}</p>
            <p className="card-rate"><span>From ${props.item.price} </span> / person</p>
        </div>
    )
}