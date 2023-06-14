import React from 'react';
import background from './download.png';

function Home(){
    const styles = {
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        left: "0px"
    };

    const styles_1 = {
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        left: "0px",
        top: "300px"
    };

    const back = {
        backgroundImage: `url(${background})`,
        width: '1500px',
        height: '1000px',
        marginRight: '0.8rem'
    };

    return (
    <body style={back}>
            <center>
                
                <h1 style={styles}> Water is one of the most essential ingredients </h1>
                <h1 style={styles_1}> BRUHHH </h1>
            </center>
            
    </body>
    );
}

export default Home;