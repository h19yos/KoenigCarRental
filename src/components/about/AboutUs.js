import React from 'react';
import './AboutUs.css';
import HamedAva from '../../images/IMG_0578.jpg'
import ZhanAva from '../../images/IMG_0611.jpg'

function AboutUs() {
  return (
    <div>
      <section className="main">
        <div className="history-text">
          <div>
            <h2>History of Ours</h2>
            <p>"Kill them with success and bury them with a smile"</p>
          </div>
        </div>
      </section>

      <section className="about container">
        <div className="about-text">
          <span>Chapter 1</span>
          <h2>The Genesis of Koenig</h2>
          <p>
            Hamed Frogh and Zhan Asetkazin, both born and raised in Astana, shared a deep-seated
            love for automobiles from a young age. Their journeys were separate, yet intertwined by their
            shared passion for cars. Hamed grew up surrounded by his family's auto repair business,
            where he developed a knack for diagnosing and fixing cars. On the other hand, Zhan's
            fascination with cars was nurtured by his father's vintage car collection, instilling in him an
            appreciation for the artistry and engineering behind these machines.
            The idea for Koenig was born during a late-night conversation between the two friends. They
            realized that despite their different paths, they shared the dream of creating a one-of-a-kind
            automotive destination in Astana. Their vision was to build a multifunctional company that
            would offer an array of services and products, catering to the diverse needs of car enthusiasts
            and owners in the city.
          </p>
        </div>
        <div className="about-img">
          <img src="sourses/Ferrari_Tuning_Mansory_F9XX.jpg" alt="" />
        </div>
      </section>

      <section className="about container">
        <div className="about-img">
          <img src="sourses/Ferrari_Tuning_Mansory_Monza_SP2.jpg" alt="" />
        </div>
        <div className="about-text">
          <span>Chapter 2</span>
          <h2>Koenig's Journey Begins</h2>
          <p>
            Hamed and Zhan's vision became a reality when they pooled their resources and secured a
            strategic location in Astana. The Koenig facility was carefully designed and constructed to
            encompass all aspects of the automotive world under one roof. It quickly became a landmark
            in the city.
            The spacious and modern showroom of Koenig showcased an impressive collection of both
            new and used cars, reflecting the founders' commitment to providing a diverse range of
            options to their customers. From luxurious sedans to rugged SUVs and high-performance
            sports cars, Koenig had it all.
          </p>
        </div>
      </section>

      <section className="about container">
        <div className="about-text">
          <h2>Co-Founders</h2>
          <p>
            In the heart of the bustling capital city of Astana, Kazakhstan, automotive enthusiasts and car
            owners have found their sanctuary at "Koenig," a multifunctional automotive company that
            has redefined the automotive experience in the region. Founded by two visionary
            entrepreneurs, Hamed Frogh and Zhan Asetkazin, Koenig stands as a testament to their
            unwavering passion for cars and their commitment to delivering top-notch services and
            products to the local community.
          </p>
        </div>
        <div className="cards">
          <div className="card" style={{ width: '18rem', background: '#212529' }}>
            <img src={HamedAva} className="card-img-top" alt="Ars" />
            <div className="card-body">
              <h5 className="card-title">Hamed Frogh</h5>
              <p className="card-text">Student: Astana IT University <br />20 y.o., Co-Founder</p>
            </div>
          </div>
        </div>
        <div className="card" style={{ width: '18rem', background: '#212529'}}>
          <img src={ZhanAva} className="card-img-top" alt="Zhns" />
          <div className="card-body">
            <h5 className="card-title">Zhan Asetkazin</h5>
            <p className="card-text">Student: Astana IT University <br />19 y.o., Co-Founder</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;
