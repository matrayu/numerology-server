import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RegisterForm from '../RegisterForm/RegisterForm';
import './HomeSplash.css';

class HomeSplash extends Component {
    render() {
        return (
            <main className='home-page-wrapper' role="main">
                <section className='section section--one'>
                    <div className='section--one__text-box u-center-text'>
                        <h1 className='heading-primary u-margin-bottom-medium'>
                            <span className='heading-primary--main u-margin-bottom-small heading-primary--main-desktop'>What is Numerology?</span>
                            <span className='heading-primary-sub'>Numerology is technology dating back many centuries, to at least Pythagoras in the sixth century B.C., and probably even farther back to the peoples of ancient Egypt, China or India.</span>
                        </h1>
                    </div>
                </section>
                <section className='section section--two'>
                    <div className='heading-text-box u-center-text u-margin-bottom-big'>
                        <h3 className='heading-text-box--tertiary'>Do you have a desire to know who you really are?</h3>
                        <h2 className='heading-text-box--secondary'>Numerology Will Unlock The Mysteries of Life</h2>
                    </div>
                    <div className='section--two__cards u-margin-bottom-medium'>
                        <div className='card'>
                            <img src="https://picsum.photos/200" alt="Card 1" class="img card--1-img"></img>
                            <div className='card__text-box'>
                                <p className='card__main-text u-margin-bottom-small'>Experience numerology</p>
                                <p className='card__sub-text'>Come take a journey and experience the wonders of numerology, combining ancient wisdom and 21st century technology.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="https://picsum.photos/201" alt="Card 2" class="img card--2-img"></img>
                            <div className='card__text-box'>
                                <p className='card__main-text u-margin-bottom-small'>Deep Insights</p>
                                <p className='card__sub-text'>Using just two data points, you'll create an interactive numerology chart, unlocking a welth of infomation about your personality, your inner self, what makes you tick, where your hidden talents lie, and so much more.</p>
                            </div>
                        </div>
                        <div className='card'>
                            <img src="https://picsum.photos/202" alt="Card 3" class="img card--3-img"></img>
                            <div className='card__text-box'>
                                <p className='card__main-text u-margin-bottom-small'>Card 1 Text</p>
                                <p className='card__sub-text'>Card 3 Subtext</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='section section--three'>
                    <div className='heading-text-box u-center-text u-margin-bottom-big'>
                        <h3 className='heading-text-box--tertiary'>How It Works</h3>
                        <h2 className='heading-text-box--secondary u-margin-bottom-medium'>A road map to the future</h2>
                        <div className='how-it-works how-it-works--1 u-margin-bottom-big'>
                            <div className='how-it-works__text-container'>
                                <p className='how-it-works__text--pre'>Personality</p>
                                <p className='how-it-works__text--main u-margin-bottom-small'>Your Name</p>
                                <p className='how-it-works__text--sub'>The numbers hidden in your name describe your personality, your inner self, what makes you tick, how others see you, and wehre your hidden talets lie.</p>
                            </div>
                            <div className='how-it-works__img-container'>
                                <img src="https://picsum.photos/300" alt="How It Works 1" class="img how-it-works__img1"></img>
                            </div>
                        </div>
                        <div className='how-it-works how-it-works--2 u-margin-bottom-big'>
                            <div className='how-it-works__img-container'>
                                <img src="https://picsum.photos/301" alt="How It Works 1" class="img how-it-works__img1"></img>
                            </div>
                            <div className='how-it-works__text-container'>
                                <p className='how-it-works__text--pre'>Opportunity</p>
                                <p className='how-it-works__text--main u-margin-bottom-small'>Your Birth Date</p>
                                <p className='how-it-works__text--sub'>Your birth date describes the influences, opportinuties, and obstacles that will be present during your life. It can show you what alternative are available to you and what the probable outcome of each will be.</p>
                            </div>
                        </div>
                    </div>
                </section>
                <div className='signup__btn'>
                    <Link className='btn btn--blue' to='/register'>Create My Chart</Link>
                </div>
            </main>
        )
    }
}

export default HomeSplash