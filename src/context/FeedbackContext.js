import {createContext,useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();
export const FeedbackProvider = ({children}) => {
  const [feedback,setFeedback] = useState([
    {
    id:1,
    text:"Great year with a lot of challenges.",
    rating:9,
    },
  ]);
  const [editedFeedback,setEditedFeedback] = useState({
    item:{},
    edit:false
  });
  
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback,...feedback]);
  } ;
  
  const deleteFeedback = (id) => {
    if(window.confirm('are you sure you want to delete?')){
      setFeedback(feedback.filter(item => item.id !== id));
    }
  };
  
    const editFeedback = (item) => {
      setEditedFeedback({
        item,
        edit:true
      })
    }

    const updateFeedback = (id,updItem) => {
      setFeedback(feedback.map((item) => item.id === id ? {...item,...updItem} : item))
      
    }
  
  return <FeedbackContext.Provider value={{
    feedback,
    editedFeedback,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback
    }}>
{children}
    </FeedbackContext.Provider>
}

export default FeedbackContext