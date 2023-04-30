import "./BenifStyle.css";
import {Row,Col} from "antd";
const items=[
    {
        key:'1',
        img:<img alt="im" src="https://images.pexels.com/photos/3640930/pexels-photo-3640930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
        title:'Flexibility and Convenience',
       content:' E-learning allows learners to access educational resources and participate in learning activities from anywhere and at any time, as long as they have an internet connection. This flexibility makes it easier for learners to fit education into their busy schedules and manage their learning pace.',

    },
    {
        key:'2',
        img:<img  alt="im" src="https://images.pexels.com/photos/3943730/pexels-photo-3943730.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
        title:'Cost-effectiveness',
       content:'  E-learning is often more cost-effective than traditional classroom learning as it eliminates the need for physical classrooms, textbooks, and travel expenses. This makes education more accessible to learners who may not have the financial resources to attend traditional schools.',


    },
    {
        key:'3',
        img:<img alt="im"  src="https://plus.unsplash.com/premium_photo-1665203434005-3c40f570146f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"></img>,
        title:'Personalization',
       content:'E-learning offers a more personalized learning experience by allowing learners to choose the topics and resources that interest them, and to engage with learning materials at their own pace. This can lead to better retention of information and more effective learning outcomes.',

    },
    {
        key:'4',
        img:<img alt="im" src="https://images.pexels.com/photos/5553671/pexels-photo-5553671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
        title:'Interactivity',
       content:'E-learning can be highly interactive, with learners able to participate in group discussions, online forums, and collaborative projects. This can create a more engaging and stimulating learning experience, which can lead to better retention of information.',


    },
    {
        key:'5',
        img:<img  alt="im" src="https://images.pexels.com/photos/5632379/pexels-photo-5632379.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
        title:'Customization',
       content:'E-learning can be customized to meet the needs of individual learners. This means that learners can access learning materials that are tailored to their specific learning style and needs.',


    },
    {
        key:'6',
        img:<img alt="im" src="https://images.pexels.com/photos/699459/pexels-photo-699459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
        title:'Technology Integration',
       content:'E-learning makes use of modern technology, such as multimedia content, online simulations, and interactive games. This makes learning more engaging and enjoyable, leading to better learning outcomes.',


    },
]

function Benif(){
    return(
        <div className="Benif">
            <div className="title">
            <h1>How does IBRA beat the traditional way of learning ?</h1>
            </div>
            <Row gutter={[32, 24]}>
                        {items.map(item=>{
                            return(
                <Col span={12}  key={item.key}>
                    <div className="content">
                        <div className="icon">
                            {item.img}
                        </div>
                        <div className="tt">
                       <h3 className="t">{item.title}</h3> 
                    <p>{item.content}</p>
                        
                    </div>
                    </div>
                </Col>
                            );
                        })}   
            </Row>
        </div>
    );
}
export default Benif;