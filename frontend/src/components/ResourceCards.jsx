import './ResourceCards.css';

const ResourceCards = () => {
  const resources = [
    {
      level: 'Easy',
      color: 'blue',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Medium',
      color: 'orange',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Hard',
      color: 'green',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Easy',
      color: 'blue',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Medium',
      color: 'orange',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Hard',
      color: 'green',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Easy',
      color: 'blue',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Medium',
      color: 'orange',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Hard',
      color: 'green',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Easy',
      color: 'blue',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Medium',
      color: 'orange',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    },
    {
      level: 'Hard',
      color: 'green',
      title: 'Design a Free Food App',
      description: 'We created this guide after speaking with our community of interviewers, which includes over 100 current and former Amazon engineers, as well as our corpus of mock interviews',
      tags: ['DATA STRUCTURES & ALGORITHMS']
    }
  ];

  return (
    <section className="resources">
      <div className="container">
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className={`resource-card ${resource.level.toLowerCase()}`}>
              <div className="card-header">
                <span className={`level-badge ${resource.color}`}>{resource.level}</span>
                <div className="card-tags">
                  {resource.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <h3>{resource.title}</h3>
              <p>{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;
