import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 4, 25),
  },
  {
    id: "e2",
    title: "Truck Insurance",
    amount: 1599.12,
    date: new Date(2023, 0, 5),
  },
];

// function App() {
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHanlder = (expense) => {
    // setExpenses([expense, ...expenses]); // Not recommended
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  // return React.createElement(
  //   "div",
  //   {},
  //   React.createElement("h2", {}, "Let's get started!"),
  //   React.createElement(Expenses, { items: expenses })
  // );
  return (
    <div>
      {/* <h2>Let's get started</h2> */}
      <NewExpense onAddExpense={addExpenseHanlder} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
