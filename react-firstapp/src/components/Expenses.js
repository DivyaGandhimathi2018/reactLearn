import ExpenseItem from "./ExpenseItems";
function Expenses() {
  const expense = [
    { title: "Birthday", amount: 2541.03, date: new Date(2022, 9, 12) },
    { title: "Diwali", amount: 7589.15, date: new Date(2022, 9, 24) },
    { title: "Ramzon", amount: 500.15, date: new Date(2022, 3, 2) },
    { title: "Festival", amount: 4785.15, date: new Date(2022, 5, 4) },
  ];

  return (
    <div className="expenses">
      <h1>Let's Get Started!</h1>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
      <ExpenseItem
        title={expense[3].title}
        amount={expense[3].amount}
        date={expense[3].date}
      />
    </div>
  );
}

export default Expenses;
