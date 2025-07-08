
import pro1 from '../assets/sample.png'
import './Testimonial.css';

const Testimonial = () => {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="testimonial-content">


<div className="testimonial-image">
    <img src={pro1} alt="Niket Gupta" />
</div>



          <div className="testimonial-text">
            <h3>After interviewing candidates on Intervue, we were able to convert at least 5% of people from our application base to hires.</h3>
            <div className="author">
              <strong>Niket Gupta</strong>
              <span>Group head of talent acquisition, Yubi</span>
            </div>
            <a href="#" className="case-study-link">See more customer stories →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
