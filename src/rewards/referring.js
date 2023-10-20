import React from "react";

const ShareFriends=() =>{

function ShareAndRefer() {
  const [referralCode, setReferralCode] = useState('');
  const [referrals, setReferrals] = useState(0);

  const handleShare = () => {
    setReferrals(referrals + 1);
  };

  return (
    <div>
      <h1>Refer Friends and Earn Rewards</h1>
      <p>Your Referral Code: {referralCode}</p>
      <p>Number of Referrals: {referrals}</p>

      <button onClick={handleShare}>Share with Friends</button>
    </div>
  );
}
}
export default ShareFriends