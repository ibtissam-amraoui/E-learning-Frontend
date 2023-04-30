import { Component } from "react";
import "./Why.css";
class WhyData extends Component{
    render(){
        return(
            <div className="first-des">
            <div className="des-text">
                <p>{this.props.text}</p>
            </div>
            <div className="image">
                
             
                <img alt="img" src={this.props.img2}/> 
                    </div>
        </div>

        );
    }
}
export default WhyData;