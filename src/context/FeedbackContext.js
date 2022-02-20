import {createContext,useEffect,useState} from 'react';
import {v4 as uuidv4} from 'uuid';

const FeedbackContext = createContext();
export const FeedbackProvider = ({children}) => {
  const [isLoading,setIsLoading] = useState(true);
  const [feedback,setFeedback] = useState([]);
  const [editedFeedback,setEditedFeedback] = useState({
    item:{},
    edit:false
  });

    useEffect(() => {

      fetchFeedback();
  
  },[])

  // Fetch feedback
  const fetchFeedback = async() => {
    const response = await fetch('http://localhost:5001/feedback?_sort=id&_order=desc');
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
  }
  
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
    isLoading,
    deleteFeedback,
    addFeedback,
    editFeedback,
    updateFeedback
    }}>
{children}
    </FeedbackContext.Provider>
}

export default FeedbackContext