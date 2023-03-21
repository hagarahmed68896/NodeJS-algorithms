function seatPassengers(rowsCols, numPassengers) {
  const numRows = rowsCols.length;
  const numCols = Math.max(...rowsCols);

  const seatingPlan = [];
  for (let i = 0; i < numRows; i++) {
    seatingPlan.push(Array(numCols).fill(''));
  }

  let passengerCount = 0;
  for (let col = 0; col < numCols; col++) {
    for (let row = 0; row < numRows; row++) {
      if (rowsCols[row][col] > 0 && passengerCount < numPassengers) {
        // Aisle seat
        if (col === 0 || col === numCols - 1) {
          seatingPlan[row][col] = 'A';
        }
        // Window seat
        else if (row === 0 || row === numRows - 1) {
          seatingPlan[row][col] = 'W';
        }
        // Center seat
        else {
          seatingPlan[row][col] = 'C';
        }
        passengerCount++;
      }
    }
  }

  return seatingPlan;
}

const rowsCols = [
  [3, 4],
  [4, 5],
  [2, 3],
  [3, 4],
];
const numPassengers = 30;

const seatingPlan = seatPassengers(rowsCols, numPassengers);
console.log(seatingPlan);
