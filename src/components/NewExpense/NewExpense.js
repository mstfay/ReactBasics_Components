import React, { useState } from "react";

import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
    const [addNewExpense, setNewExpense] = useState(false);

    
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
        setNewExpense(false);
    }

    const showNewExpenseForm = () => {
        setNewExpense(true);
    }

    const closeNewExpenseForm = () => {
        setNewExpense(false);
    }

    let expenseBar = addNewExpense === true ? 
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={closeNewExpenseForm} /> : <button onClick={showNewExpenseForm}>Add New Expense</button>;

    return (
        <div className="new-expense">
            {expenseBar}
        </div>
    )
};

export default NewExpense;