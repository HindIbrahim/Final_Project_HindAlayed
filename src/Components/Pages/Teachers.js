import { Component } from "react";

import LinkTtoS from "./LinkTtoS";
import TeacherInfo from "./TeacherInfo";


import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Teachers extends Component {



    render() {

        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <Container >
                    <div className="teacherInfo">



                        {this.props.teacher.map(teacher => (
                            <>

                                <Card style={{ width: '18rem', marginLeft: "20px" }}>
                                    <Card.Img variant="top" style={{ height: "150px", width: "150px", marginRight: "auto", marginLeft: "auto" }} src={teacher.img} />

                                    <div>
                                        <br></br>
                                        <Card.Body>
                                            <ListGroupItem>
                                                <Link onClick={this.props.func} id={teacher.id} to="/Home/Pages/TeacherInfo">
                                                    <Card.Title id={teacher.id}>{teacher.name}</Card.Title>

                                                </Link>


                                                <Card.Text>
                                                    {teacher.email}
                                                </Card.Text>
                                            </ListGroupItem>


                                        </Card.Body>
                                    </div>
                                </Card>





                            </>

                        ))}
                    </div>
                </Container>




            </>
        );
    }
}


export default Teachers;