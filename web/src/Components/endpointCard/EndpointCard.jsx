import "./EndpointCard.scss";

function EndpointCard(props) {
    return (
        <div className="endpointcard">
            <div className="icon">{props.img}</div>
            <div className="CTA" onClick={props.ctaAction}>
                {props.cta}
            </div>
            <div className="result">
                {props.result}
            </div>
        </div>
    )

}

export default EndpointCard;