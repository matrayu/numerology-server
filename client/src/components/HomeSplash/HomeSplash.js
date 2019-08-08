import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomeSplash.css';

class HomeSplash extends Component {
    render() {
        
        return (
            <main className='HomeSplash' role="main">
                <section className='section'>
                    <div>
                        <h1>What is Numerology?</h1>
                        <h2>Numerology is technology dating back many centuries, to at least Pythagoras in the sixth century B.C., and probably even farther back to the peoples of ancient Egypt, China or India.</h2>
                    </div>
                </section>
                <section className='section'>
                    <div>
                        <h3>Do you have a desire to know who you really are? To find out what really motivates you? To understand the lessons you must learn?</h3>
                        <h2>Numerology Will Unlock The Mysteries of Life</h2>
                    </div>
                    <div>
                        <h3>Using just two data points, we'll create a numerology chart which will provide a wealth of infomation about yourself.</h3>
                        <h2>Experience numerology and gain deep insights.</h2>
                    </div>
                    <div>
                        <div className='card'>
                            <img src="https://picsum.photos/200" alt="Card 1" className="img"></img>
                            <div className='card__text'>
                                <h3>Motivation Number</h3>
                                <p>Your motivation number will describe the motive behind the decisions you make and the way you act. It's what makes you tick.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="https://picsum.photos/201" alt="Card 2" className="img"></img>
                            <div className='card__text'>
                                <h3>Inner-self Number</h3>
                                <p>Your inner-self number revels what your secret dreams are made of, how the inner person within you pictures yourself. It is often the first impression other people obtain of you before getting to know you.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="https://picsum.photos/202" alt="Card 3" className="img"></img>
                            <div className='card__text'>
                                <h3>Expression Number</h3>
                                <p>Your expression number will describe how you interact with other people. It tells how you best express yourself in life and where your talents lie.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="https://picsum.photos/203" alt="Card 4" className="img"></img>
                            <div className='card__text'>
                                <h3>Karmic Lessons</h3>
                                <p>Your karmic lessons describe the things you are supposed to learn in this life.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="https://picsum.photos/204" alt="Card 5" className="img"></img>
                            <div className='card__text'>
                                <p>Hidden Tendencies</p>
                                <p>Your hidden tendencies describe desires to which you have been exposed to in the past. Because of their overemphasis in your chart, they must be watch so you do not go overboard with them.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="https://picsum.photos/205" alt="Card 6" className="img"></img>
                            <div className='card__text'>
                                <h3>Subconscious Response</h3>
                                <p>Your subconscious response number tells how you instinctively and automatically react when faced with an emergency situation.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section'>
                    <div>
                        <h3>How It Works</h3>
                        <h2>A road map to the future</h2>
                        <div>
                            <div>
                                <h3>Personality</h3>
                                <p>Your Name</p>
                                <p>The numbers hidden in your name describe your personality, your inner self, what makes you tick, how others see you, and where your hidden talents lie.</p>
                            </div>
                            <div>
                                <img src="https://picsum.photos/300" alt="How It Works 1" className="img"></img>
                            </div>
                        </div>
                        <div>
                            <div>
                                <h3>Opportunity</h3>
                                <p>Your Birth Date</p>
                                <p>Your birth date describes the influences, opportinuties, and obstacles that will be present during your life. It can show you what alternatives are available to you and what the probable outcome of each will be.</p>
                            </div>
                            <div>
                                <img src="https://picsum.photos/301" alt="How It Works 1" className="img"></img>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='signup__btn'>
                    <Link to='/register'>Create My Chart</Link>
                </div>
            </main>
        )
    }
}

export default HomeSplash