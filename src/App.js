import { useState } from 'react'
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import './index.css'

const App = () => { 

let [feedback,setfeedback] = useState(FeedbackData);

const deleteFeedback = (id) => {
  if(window.confirm('are you sure you want to delete?')){
    setfeedback(feedback.filter(item => item.id !== id));
  }
  
}

return(
<>
<Header />
<div className='container'>
  <FeedbackStats feedback={feedback} />
  <FeedbackForm />
<FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
</div>
</>
)
}

export default App