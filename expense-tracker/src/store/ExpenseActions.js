import { expenseActions } from "./ExpenseReducers";

export const fetchData = () => {
    return async (dispatch) => {
      const fetchingData = async () => {
        const response = await fetch(
          "https://react-http-91704-default-rtdb.firebaseio.com/Expense.json"
        );
        if (!response.ok) {
          throw new Error("Could not fetch data....");
        }
        const fetchedData = response.json();
        return fetchedData;
      };
      try {
        const ExpenseData = await fetchingData();
        dispatch(
          expenseActions.replaceList({
            expense: ExpenseData.expense || [],
          })
        );
      } catch (error) {
        alert(error)
      }
    };
  };






export const sendData = (Expense) => {
  return async () => {
    const sendingRequest = async () => {
      const response = await fetch(
        "https://react-http-91704-default-rtdb.firebaseio.com/Expense.json",
        {
          method: "PUT",
          body: JSON.stringify({
            expense:Expense
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!response.ok) {
        throw new Error("Sending failed...");
      }
    };

    try {
      await sendingRequest();
    } catch (error) {
      alert("Sending failed");
    }
  };
};
