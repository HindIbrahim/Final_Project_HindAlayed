import { Component } from "react";
import { Card, Container, Nav, ListGroupItem } from 'react-bootstrap';


class CourseInfo extends Component {


    render() {


        return (
            <>





                <Container>
                    <br></br><br></br>
                    <div className="teacherInfo">
                        <div>
                            <img src={this.props.courses[this.props.id].img}></img>

                        </div>

                        <div className="CrsStd">
                            <p>  Courses Description </p>
                            {


                                <ListGroupItem>
                                    <ListGroupItem>
                                        {this.props.courses[this.props.id].description}
                                    </ListGroupItem>


                                </ListGroupItem>


                            }


                        </div>

                    </div>
                    <br></br><br></br>
                </Container>







            </>
        );
    }
}

export default CourseInfo;
