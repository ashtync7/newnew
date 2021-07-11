import React from 'react';

function Projects(props) {

    return (
        <div>
            <header>
                <img src="my-react-app/public/MALIBUheader.png" className="maliblu" />
            </header>
            <div className="content">
                <div className="video-gallery">
                    <div className="gallery-item">
                        <img src="https://iex-website.s3.amazonaws.com/images/articles/camp-counseling-abroad/2018/airplane-wing.jpg"
                            alt="ta" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://wanderlustagency.netlify.app" target="_blank">
                                    <h2>Wanderlust travel agency</h2>
                                </a>
                                <p>A fake travel agency website made with JavaScript, React, HTML, CSS, GitHub, & Canva</p>
                            </div>
                        </div>
                    </div>

                    <div className="gallery-item ">
                        <img src="https://www.dalat.org/web/wp-content/uploads/2018/04/re-CalendarHeader.jpg" alt="littleLeaf" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://littleleaf.netlify.app" target="_blank">
                                    <h2>Little Leaf Big Tree</h2>
                                </a>
                                <p>Made with JavaScript, HTML, CSS, GitHub & Canva</p>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item ">
                        <img src="https://wallpapercave.com/wp/wp3610958.jpg" alt="safeTravel" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://nerdville.netlify.app" target="_blank">
                                    <h2>Nerdville</h2>
                                </a>
                                <p>Made with JavaScript, HTML, CSS, GitHub & multiple APIs</p>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item ">
                        <img
                            src="https://pixel.nymag.com/imgs/daily/vulture/2019/04/04/got-recap/02-got-seasons-recap-illo.w1100.h733.jpg"
                            alt="GoT" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://rqsell.github.io/G-O-T/" target="_blank">
                                    <h2>The Long Night</h2>
                                </a>
                                <p>Made by two fellow lady coders & myself // JavaScript, Canvas, HTML, CSS, GitHub & iMovie</p>
                            </div>
                        </div>
                    </div>
                    <div className="gallery-item ">
                        <img
                            src="https://assets.teenvogue.com/photos/5f31a0d6861f578bcc3baf40/16:9/w_2560%2Cc_limit/GettyImages-1192843057.jpg"
                            alt="NebulUs" />
                        <div className="gallery-item-caption">
                            <div>
                                <a href="https://nebulus-astrology.netlify.app/" target="_blank">
                                    <h2>NebulUs</h2>
                                </a>
                                <p>NebulUs is a fullstack astrology app for users to discover more about themselves and their friends. Made
                                    with JavaScript, React.js, MongoDB, GitHub, Canva, and an API or two :)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Projects;