import './ExpenseItem.css';

function ExpenseItem(){
    return (
        <div className="expense-item">
            <div>Jan 1th 2023</div>
            <div className="expense-item_description">
                <h2>Car Insurance</h2>
                <div className="expense-item_price">$294.67</div>
            </div>
        </div>       
    );
}

export default ExpenseItem;