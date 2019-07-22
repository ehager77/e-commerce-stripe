import React from 'react';
import Hero from '../../components/hero/hero.component'
import Directory from '../../components/directory/directory.component'
import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <Hero/>
        <h1 className='collection-header'>Our Collections</h1>
        <Directory/>

    </div>
)

export default HomePage;
