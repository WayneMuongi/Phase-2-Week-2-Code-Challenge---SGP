import React from 'react';
import GoalItem from './DepositForm';

const GoalList = ({ goals, onDelete, onEdit }) => {
  if (goals.length === 0) return <p>No goals added yet.</p>;

  return (
    <div className="goal-list">
      {goals.map(goal => (
        <GoalItem key={goal.id} goal={goal} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default GoalList;
