import { Component } from "react";
import Home from "../Home";

class LinkTtoS extends Component {

    state = {
        onChange: false
    }

    handelChange = e => {
        e.preventDefault();
        this.setState({
            onChange: true
        })
    }

    render() {


        return (



            <>
                <select name="student" onchange={this.handelChange}>
                    {this.props.name.map(nm => {

                        return <option value={nm.name}>{nm.name}</option>

                    })}


                </select>

                



            </>
        );
    }
}

export default LinkTtoS;