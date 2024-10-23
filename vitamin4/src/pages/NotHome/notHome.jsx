import {useState, useEffect} from "react";

function NotHome() {  
    const [count, setCount] = useState(0);

    function increaseCount() {
        setCount(count + 1);
    }

    function decreaseCount() {
        setCount(count - 1);
    }

    useEffect(() => {
        if (count > 5) {
            document.getElementById("overFive").innerText = "You passed 5!";
        } else if (count < 0) {
            setCount(0);
        }
    }, [count]);

    return (
        <>
            <h2>Not Home</h2>
            <p>Counter: {count}</p>
            <button onClick={increaseCount}>Increase</button>
            <button onClick={decreaseCount}>Decrease</button>
            <h2 id="overFive"></h2>
        </>
    );
  };
  
  export default NotHome;
  