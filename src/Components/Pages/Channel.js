import { Component } from "react";
import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
class Channel extends Component {

    componentDidMount() {

        let xmlhttp = new XMLHttpRequest();
        let url = "https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=UCh1rrm00DbprS8UcLd4ochw&maxResults=50&key=AIzaSyAcPdFPsFIFEkBcfgkWAWY_SjIZ2_CD9XE";

        xmlhttp.onreadystatechange = function (e) {
            if (this.readyState == 4 && this.status == 200) {
                let myArr = JSON.parse(xmlhttp.responseText);
                console.log(myArr);
                myFunction(myArr);
            }
            else {
                console.log(this.status);
            }
        };
        xmlhttp.open("GET", url, true);
        xmlhttp.send();

        function myFunction(arr) {
            let out = "";
            let i;
            for (i = 0; i < arr.items.length; i++) {
                out =
                    '<div class="card chan" style="width: 18rem;">' +
                    '<img class="card-img-top" src="' + arr.items[i].snippet.thumbnails.high.url + '" alt="Card image cap"/>' +
                    '<div class="card-body">' +
                    '<div class="card"<h5 class="card-title"> <a class="chanLink" target="_blank" href=" https://www.youtube.com/watch?v=' + arr.items[i].id.videoId + '">' + arr.items[i].snippet.title + '</a></h5></div>' +
                    '</div>' +
                    '</div>';
                document.getElementById("id01").innerHTML += out;
            }

        }
    }



    render() {
        return (
            <>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <div className="ChannelPage">
                    <div className="parg" style={{ height: "600px", marginLeft: "30px", paddingLeft: "30px" }}>
                        Since 2016, GA has brought over 10,000 learners and counting an unparalleled learning experience in
                        our online classrooms. See how you can take advantage of best-in-class collaboration tools,
                        support from instructors via office hours and one-on-one sessions, and experience community and camaraderie with your fellow students.
                    </div>

                    <div>
                        <Container>
                            <div className="channel" id={"id01"}>
                            </div>
                        </Container>
                    </div>
                </div>



            </>
        );
    }
}

export default Channel;
