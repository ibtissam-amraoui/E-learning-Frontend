import "./HeroVid.css";
function HeroVid(props){
    return(
        <>
        <div className={props.name}>
        <video width="640" height="360" autoplay="true" muted loop >
             <source src={props.heroVid} type="video/mp4" />
        </video>
        <div className="hero-text">
            <h1>{props.tit}</h1>
            <p>{props.para}</p>
        </div>
        </div>
        </>
    );
}
export default HeroVid;