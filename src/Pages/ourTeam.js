import "./style/team.css";
import { Card } from "../Components/Card.js";

function Team() {
  return (
    <div className="App">
        <div style={{gridColumn:"1/-1"}}><h2>Meet Our Team</h2></div>

      <div id="asas">
        <Card
          imgSrc="https://drive.google.com/thumbnail?id=1K-XICkbYq5_axIki-LA2MWT3dT_zM0ZL"
          imgAlt="Card Image 1"
          title="Secretary"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
           name="Faiz"
           elink="mailto:ayaanshakoor111@gmail.com"
           ilink="https://instagram.com/ayaan_shakoor"
           llink=""
           
           />
        <Card
          imgAlt="Card Image 2"
          imgSrc="https://drive.google.com/thumbnail?id=1xPcFGAUzLd5xXmyEOaNyrfcl_vEfYiyf"
          title="Secretary"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
          name="Namrata"
        />
        </div>
        <Card
               imgSrc="https://drive.google.com/thumbnail?id=1K-XICkbYq5_axIki-LA2MWT3dT_zM0ZL"

          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          name="Sahil"
          ilink="https://instagram.com/sahilshakoor786"
          llink="https://in.linkedin.com/in/sahil-shakoor-270091145"
          elink="mailto:sahilshakoor@gmail.com"
          title="Technical Head"
          plink="tel:+916392063720"
        />
      
        <Card
               imgSrc="https://drive.google.com/thumbnail?id=1K-XICkbYq5_axIki-LA2MWT3dT_zM0ZL"

          imgAlt="Card Image 1"
          title="Card Title"
          buttonText="Learn More"
          link="card1"
          name="Haza"
        />
        <Card
                imgSrc="https://drive.google.com/thumbnail?id=1K-XICkbYq5_axIki-LA2MWT3dT_zM0ZL"

          imgAlt="Card Image 3"
          title="Card Title"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgAlt="Card Image 3"
          imgSrc="https://drive.google.com/thumbnail?id=1K-XICkbYq5_axIki-LA2MWT3dT_zM0ZL"

          description="This is the card description section. You can add more details about the product here"
          link="card2"
        />

        <Card
          imgSrc="https://drive.google.com/thumbnail?id=1K-XICkbYq5_axIki-LA2MWT3dT_zM0ZL"

          imgAlt="Card Image 1"
          buttonText="Learn More"
          link="card1"
        />

        <Card
          imgSrc="https://drive.google.com/thumbnail?id=1K-XICkbYq5_axIki-LA2MWT3dT_zM0ZL"

          imgAlt="Card Image 3"
          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgAlt="Card Image 3"
          imgSrc="https://drive.google.com/thumbnail?id=1K-XICkbYq5_axIki-LA2MWT3dT_zM0ZL"

          description="This is the card description section. You can add more details about the product here"
          buttonText="Learn More"
          link="card2"
        />
        <Card
          imgAlt="Card Image 3"
          imgSrc="https://drive.google.com/thumbnail?id=1K-XICkbYq5_axIki-LA2MWT3dT_zM0ZL"

          description="This is the card description section. You can add more details about the product here"
          link="card2"
        />

    </div>
  );
}

export default Team;