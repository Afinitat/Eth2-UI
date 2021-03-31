function updateTextInput(val) {
  let minStaking = 32;
  let ethValue = 1725;
  let percentageStaked = 0.05;
  let percentageReward = 0.07;

  document.getElementById('amountInput').value = val;
  document.getElementById('validatorsInput').value = val / minStaking;
  document.getElementById('valueInput').value = val * ethValue;
  document.getElementById('stakedInput').value = val * ethValue * percentageStaked;
  document.getElementById('rewardInput').value = (Math.round((val * percentageReward) * 100) / 100).toFixed(6);
}
