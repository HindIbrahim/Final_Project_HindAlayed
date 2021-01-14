import { Component } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class RigesterdCourses extends Component {


    render() {
        let CN = "";

        return (
            <>



                {
                    this.props.AllCourses.forEach(course => {
                        if (course.id === this.props.courseid) {
                            CN = course.name;




                        }



                    }

                    )
                }


                <div>  {CN}

                </div>



            </>
        );
    }
}

export default RigesterdCourses;
