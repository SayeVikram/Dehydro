import React from 'react';
import background from './download.png';
import './Home.css';

function Home(){
    

    const styles_1 = {
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        left: "0px",
        top: "300px"
    };

    const styles_2 = {
        position: 'absolute',
        textAlign: 'center',
        width: '100%',
        left: "0px",
        top: "350px"
    };


    return (
    
    <div>
    <body> 
    <section class="bubble">
        <div class='container'>
        <center>
        <h1 style={styles_1}>HEADER FOR THE ABOUT</h1>
        <p style={styles_2}>EXPLAINATION</p>
        </center>
        </div>
    </section>
    </body>   
    </div>
 
    );
}

export default Home;