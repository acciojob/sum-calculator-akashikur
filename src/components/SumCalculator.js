import React, { useState } from "react";

const SumCalculator = () => {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);

  const handleNumberChange = (event) => {
    const newNumber = parseFloat(event.target.value);
    if (!isNaN(newNumber)) {
      setNumbers([...numbers, newNumber]);
      calculateSumAsync([...numbers, newNumber]);
    }
  };

  const calculateSumAsync = (numbers) => {
    setTimeout(() => {
      const newSum = numbers.reduce((acc, num) => acc + num, 0);
      setSum(newSum);
    }, 0);
  };

  return (
    <div>
      <h1>Sum Calculator</h1>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={handleNumberChange}
      />

      <div>
        <p>Sum: {sum}</p>
      </div>
    </div>
  );
};

export default SumCalculator;
