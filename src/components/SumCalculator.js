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
      <h2>Sum Calculator</h2>
      <input
        type="number"
        placeholder="Enter a number"
        onChange={handleNumberChange}
      />
      <div>
        <strong>Numbers:</strong> {numbers.join(", ")}
      </div>
      <div>
        <strong>Sum:</strong> {sum}
      </div>
    </div>
  );
};

export default SumCalculator;
