
import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "How do I schedule an Interview?",
      answer: "You can schedule interviews through our platform by selecting available time slots and interviewers."
    },
    {
      question: "Will I be charged per interview?",
      answer: "Our pricing varies based on the plan you choose. Check our pricing page for detailed information."
    },
    {
      question: "Can I get a trial for On-demand Interviews?",
      answer: "Yes, we offer trial periods for our on-demand interview services. Contact us to get started."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="faq">
      <div className="container">
        <div className="faq-content">
          <div className="faq-left">
            <h2>FAQs</h2>
            <p>Here are frequently asked questions to clear all your doubts.</p>
            <div className="contact-section">
              <h4>Still have doubts?</h4>
              <a href="#" className="contact-link">📞 Talk to our representative</a>
            </div>
          </div>
          <div className="faq-right">
            <div className="faq-list">
              {faqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <button 
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                  >
                    {faq.question}
                    <span className={`faq-toggle ${openFAQ === index ? 'open' : ''}`}>+</span>
                  </button>
                  {openFAQ === index && (
                    <div className="faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
