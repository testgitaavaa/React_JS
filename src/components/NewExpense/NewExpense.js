import './NewExpense.css';

import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {

    

    const saveExpenseDataHandler = enterdData => {
        let data = {
            ...enterdData,
            id : Math.random().toString()
        }
        props.onSaveExpenseHandler(data);
    };

    return (<div className='new-expense'>
        <ExpenseForm onStaveExpenseData={saveExpenseDataHandler}/>
    </div>)
}

export default NewExpense;