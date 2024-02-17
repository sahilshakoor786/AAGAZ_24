import React from 'react';
// import Popup from 'reactjs-popup';
import './style/merch.css';
// import img1 from "../res/vipPass1.jpeg"
// import img2 from "../res/normalPass.jpeg"
import img from "../res/merch.jpg"
import Button from 'react-bootstrap/Button'
// import Card from 'react-bootstrap/Card'

const merch = () => {
    return (
        <div>
            <div class="container1">
                <img src={img} alt="Avatar" class="image" />
                <div class="overlay">
                    <div class="text2">
                        <p>Greetings Harcourtians!
                            Score big on style and performance with new Aagaz Jerseys! Get ready to ignite your passion and unleash your potential with Aagaz'23, while playing and hosting various universities from across the country .This is the ultimate platform to showcase your talent and make your mark.
                            Are you ready?!
                            Let’s make it happen!
                            Get ready to dominate the game and look great doing it. Wear it with pride and make a statement that’s all yours.<br></br>
                            UPI I'd:-9057348650@ybl
                            <br /><br />
                            For any further query contact:-
                            <br /><br />
                            FAIZ KHAN (3rd CHE)
                            <br /><br />
                            +916393743138
                            <br /><br />
                            +916392063720.</p>
                        <h3><strong>Regards,<br />Sports Sub-council,<br />USAC, HBTU.</strong></h3><br /><br />
                        <Button variant="danger" size="lg">
                            <a style={{ textDecoration: 'none', fontSize: '16px', fontWeight: '600', color: 'white' }} href='https://docs.google.com/forms/d/e/1FAIpQLSfmi3xtwGG3YAwpWxpAp08ZamaBEObvH4rgQTwPLzez2k486w/viewform?usp=sf_link' target='_blank' rel="noopener noreferrer">Book your T-Shirt now</a>
                        </Button><br /><br />
                    </div>
                </div>
            </div>
            <div class="text1">
                <p>Greetings Harcourtians!
                    Score big on style and performance with new Aagaz Jerseys! Get ready to ignite your passion and unleash your potential with Aagaz'23, while playing and hosting various universities from across the country .This is the ultimate platform to showcase your talent and make your mark.
                    Are you ready?!
                    Let’s make it happen!
                    Get ready to dominate the game and look great doing it. Wear it with pride and make a statement that’s all yours.<br></br>
                    UPI I'd:-9057348650@ybl

                    For any further query contact:-
                    FAIZ KHAN (3rd CHE)
                    +916393743138
                    +916392063720.</p><br />
                <h3><strong>Regards,<br />Sports Sub-council,<br />USAC, HBTU.</strong></h3><br /><br />
                <Button variant="danger" size="lg">
                    <a style={{ textDecoration: 'none', fontSize: '16px', fontWeight: '600', color: 'white' }} href='https://docs.google.com/forms/d/e/1FAIpQLSfmi3xtwGG3YAwpWxpAp08ZamaBEObvH4rgQTwPLzez2k486w/viewform?usp=sf_link' target='_blank' rel="noopener noreferrer">Book your T-Shirt now</a>
                </Button>
            </div>
        </div>
    )
}

export default merch