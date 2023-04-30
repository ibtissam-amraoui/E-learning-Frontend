//import "./EduTeam.css";
import "./BenifStyle.css";
import {Row,Col} from "antd";
const items=[
    {
        key:'1',
        img:<img alt="im" src="https://images.pexels.com/photos/1486064/pexels-photo-1486064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
        title:'Jack Welson',
       content:'Professor Welson is an expert in the field of mathematics . Their research focuses on the application of mathematical models to solve real-world problems. They are known for their engaging teaching style and their ability to simplify complex concepts for their students. ',


    },
    {
        key:'2',
        img:<img  alt="im" src="https://images.pexels.com/photos/3586798/pexels-photo-3586798.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
        title:'Jesika Lee',
       content:'Professor Lee is a dynamic and engaging teacher with a background in history. Their research focuses on the intersection of history and politics, and they are known for their ability to bring history to life for their students',


    },
    {
        key:'3',
        img:<img alt="im"  src="https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
        title:'Robert Philips',
       content:'Professor Philips is an expert in the field of computer science with a focus on artificial intelligence and machine learning. Their research has led to several groundbreaking discoveries in the field, and they are known for their ability to develop innovative solutions to complex problems.',


    },
    {
        key:'4',
        img:<img alt="im" src="https://images.pexels.com/photos/2218786/pexels-photo-2218786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"></img>,
        title:'Alexa Beurunt',
       content:'Professor Beurunt is a highly experienced educator with a background in psychology. Their research focuses on the development of cognitive skills and the effects of stress on academic performance. They are passionate about helping students reach their full potential and are known for their ability.',


    },
]

function EduTeam(){
    return(
        <div className="Benif">
            <div className="title">
            <h1>Our educationel team  </h1>
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
export default EduTeam;