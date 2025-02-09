import React,{useState} from 'react';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  // const CourseGoals = [
  //   {id:'cg1',text:'Finish the Course '},
  //   {id:'cg2',text:'Learn all about the Course Main Topic '},
  //   {id:'cg3',text:'Help other students in the Course Q&A '},
  // ]
  const[CourseGoals,setCourseGoals] = useState([
    {id:'cg1',text:'Finish the Course '},
    {id:'cg2',text:'Learn all about the Course Main Topic '},
    {id:'cg3',text:'Help other students in the Course Q&A '},
  ])

  const addNewGoalHandler = (newGoal) =>{
      // CourseGoals.push(newGoal);
      // setCourseGoals(CourseGoals.concat(newGoal))
      // setCourseGoals(((prevCourseGoals)=>{
      //   return prevCourseGoals.concat(newGoal)
      // }))
      setCourseGoals(((prevCourseGoals)=> prevCourseGoals.concat(newGoal)))
      console.log(CourseGoals,"CourseGoals");
      
  }
  return (
    <div className="course-goals">
      <h2>Course Goals</h2>
       {/* <ul className="goal-list">
      <li>Finish the Course</li>
      <li>Learn all about the Course Main Topic</li>
      <li>Help other students in the Course Q&amp;A</li>
    </ul> */}
    <NewGoal onAddGoal={addNewGoalHandler}/>
      <GoalList Goals={CourseGoals}/>
    </div>
  );
};

// class App extends React.Component {
//   render(){
//     return <h1 title='i am attribute'> hi i am traditional class</h1>
//   }
// }
export default App;
