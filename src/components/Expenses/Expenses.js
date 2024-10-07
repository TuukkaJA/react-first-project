import React, { useState }from 'react';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        //console.log('Expenses.js');
        //console.log(selectedYear);
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    /*{filteredExpenses.length === 0 && <p> No expenses found.</p>}
    {filteredExpenses.length > 0 && 
        filteredExpenses.map((expense) => (
        <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    )) 
    )}*/

    /*return (
        <Card className="expenses">
            <ExpensesFilter
             selected={filteredYear} 
             onChangeFilter={filterChangeHandler} 
            />
            {filteredExpenses.length === 0 ? (
                <p>No expenses found.</p>
            ) : ( 
            filteredExpenses.map((expense) => (
                <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
                />
            )) 
            )}
        </Card>
    );
}*/
return (
    <Card className="expenses">
        <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
    </Card>
    );
}
export default Expenses;