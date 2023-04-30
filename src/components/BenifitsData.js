import Benefits from "./Benifits";
import "./BenifitsStyle.css";
function BenefitsData(props){
    return(
<div className="t-card">
    <div className="t-image">
<img src={props.image} alt="g"/>

    </div>
    <h4>{props.heading}</h4>
    <p>{props.text}</p>
</div>
    );
}
export default BenefitsData;