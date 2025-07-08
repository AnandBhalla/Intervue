import './Products.css';
import pro1 from '../assets/pro1.png'
import pro2 from '../assets/pro2.png'
import pro3 from '../assets/pro3.png'
const Products = () => {
  return (
    <section className="products">
      <div className="products-container">
        <h2>Explore more products on Intervue</h2>

        <div className="products-grid">
          <div className="product-card">
            <img src={pro1} alt="" />
            <h3>On-demand</h3>
            <p>Save 90% of engineering & recruitment bandwidth, outsource candidate interviews to us</p>
            <a href="#" className="product-link">Know more →</a>
          </div>
          <div className="product-card">
            <img src={pro2} alt="" />
            <h3>Live Interviews</h3>
            <p>Assess candidates in real-time with our live coding enviroment and integrated video calls</p>
            <a href="#" className="product-link">Know more →</a>
          </div>
          <div className="product-card">
            <img src={pro3} alt="" />
            <h3>Assesments</h3>
            <p>Share assesments accros batches with MCQ, Programming and Subjective questions.</p>
            <a href="#" className="product-link">Know more →</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
