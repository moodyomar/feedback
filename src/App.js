import { useState } from 'react'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';

import {v4 as uuidv4} from 'uuid';
import Header from './components/Header'
import FeedbackList from './components/FeedbackList'
import FeedbackData from './data/feedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';

import './index.css'

const App = () => { 

let [feedback,setfeedback] = useState(FeedbackData);

const deleteFeedback = (id) => {
  if(window.confirm('are you sure you want to delete?')){
    setfeedback(feedback.filter(item => item.id !== id));
  }
}

const addFeedback = (newFeedback) => {
  newFeedback.id = uuidv4();
  setfeedback([newFeedback,...feedback]);
}

return(
<Router>
<Header />
<div className='container'>
  <Routes>
  <Route exact path="/" element={
    <>
    <FeedbackStats feedback={feedback} />
    <FeedbackForm handleAdd={addFeedback} />
    <FeedbackList feedback={feedback} handleDelete={deleteFeedback}/>
    </>
  }>
  </Route>
<Route path='/about' element={<AboutPage/>} />
</Routes>
<AboutIconLink/>
</div>
</Router>
)
}

export default App