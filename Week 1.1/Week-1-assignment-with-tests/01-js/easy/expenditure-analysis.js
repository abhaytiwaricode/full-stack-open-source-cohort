/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  const categoryTotal = {};

  // Iterate over each transaction
  transactions.forEach((transaction) => {
    const { category, price } = transaction;

    // If the category already exists, add the price to its total
    if (categoryTotal.hasOwnProperty(category)) {
      categoryTotal[category] += price;
    } else {
      // Otherwise, create a new entry for the category
      categoryTotal[category] = price;
    }
  });

  // Convert the categoryTotal object into an array of objects
  const result = Object.keys(categoryTotal).map((category) => ({
    category, // Include the category name in the object
    totalSpent: categoryTotal[category], // Include the total spent for the category
  }));

  return result;
}

module.exports = calculateTotalSpentByCategory;
