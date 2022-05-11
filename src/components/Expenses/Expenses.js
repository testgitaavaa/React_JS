import React, { useState } from "react";

import "./Expenses.css";

import Card from "../UI/Card";
import ExpeceItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {

  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedFilter) => {
    setFilteredYear(selectedFilter);
  };

  let filteredYearList = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  })

  let expenseContent = <p>No Expense Found</p>;  
  if(filteredYearList.length > 0) {
    expenseContent = filteredYearList.map((expense) => (
      <ExpeceItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {expenseContent}
      </Card>
    </div>
  );
}
