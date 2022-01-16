import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import FeedbackContext from '../context/FeedbackContext';


const FeedbackStats = () => { 
  
  const {feedback} = useContext(FeedbackContext);
// calculate ratings avg
let average = feedback.reduce((acc,cur) => {
return (acc + cur.rating / feedback.length);
},0).toFixed(1).replace(/[.,]0$/, '');



return(

<div className='feedback-stats'>
<h4>{feedback.length} reviews</h4>
<h4>Average Rating: {average}</h4>
</div>

)
}

FeedbackStats.propTypes = {
  feedback: PropTypes.array,
}

export default FeedbackStats