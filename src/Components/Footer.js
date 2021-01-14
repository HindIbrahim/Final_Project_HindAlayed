


function Footer() {
    return (
        <>
            <footer id="Footer">
                <br></br>
                <br></br>

                <div className="FooterContent">

                    <div className="FooterDsc">
                        <h4> About US</h4>
                        <br></br>
                        General Assembly is a pioneer in education and career transformation, specializing in
                        today’s most in-demand skills. The leading source for training, staffing,
                        and career transitions, we foster a flourishing community of professionals pursuing careers they love.
                    </div>

                    <div className="Clints">
                        <h4> Clients and Hiring Partners</h4>
                        <br></br>
                        <div style={{ marginTop: "30px", }} id="Microsoft">Microsoft</div>
                        <div style={{ marginTop: "30px", }} id="Google" >Google</div>
                        <div style={{ marginTop: "30px", }} id="Cond" > Cond</div>
                        <div style={{ marginTop: "30px", }} id="Visa" >Visa</div>
                        <div style={{ marginTop: "30px", }} id="LOR" >LOR</div>

                    </div>

                </div>
                <div className="hr"> </div>
                <br></br>
                <div classNmae="Social">
                    <a className="FooterIcons" id="FB" href="http://www.facebook.com/gnrlassembly" target="_blank" title="Visit General Assembly on Facebook">Facebook</a>
                    <a className="FooterIcons" id="TW" href="https://twitter.com/ga" target="_blank" title="Follow @GA on Twitter">Twitter</a>
                    <a className="FooterIcons" id="LI" href="http://www.linkedin.com/company/2408664" target="_blank" title="Network with General Assembly on LinkedIn">LinkedIn</a>
                    <a className="FooterIcons" id="IN" href="http://instagram.com/generalassembly" target="_blank" title="See what’s happening on GA’s Instagram.">Instagram</a>
                    <a className="FooterIcons" id="YT" href="https://www.youtube.com/channel/UCh1rrm00DbprS8UcLd4ochw" rel="publisher" target="_blank" title="Visit General Assembly on YouTube">YouTube</a>
                </div>




                <p className="FooterDsc"> © 2021 General Assembly. All rights reserved.</p>
                <br></br>

            </footer>
        </>
    );
}

export default Footer;
