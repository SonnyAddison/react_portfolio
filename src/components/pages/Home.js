import React from 'react';
import background from '../../images/homePage.jpg'


export default function Home() {
    return (
        <div style={{ 
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            height: '99vh',
            width: '99vw',
            overflow: 'hidden',
            }}>
            <h1 style={{
                color: 'white',
                fontSize: '100px', 
                textAlign: 'center', 
                paddingTop: '200px'}}
            >Welcome to my Portfolio</h1>
        </div>
    )
}



