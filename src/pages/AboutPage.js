import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/common/Card';


const AboutPage = () => { 

return(

<Card>
  <div className="about">
    <h1>About this Project</h1>
    <p>This is a react app to leave a feedback for a product or a service</p>
    <p>Version: 1.0.0</p>
    <p>
      <Link to="/">Back to Home</Link>
    </p>
  </div>
</Card>

)
}

export default AboutPage