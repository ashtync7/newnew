import React from 'react';

function Home(props) {

    return (
        <div>
            <div className="homepage">
                <img id="malibu" src="my-react-app/public/malibu19.png" alt="too much pasta" />
            </div>
            <div>
                <h4>hi!</h4>
                <p className="about-me">I'm Ashtyn.<br /> I'm a web developer.<br /> I'm a fashion industry runaway.<br /> I'm
                    also a brunch fiend, travel enthusiast, & beach lover. You should also probably know that I like to take
                    things apart
                    and put them back
                    together.<br /> As a fashion designer, I found great satisfaction in building something out of nothing,
                    which, in a way, brought me to web development. Learning to code was one of the trickiest, most
                    rewarding things I have
                    learned in an educational setting. Because the tech industry is ever-changing -- and because I am
                    honestly quite
                    competitive -- my goal is to continue learning, everyday, so I can be the best that I can be.</p>
            </div>
        </div>
    )
}

export default Home;