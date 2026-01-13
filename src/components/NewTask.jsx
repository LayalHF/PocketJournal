import { useState } from "react";


export default function NewTask({ onAdd }) {
    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleClick() {
        if (enteredTask.trim() === '') {
            return;
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center gap-1 md:gap-4">
            <input type="text" className="w-50 md:w-64 px-2 py-1 border p-1 border-b-2 border-r-2 rounded-sm border-black bg-gray-200 text-black focus:outline-none focus:bg-stone-300" onChange={handleChange} />
            <button className="text-black hover:text-stone-950 hover:underline hover:decoration-4 hover:decoration-light-blue cursor-pointer " onClick={handleClick}>Add Task</button>
        </div>
    );
}