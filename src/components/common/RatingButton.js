import React from 'react';


const RatingButton = ({value,onChange,selected,}) => { 

return(

<>
<li>
    <input
      type='radio'
      id={`num${value}`}
      name='rating'
      value={value}
      onChange={onChange}
      checked={selected === value}
    />
    <label htmlFor={`num${value}`}>{value}</label>
  </li>
</>

)
}

export default RatingButton