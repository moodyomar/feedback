import React from 'react';


const RatingButton = ({id,value,onChange,selected,}) => { 

return(

<>
<li>
    <input
      type='radio'
      id='num1'
      name='rating'
      value='1'
      onChange={onChange}
      checked={selected === value}
    />
    <label htmlFor='num1'>{value}</label>
  </li>
</>

)
}

export default RatingButton