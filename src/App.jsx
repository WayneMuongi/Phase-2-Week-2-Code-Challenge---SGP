
import { useEffect, useState } from "react";
import GoalForm from "./components/GoalForm";
import GoalList from "./components/GoalList";
import Overview from "./components/Overview";


const API_URL = "http://localhost:3000/goals";

function App() {
  const [goals, setGoals] = useState([]);


  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setGoals(data))
      .catch((error) => console.error("Error fetching goals:", error));
  }, []);

  const addGoal = (newGoal) => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGoal),
    })
      .then((res) => res.json())
      .then((data) => setGoals((prevGoals) => [...prevGoals, data]));
  };

  const updateGoal = (id, updatedFields) => {
    fetch(`${API_URL}/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFields),
    })
      .then((res) => res.json())
      .then((updatedGoal) => {
        setGoals((prevGoals) =>
          prevGoals.map((goal) =>
            goal.id === id ? updatedGoal : goal
          )
        );
      });
  };

  
  const deleteGoal = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
    }).then(() => {
      setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
    });
  };
  

  return (
<div className="container">
  <h1>Smart Goal Planner!!</h1>
  <GoalForm onAddGoal={addGoal} />
  <Overview goals={goals} />
  <GoalList goals={goals} onUpdate={updateGoal} onDelete={deleteGoal} />
</div>
  );
}

export default App;

