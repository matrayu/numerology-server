import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//import RegisterForm from '../RegisterForm/RegisterForm';
import './HomeSplash.css';

class HomeSplash extends Component {
    render() {
        
        return (
            <main className='main-wrapper' role="main">
                <section className='section'>
                    <div>
                        <h1>What is Numerology?</h1>
                        <h3>Numerology is technology dating back many centuries, to at least Pythagoras in the sixth century B.C., and probably even farther back to the peoples of ancient Egypt, China or India.</h3>
                    </div>
                </section>
                <section className='section'>
                    <div>
                        <h3>Do you have a desire to know who you really are?</h3>
                        <h2>Numerology Will Unlock The Mysteries of Life</h2>
                    </div>
                    <div>
                        <div className='card'>
                            <img src="https://picsum.photos/200" alt="Card 1" className="img"></img>
                            <div className='card__text'>
                                <p>Experience numerology</p>
                                <p>Come take a journey and experience the wonders of numerology, combining ancient wisdom and 21st century technology.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="https://picsum.photos/201" alt="Card 2" className="img"></img>
                            <div className='card__text'>
                                <p>Deep Insights</p>
                                <p>Using just two data points, you'll create an interactive numerology chart, unlocking a welth of infomation about your personality, your inner self, what makes you tick, where your hidden talents lie, and so much more.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="https://picsum.photos/202" alt="Card 3" className="img"></img>
                            <div className='card__text'>
                                <p>Card 3 Text</p>
                                <p>Card 3 Subtext</p>
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
                                <p>Personality</p>
                                <p>Your Name</p>
                                <p>The numbers hidden in your name describe your personality, your inner self, what makes you tick, how others see you, and wehre your hidden talets lie.</p>
                            </div>
                            <div>
                                <img src="https://picsum.photos/300" alt="How It Works 1" className="img"></img>
                            </div>
                        </div>
                        <div>
                            <div>
                                <img src="https://picsum.photos/301" alt="How It Works 1" className="img"></img>
                            </div>
                            <div>
                                <p>Opportunity</p>
                                <p>Your Birth Date</p>
                                <p>Your birth date describes the influences, opportinuties, and obstacles that will be present during your life. It can show you what alternative are available to you and what the probable outcome of each will be.</p>
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