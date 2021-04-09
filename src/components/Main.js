import './Main.css';

import avatar1 from '../assets/avatar1.png'
import avatar2 from '../assets/avatar2.png'
import go from '../assets/go.png'
import lightgo from '../assets/lightplay.svg'

import a from '../assets/n.png'
import b from '../assets/nc.png'
import c from '../assets/c.png'
import d from '../assets/s.png'

import gotocode from '../assets/gotocode.png'
import gotoview from '../assets/gotoview.png'

import lightgotoview from '../assets/lightview.png'
import lightgotocode from '../assets/lightcode.png'

const Main = () => {
    return (
        <main className={ localStorage.getItem(`lightTheme`) ? "lightMain" : "main" }>

            <article className="intro">

                <aside className={ localStorage.getItem(`lightTheme`) ? "lightIntro-avatar" : "intro-avatar" }>
                    <img src={localStorage.getItem(`lightTheme`) ? avatar2 : avatar1} alt="avatar"></img>
                </aside>

                <aside className="intro-info">
                    <h1>Daniel Ioanitescu</h1>
                    <h3>I'm a front-end web developer currently located in Constanta, Romania. Being a creative thinker, I realize web-sites with impactful ideas using the skills that I have so please visit my work down below.</h3>
                    <a href="#one" className="intro-info-bio">
                        <img src={localStorage.getItem(`lightTheme`) ? lightgo : go} alt="bio"></img>
                        <h3 className={ localStorage.getItem(`lightTheme`) ? "lightIntro-bio" : "intro-bio" } >SEE PROJECTS</h3>
                    </a>
                </aside>

            </article>

            <article className="sites">

                <aside className="site-one" id="one">

                    <article className="site-avatar">
                        <img src={a} alt="neon light generation"></img>
                    </article>

                    <article className={ localStorage.getItem(`lightTheme`) ? "lightSite-info" : "site-info" }>
                        <h1>NEON LIGHT GENERATION</h1>
                        <div className="site-info-codeview-div">
                            <a href="https://neon-light-generation.herokuapp.com/" className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-codeview" : "site-info-codeview" }>
                                <img src={localStorage.getItem(`lightTheme`) ? lightgotoview : gotoview} alt="neon light generation" className={ localStorage.getItem(`lightTheme`) ? "lightSite-icon" : "site-icon" }></img>
                                <h3 className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-presenting" : "site-info-presenting" }>View website</h3>
                            </a>
                            <a href="https://github.com/Danielioanitescu92/neon-light-generation" className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-codeview viewcode" : "site-info-codeview viewcode" }>
                                <img src={localStorage.getItem(`lightTheme`) ? lightgotocode : gotocode} alt="neon light generation" className={ localStorage.getItem(`lightTheme`) ? "lightSite-icon" : "site-icon" }></img>
                                <h3 className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-presenting" : "site-info-presenting" }>View code</h3>
                            </a>
                        </div>
                        <h3>Full-stack Next.js blog, using Mongodb database, server-side rendering used to improve SEO and Sendgrid API for emails.</h3>
                        <div className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-divider" : "site-info-divider" } ></div>
                        <i>HTML, CSS, Javascript, Next.js, MongoDB, SendGrid</i>
                    </article>

                </aside>

                <aside className="site-two" id="two">

                    <article className="site-avatar">
                        <img src={b} alt="neon light generation"></img>
                    </article>

                    <article className={ localStorage.getItem(`lightTheme`) ? "lightSite-info" : "site-info" }>
                        <h1>NEON LIGHT GENERATION-CMS</h1>
                        <div className="site-info-codeview-div">
                            <a href="https://neon-light-cms.herokuapp.com/" className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-codeview" : "site-info-codeview" }>
                                <img src={localStorage.getItem(`lightTheme`) ? lightgotoview : gotoview} alt="neon light generation" className={ localStorage.getItem(`lightTheme`) ? "lightSite-icon" : "site-icon" }></img>
                                <h3 className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-presenting" : "site-info-presenting" }>View website</h3>
                            </a>
                            <a href="https://github.com/Danielioanitescu92/neon-light-cms" className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-codeview viewcode" : "site-info-codeview viewcode" }>
                                <img src={localStorage.getItem(`lightTheme`) ? lightgotocode : gotocode} alt="neon light generation" className={ localStorage.getItem(`lightTheme`) ? "lightSite-icon" : "site-icon" }></img>
                                <h3 className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-presenting" : "site-info-presenting" }>View code</h3>
                            </a>
                        </div>
                        <h3>Mern-stack React.js CMS, using Mongodb database, Node.js and Express for back-end, react-redux to manipulate store, Sendgrid API for emails.</h3>
                        <div className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-divider" : "site-info-divider" } ></div>
                        <i>HTML, CSS, Javascript, React.js, Node.js, Express, MongoDB, SendGrid</i>
                    </article>

                </aside>

                <aside className="site-three" id="three">

                    <article className="site-avatar">
                        <img src={c} alt="neon light generation"></img>
                    </article>

                    <article className={ localStorage.getItem(`lightTheme`) ? "lightSite-info" : "site-info" }>
                        <h1>COVID TRACKER</h1>
                        <div className="site-info-codeview-div">
                            <a href="https://danielioanitescu92.github.io/covid/" className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-codeview" : "site-info-codeview" }>
                                <img src={localStorage.getItem(`lightTheme`) ? lightgotoview : gotoview} alt="neon light generation" className={ localStorage.getItem(`lightTheme`) ? "lightSite-icon" : "site-icon" }></img>
                                <h3 className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-presenting" : "site-info-presenting" }>View website</h3>
                            </a>
                            <a href="https://github.com/Danielioanitescu92/covid" className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-codeview viewcode" : "site-info-codeview viewcode" }>
                                <img src={localStorage.getItem(`lightTheme`) ? lightgotocode : gotocode} alt="neon light generation" className={ localStorage.getItem(`lightTheme`) ? "lightSite-icon" : "site-icon" }></img>
                                <h3 className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-presenting" : "site-info-presenting" }>View code</h3>
                            </a>
                        </div>
                        <h3>React.js web-app, using W.H.O. database to provide all covid cases form the last 24-hours.</h3>
                        <div className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-divider" : "site-info-divider" } ></div>
                        <i>HTML, CSS, Javascript, React.js</i>
                    </article>

                </aside>

                <aside className="site-four" id="four">

                    <article className="site-avatar">
                        <img src={d} alt="neon light generation"></img>
                    </article>

                    <article className={ localStorage.getItem(`lightTheme`) ? "lightSite-info" : "site-info" }>
                        <h1>SPACE TRAVELERS</h1>
                        <div className="site-info-codeview-div">
                            <a href="https://danielioanitescu92.github.io/spacetravelers/" className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-codeview" : "site-info-codeview" }>
                                <img src={localStorage.getItem(`lightTheme`) ? lightgotoview : gotoview} alt="neon light generation" className={ localStorage.getItem(`lightTheme`) ? "lightSite-icon" : "site-icon" }></img>
                                <h3 className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-presenting" : "site-info-presenting" }>View website</h3>
                            </a>
                            <a href="https://github.com/Danielioanitescu92/spacetravelers" className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-codeview viewcode" : "site-info-codeview viewcode" }>
                                <img src={localStorage.getItem(`lightTheme`) ? lightgotocode : gotocode} alt="neon light generation" className={ localStorage.getItem(`lightTheme`) ? "lightSite-icon" : "site-icon" }></img>
                                <h3 className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-presenting" : "site-info-presenting" }>View code</h3>
                            </a>
                        </div>
                        <h3>React.js web-app, using NASA API to provide rover pictures for each selected date.</h3>
                        <div className={ localStorage.getItem(`lightTheme`) ? "lightSite-info-divider" : "site-info-divider" }></div>
                        <i>HTML, CSS, Javascript, React.js</i>
                    </article>

                </aside>

            </article>

            <article className="dots-div">
                <article className="dots">
                    <a href="#one">
                        <div className={ localStorage.getItem(`lightTheme`) ? "lightDot" : "dot" }></div>
                    </a>
                    <a href="#two">
                        <div className={ localStorage.getItem(`lightTheme`) ? "lightDot" : "dot" }></div>
                    </a>
                    <a href="#three">
                        <div className={ localStorage.getItem(`lightTheme`) ? "lightDot" : "dot" }></div>
                    </a>
                    <a href="#four">
                        <div className={ localStorage.getItem(`lightTheme`) ? "lightDot" : "dot" }></div>
                    </a>
                </article>
            </article>

        </main>
    );
}

export default Main;
