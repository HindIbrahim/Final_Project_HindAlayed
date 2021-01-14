import { Component } from "react";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class TeacherStudents extends Component {


    render() {
        let SN = "";
        let Sid;

        return (
            <>



                {

                    this.props.AllStudents.forEach(Student => {
                        if (Student.id === this.props.LinkS) {
                            SN = Student.name;
                            Sid = Student.id;

                        }



                    }

                    )
                }




                <div>
                    {SN}
                    
                   
                </div>


            </>
        );
    }
}

export default TeacherStudents;
