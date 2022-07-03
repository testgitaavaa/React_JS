import { useState } from "react";

import "./ExpenseForm.css";

export default function ExpenseForm(props) {
    const [enteredTitle, setEnterendTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

//   const [userInput, setUserInput] = useState({
//     enteredTitle: "",
//     enteredAmount: "",
//     enteredDate: "",
//   });


  const titleChageHandler = (event) => {
    setEnterendTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    // Best way to mamange multiple states
    // setUserInput((previousState) =>{
    //     return {
    //         ...previousState,
    //         enteredTitle: event.target.value,
    //     }
    // })
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = event => {
    event.preventDefault();
    
    const expenseData = {
        title : enteredTitle,
        amount : +enteredAmount,
        date : new Date(enteredDate)
    }
    // console.log(expenseData);

    props.onStaveExpenseData(expenseData);

    // Set everything to empty
    setEnterendTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" value={enteredTitle} onChange={titleChageHandler} />
          </div>
          <div className="new-expense__control">
            <label htmlFor="amount">Amount</label>
            <input
              type="number"
              value={enteredAmount}
              min="0.01"
              step="0.01"
              id="amount"
              onChange={amountChangeHandler}
            />
          </div>
          <div className="new-expense__control">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              value={enteredDate}
              min="2019-01-01"
              max="2022-12-31"
              id="date"
              onChange={dateChangeHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </form>
  );
}
