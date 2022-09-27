import React from 'react';
import Layout from './Layout';
import Menu from './Menu';
import CorporateMenu from './CorporateMenu';
import Newsletter from './Newsletter';
import './Home.css';
import poachedEgg from '../img/poachedegg.jpeg';
import wineAndCheese from '../img/wineandcheese.jpeg';
import terrace from '../img/terrace.jpeg';
import ScrollUpBtn from './ScrollUpBtn';


function Home() {
  return (
        <Layout>
            <div className='home'>
                <div className='home-top'>
                    <div className='home-top-left'>
                        <img className='poached-egg' src={ poachedEgg } alt='poachedEgg' />
                        <p className='home-opening'>Monday - Saturday: 13:00 - 00:00 and Sunday 13:00 - 18:00</p>
                    </div>
                    <div className='home-top-right'>
                        <p className='home-top-rigth-article'>Maison dorée hospitality is tailor made just for you. Whether you're planning a corporate event, press conference, coffee break, lunch break or a private event, Maison dorée is the perfect choice.</p>
                        <img className='wine-and-cheese' src={ wineAndCheese } alt='wineAndCheese' />
                    </div>
                </div>
                <div className='home-bottom'>
                    <div className='home-bottom-left'>
                        <img className='terrace' src={ terrace } alt='terrace' />
                    </div>
                    <div className='home-bottom-right'>
                        <h1 className='home-bottom-right-title'>restaurant</h1>
                        <p className='home-buttom-rigth-article'>The Chefs are your hosts, and together with the Masion dorée team they ensure that each and every visit is unforgattable. It's not simply a meal, it's hospitality through an incredible meal. Delicious food, prepared with expertiese, passion and experience. Masion dorée doesn't come with instructions: indulge any way you please.</p>
                    </div>
                </div>
            </div>
            <Menu />
            <CorporateMenu />
            <Newsletter />
            <ScrollUpBtn />
        </Layout>
  )
}

export default Home