import "./BenifitsStyle.css";
import BenefitsData from "./BenifitsData";
function Benefits(){
    return(
        <div className="benifits">
                <h1>A learning Platform to ...</h1>
                <div className="benifitscard">
                    <BenefitsData
                    image="https://images.pexels.com/photos/9818447/pexels-photo-9818447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    heading="Better School-Life balance"
                    text="Continue your online courses at your own time and pace,taking classes from home enables you to stay close to other priorities in life,whether that be family,pets,or even your local gym."
                    />
                     <BenefitsData
                    image="https://images.pexels.com/photos/843266/pexels-photo-843266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    heading="Self-motivation "
                    text="Balance your classes with other aspects of your life and stay on top of your coursework,
                    take control of the way ou learn and confidentiely reach out to your profesor with your questions, discussions and ideas."
                    />
                     <BenefitsData
                    image="https://images.pexels.com/photos/4709374/pexels-photo-4709374.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    heading="Refind technical skills"
                    text="We help you taking your technical skills to the next level,using a range of digital learning materials ,such as online discussion boards, collaboration plateforms,and content management systems. "
                    />
                </div>
        </div>
    );
}
export default Benefits;