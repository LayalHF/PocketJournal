import Button from "./Button";

export default function ProjectsSidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
    return (

        <aside className="w-3/4 px-2 py-5 md:w-72 md:pl-4 md:pr-2 md:py-10 retro-card bg-navy text-stone-50 rounded-r-xl">
            <h3 className="mb-3 font-semibold uppercase md:mb-6 decoration-4 decoration-salmon underline">Pocket Journal - A Frontend Demo</h3>

            <h2 className="mb-4 md:mb-8 font-bold uppercase md:text-xl text-stone-100 ">Your Projects</h2>
            <div>
                <Button className="bg-purple" onClick={onStartAddProject}>+ Add project</Button>
            </div>
            <ul className="mt-4 md:mt-8">
                {
                    projects.map((project) => {
                        let cssClasses = "w-full text-left px-1 py-1 rounded-sm my-1 text-white font-semibold text-lg hover:text-stone-200 hover:underline hover:decoration-4 hover:decoration-salmon cursor-pointer";
                        if (project.id === selectedProjectId) {
                            cssClasses += " border-2 border-salmon"
                        } else {
                            cssClasses += " text-whtie"
                        }
                        return (<li key={project.id}>
                            <button className={cssClasses}
                                onClick={() => onSelectProject(project.id)}>{project.title}</button>
                        </li>);

                    })
                }
            </ul>
        </aside>

    );
}