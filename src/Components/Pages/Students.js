import { Component } from "react";
import RigesterdCourses from "./RigesterdCourses";
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
class Students extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <>
                <Container >
                    <div className="teacherInfo">
                        {this.props.students.map(student => (
                            <>



                                <>

                                    <Card style={{ width: '18rem', marginLeft: "20px" }}>
                                        <Card.Img variant="top" style={{ height: "150px", width: "150px", marginRight: "auto", marginLeft: "auto" }} src={student.img} />
                                        <div>
                                            <br></br>
                                            <Card.Body>
                                                <ListGroupItem>
                                                    <Link onClick={this.props.func} id={student.id} to="/Home/Pages/StudentInfo"

                                                    >
                                                        <Card.Title id={student.id}>{student.name}</Card.Title> </Link>


                                                    <Card.Text>
                                                        {student.email}
                                                    </Card.Text>
                                                </ListGroupItem>
                                            </Card.Body>
                                        </div>
                                    </Card>






                                </>
                            </>

                        ))}



                    </div>
                </Container>

            </>
        );
    }
}

export default Students;
