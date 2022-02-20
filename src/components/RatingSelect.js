import React, { useState,useEffect, useContext } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingButton from './common/RatingButton';

const RatingSelect = ({select}) => { 
const {editedFeedback} = useContext(FeedbackContext);

  useEffect(() => {
    setSelected(editedFeedback.item.rating);
},[editedFeedback])

let [selected,setSelected] = useState(10);

const handleChange = (e) => {
  setSelected(+e.target.value);
  select(+e.target.value);
}

return(

  <ul className='rating'>
    
    {[1,2,3,4,5,6,7,8,9,10].map(num => (
      <RatingButton value={num} onChange={handleChange}
      selected={selected} />
    ))}

</ul>


)
}

export default RatingSelect