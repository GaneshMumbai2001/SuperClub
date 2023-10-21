import React, { useState, useEffect } from 'react';

function EarnButton() {
  const [rewardsEarned, setRewardsEarned] = useState(0);

  const handleEarnClick = () => {
    // Increment rewards earned and call external reward function
    setRewardsEarned(rewardsEarned + 1);
    earnReward();
  };

  // Load external scripts when the component mounts
  useEffect(() => {
    // Load 'reward.js' script
    const rewardScript = document.createElement('script');
    rewardScript.src = '/path-to-reward.js';
    rewardScript.async = true;
    document.body.appendChild(rewardScript);

    // Load 'learnreward.js' script
    const learnRewardScript = document.createElement('script');
    learnRewardScript.src = '/path-to-learnreward.js';
    learnRewardScript.async = true;
    document.body.appendChild(learnRewardScript);
  }, []);

  return (
    <div>
      <button onClick={handleEarnClick}>Earn</button>
      <p>You have earned: {rewardsEarned} points.</p>
    </div>
  );
}

export default EarnButton;
