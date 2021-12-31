import React, { useState } from 'react';
import Card from './common/Card';
import Button from './common/Button';


const FeedbackForm = () => { 

let [text,setText] = useState('')

const handleTextChange = (e) => {
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
    <Button type='submit'>Send</Button>
    </div>
  </form>
</Card>

)
}

export default FeedbackForm