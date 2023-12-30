import React from "react";
import teamMemberImage from "../media/Andrew.jpg";
import { BsLinkedin, BsTwitter } from "react-icons/bs";
import { Container } from "react-bootstrap";

import '../Css/AboutUs.css';

export function AboutUs() {
    return (
        <>

            <body class="AboutUsbody" style={{ height: '300vh' }}>
                <section className="section-white mt-5">
                    <div className="container_text-center" style={{ background: '#fff',paddingBottom: '20px' }}>
                        <h1>About Us</h1>
                        <p>Who are we</p>
                        <Container>
                            <h5>TechBlendLiving redefines the way we engage with technology by curating a diverse array of features that 
                                cater to the modern lifestyle. From smart home solutions to personalized tech experiences, we strive to 
                                enhance convenience, comfort, and connectivity in every aspect of daily life. Dive into a world where 
                                intelligent technology seamlessly integrates with your living spaces, making every moment smarter, safer, 
                                and more enjoyableAt TechBlendLiving, we believe in the power of tech fusion – the harmonious integration
                                of innovation into our daily routines Our project not only introduces state-of-the-art technologies but also
                                cultivates a community centered around the shared vision of a tech-enhanced lifestyle. Discover a blend of 
                                creativity, functionality, and connectivity that transforms the ordinary into the extraordinary.

                            </h5>
                            <h5>
                              Explore a new era of living with TechBlendLiving, where the boundaries between the physical and digital worlds
                              fade away. Our project stands as a testament to the endless possibilities when technology is thoughtfully woven
                              into the fabric of everyday life. Join us on this journey of discovery, where your living spaces become an 
                              immersive playground of technological wonders
                            </h5>
                        </Container>
                    </div>
                </section>
                <section className="section-white mt-5">
                    <div className="container" style={{ background: '#e8e8e8' }}>
                        <div className="row">
                            <div className="section-white mt-5 text-center">
                                <h2 className="section-title">Meet The Team</h2>
                                <p className="section-subtitle mt-3"><strong>In our collaborative workspace, every team member is a vital piece of the puzzle.</strong><br></br>
                                    <strong>Let's introduce you to the individuals who make it all happen.</strong></p>
                            </div>

                            <div className="col-md-12">
                                <div className="team-item" style={{ margin: '20px 0' }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={teamMemberImage} className="team-img" style={{ width: '30%', height: '30vh', marginBottom: '20px'  }} alt="pic" />
                                            <h3 style={{ cursor: 'pointer', transition: 'color 0.3s' }} className="team-member-name">
                                                Shoeb Afsar
                                            </h3>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="container mt-4">
                                                <p >Something about Team Member 1.</p>
                                            </div>
                                            <div className="social-icons">
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;
                                                <span className="icon-space"></span> {/* Add space between text and icons */}
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                            <div className="col-md-12">
                                <div className="team-item" style={{ margin: '20px 0' }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={teamMemberImage} className="team-img" style={{ width: '30%', height: '30vh', marginBottom: '20px' }} alt="pic" />
                                            <h3 style={{ cursor: 'pointer', transition: 'color 0.3s' }} className="team-member-name">
                                                Shoeb Afsar
                                            </h3>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="container mt-4">
                                                <p>Something about Team Member 1.</p>
                                            </div>
                                            <div className="social-icons">
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;
                                                <span className="icon-space"></span> {/* Add space between text and icons */}
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="team-item" style={{ margin: '20px 0' }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={teamMemberImage} className="team-img" style={{ width: '30%', height: '30vh', marginBottom: '20px' }} alt="pic" />
                                            <h3 style={{ cursor: 'pointer', transition: 'color 0.3s' }} className="team-member-name">
                                                Shoeb Afsar
                                            </h3>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="container mt-4">
                                                <p>Something about Team Member 1.</p>
                                            </div>
                                            <div className="social-icons">
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;
                                                <span className="icon-space"></span> {/* Add space between text and icons */}
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div><div className="col-md-12">
                                <div className="team-item" style={{ margin: '20px 0' }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={teamMemberImage} className="team-img" style={{ width: '30%', height: '30vh', marginBottom: '20px' }} alt="pic" />
                                            <h3 style={{ cursor: 'pointer', transition: 'color 0.3s' }} className="team-member-name">
                                                Shoeb Afsar
                                            </h3>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="container mt-4">
                                                <p>Something about Team Member 1.</p>
                                            </div>
                                            <div className="social-icons">
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;
                                                <span className="icon-space"></span> {/* Add space between text and icons */}
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12">
                                <div className="team-item" style={{ margin: '20px 0' }}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <img src={teamMemberImage} className="team-img" style={{ width: '30%', height: '30vh', marginBottom: '20px' }} alt="pic" />
                                            <h3 style={{ cursor: 'pointer', transition: 'color 0.3s' }} className="team-member-name">
                                                Shoeb Afsar
                                            </h3>

                                        </div>
                                        <div className="col-md-6">
                                            <div className="container mt-4">
                                                <p>Something about Team Member 1.</p>
                                            </div>
                                            <div className="social-icons">
                                                <a href="#" className="BsLinkedin">
                                                    <BsLinkedin className="linkedin-icon" />
                                                    LinkedIn
                                                </a>&nbsp;
                                                <span className="icon-space"></span> {/* Add space between text and icons */}
                                                <a href="#" className="BsTwitter">
                                                    <BsTwitter className="twitter-icon" />
                                                    Twitter
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </section >


            </body >

        </>
    );
}