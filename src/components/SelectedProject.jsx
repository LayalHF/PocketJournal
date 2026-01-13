import Button from "./Button";
import Tasks from "./Tasks";

export default function SelectedProject({ project, onDelete, onAddTask, onDeleteTask, tasks }) {
    const formattedDate = new Date(project.dueDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })
    return (
        <div className="w-full px-5 mt-5 md:w-140 md:mt-16">
            <header className="pb-4 mb-4 border-b-2 border-light-blue">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-black mb-2">{project.title}</h1>
                    <Button className=" bg-salmon" onClick={onDelete}>delete</Button>
                </div>
                <p className="mb-4 text-black">{formattedDate}</p>
                <p className="text-black whitespace-pre-wrap">{project.description}</p>
            </header>
            <Tasks onAdd={onAddTask} onDelete={onDeleteTask} tasks={tasks}></Tasks>
        </div>
    );

}