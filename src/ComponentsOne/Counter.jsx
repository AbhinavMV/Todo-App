import { useDispatch } from "react-redux";
import { decrement, increment } from "./redux/CounterSlice";

const Counter = () => {

    const dispatch = useDispatch()

    return (
        <>

            <button onClick={() => dispatch(increment())}>increment</button>
            <button onClick={() => dispatch(decrement())}>decrement</button>
        </>
    );
}

export default Counter;