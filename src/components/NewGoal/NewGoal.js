import React from 'react';

import './NewGoal.css';

const NewGoal = props => {
    let userInput = ' ';
  const addGoalHandler = event => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: userInput
    };
    props.onAddGoal(newGoal);
    console.log(newGoal);

};

const onUserInput = event =>{
    userInput = event.target.value;
}
  return (
    <form className="new-goal" onSubmit={addGoalHandler}>
      <input type="text" onChange={onUserInput} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default NewGoal;
