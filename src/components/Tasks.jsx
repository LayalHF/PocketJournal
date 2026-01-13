import Button from "./Button";
import NewTask from "./NewTask";

export default function Tasks({ tasks, onAdd, onDelete }) {
    return (
        <section>
            <h2 className="text-2xl font-bold text-black mb-4 ">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks.length === 0 && (<p className="text-black my-4">This project does not have any tasks yet.</p>)}
            {tasks.length > 0 && (<ul className="py-2 flex flex-col px-4 mt-5 rounded-md ">
                {tasks.map((task) => (<li key={task.id} className="pb-5 flex justify-between my-4 border-b border-black-200">
                    <span className="text-black">{task.text}</span>
                    <Button className="bg-orange" onClick={() => onDelete(task.id)}>Clear</Button>
                </li>))}
            </ul>)}

        </section>
    );
}