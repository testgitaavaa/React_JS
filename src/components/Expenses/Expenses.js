import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
// import ExpeceItem from "./ExpenseItem";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedFilter) => {
    setFilteredYear(selectedFilter);
  };

  let filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  

  return (
    <div>
      <li>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items = {filteredExpenses}/>
      </Card>
      </li>
    </div>
  );
}
