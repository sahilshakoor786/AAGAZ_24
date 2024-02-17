import { Carousel } from 'react-carousel-minimal';
import React from 'react';
import "./style/gallery.css"

function Gallery() {
    const data = [
        {
            image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/20220522201931__MG_2794.JPG?raw=true",
            caption: "AAGAZ'22"
        },
        {
            image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2023.32.11.jpg?raw=true",
            caption: "AAGAZ'22"
        },
        {
            image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/football.jpg?raw=true",
            caption: "AAGAZ'22"
        },
        {
            image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2022.50.44.jpg?raw=true",
            caption: "AAGAZ'22"
        },
        {
            image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2022.50.49.jpg?raw=true",
            caption: "AAGAZ'22"
        },
        {
            image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2022.50.46.jpg?raw=true",
            caption: "AAGAZ'22"
        },
        {
            image: "https://github.com/ayushsom1/aagaz-gallery/blob/main/WhatsApp%20Image%202023-03-23%20at%2022.50.47.jpg?raw=true",
            caption: "AAGAZ'22"
        },
    ];

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
    }
    return (
        <div className="App">
            <div style={{ gridColumn:"1/-1",textAlign: "center" }}>
                <h2>MOMENTS</h2>
                {/* <p>AAGAAZ : ANDAAZ : ALFAAZ</p> */}
                <div style={{
                    padding: "0 20px"
                }}>
                    <Carousel
                        data={data}
                        time={1000}
                        width="950px"
                        height="500px"
                        captionStyle={captionStyle}
                        radius="10px"
                        slideNumber={true}
                        slideNumberStyle={slideNumberStyle}
                        captionPosition="bottom"
                        automatic={true}
                        dots={true}
                        // pauseIconColor="white"
                        // pauseIconSize="40px"
                        slideBackgroundColor="#211D21;"
                        slideImageFit="cover"
                        thumbnails={true}
                        thumbnailWidth="100px"
                        style={{
                            textAlign: "center",
                            maxWidth: "850px",
                            maxHeight: "500px",
                            margin: "20px auto",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default Gallery;