import React, { useContext, useState,useEffect } from 'react';
import Card from './common/Card';
import Button from './common/Button';
import RatingSelect from './RatingSelect';
import FeedbackContext from '../context/FeedbackContext';


const FeedbackForm = () => { 
const {addFeedback,editedFeedback,updateFeedback} = useContext(FeedbackContext);

  useEffect(() => {
  if(editedFeedback.edit === true){
    setBtnDisabled(false);
    setText(editedFeedback.item.text);
    setRating(editedFeedback.item.rating);
  }
},[editedFeedback])

let [text,setText] = useState('');
let [rating,setRating] = useState(10);
let [btnDisabled,setBtnDisabled] = useState(true);
let [msg,setMsg] = useState('');

const handleTextChange = (e) => {
  if(text === ''){
    setBtnDisabled(true);
    setMsg(null);
  }else if(text !== '' && text.trim().length <= 10){
    setMsg('Text must be at least 10 charcters')
    setBtnDisabled(true);
  }else{
    setMsg(null);
    setBtnDisabled(false);
  }
  setText(e.target.value);
  
}

const onSubmit = (e) => {
e.preventDefault();
if(text.trim().length > 10){
  const newFeedback = {
    text,
    rating
  }
  if(editedFeedback.edit === true){
    updateFeedback(editedFeedback.item.id,newFeedback);
  }else{
    addFeedback(newFeedback);
  }
  setText('')
}
}

return(

<Card>
  <form onSubmit={onSubmit}>
    <h2>So How would you rate 2021 in a nutshell ?</h2>
    <RatingSelect select={(rating) => setRating(rating)} />
    <div className="input-group">
      <input 
      onChange={handleTextChange} type="text" 
      placeholder='Write a review' value={text} />
    <Button isDisabled={btnDisabled} type='submit'>Send</Button>
    </div>
    {msg && <div className='message'>{msg}</div>}
  </form>
</Card>

)
}

export default FeedbackForm