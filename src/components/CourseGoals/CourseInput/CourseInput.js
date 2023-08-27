import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isvalid, setInvalid] = useState(true)

  const goalInputChangeHandler = event => {
    if(event.target.value.trim().length>0){
      setInvalid(true)
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    if(enteredValue.trim().length === 0){
      setInvalid(false)
      return
    }
    props.onAddGoal(enteredValue);
  };

  return (
    // using inline css

    // <form onSubmit={formSubmitHandler}>
    //   <div className="form-control invalid">
    //     <label style={{color: !isvalid ? 'red' : 'black'}}>Course Goal</label>
    //     <input style={{borderColor : !isvalid ? 'red' : 'black' , background: !isvalid ? 'salmon' : 'transparent'}} type="text" onChange={goalInputChangeHandler} />
    //   </div>
    //   <Button type="submit">Add Goal</Button>
    // </form>

    // dynamically adding class to avoid inline css

    <form onSubmit={formSubmitHandler}>
    <div className={`form-control ${!isvalid ? 'invalid' : ''}`}>
      <label >Course Goal</label>
      <input type="text" onChange={goalInputChangeHandler} />
    </div>
    <Button type="submit">Add Goal</Button>
  </form>
  );
};

export default CourseInput;
