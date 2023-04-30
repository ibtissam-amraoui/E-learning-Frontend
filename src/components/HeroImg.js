import "./HeroImg.css";
function HeroImg(props){
    return(
        <>
        <div className={props.name}>
        <img alt="HeroImage" src={props.heroImg} />
        <div className="hero-textt">
            <h1>{props.tit}</h1>
            <p>{props.para}</p>
        </div>
        </div>
        </>
    );
}
export default HeroImg;