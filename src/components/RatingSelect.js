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
    <RatingButton id={'num1'} value={1}
      onChange={handleChange} selected={selected} />

    <RatingButton id={'num2'} value={2}
      onChange={handleChange} selected={selected} />

    <RatingButton id={'num3'} value={3}
      onChange={handleChange} selected={selected} />

    <RatingButton id={'num4'} value={4}
      onChange={handleChange} selected={selected} />

    <RatingButton id={'num5'} value={5}
      onChange={handleChange} selected={selected} />

    <RatingButton id={'num6'} value={6}
      onChange={handleChange} selected={selected} />

    <RatingButton id={'num7'} value={7}
      onChange={handleChange} selected={selected} />

    <RatingButton id={'num8'} value={8}
      onChange={handleChange} selected={selected} />

    <RatingButton id={'num9'} value={9}
      onChange={handleChange} selected={selected} />
      
    <RatingButton id={'num10'} value={10}
      onChange={handleChange} selected={selected} />

</ul>


)
}

export default RatingSelect