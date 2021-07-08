import React from 'react';

function Contact(props) {

    return (
        <div>
            <header>
                <img src="my-react-app/public/MALIBUheader.png" className="maliblu" />
            </header>
            <div id="formStuff">
                <form name="contact">
                    <input type="text" id="cheeseburgers" name="name" className="input1" placeholder="Name" name="Name"></input>
                    <input type="text" id="cheeseburgers" className="input2" placeholder="E-mail Address" name="Email Address"></input>
                    <input type="text" id="formMessage" name="place" rows="3" placeholder="Message" name="Message"></input>
                    <input name="name" type="submit" value="Send" class="sendButton" id="formButton"></input>
                </form>
            </div>
            <div id="socialLinks">
                <a href="https://www.linkedin.com/in/ashtyncza/" clasName="fa fa-linkedin"></a>
                <a href="https://www.instagram.com/ash10csky/" className="fa fa-instagram"></a>
                <a href="https://github.com/ashtync7" className="fa fa-github" aria-hidden="true"></a>
            </div>
        </div>
    )

}

export default Contact;