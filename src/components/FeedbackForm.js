import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';


const FeedbackForm = () => { 

let [text,setText] = useState('');
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

return(

<Card>
  <form>
    <h2>How would you rate your service with us?</h2>
    {/* @todo - rating select comp */}
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