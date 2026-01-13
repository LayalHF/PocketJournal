import { NotebookPen } from 'lucide-react';
import Button from "./Button";

export default function NoProjectSelected({ onStartAddProject }) {
    return (
        <div className="flex-1 m-auto px-2 mt-10 md:mt-20 text-center md:w-2/3" >
            {/* <NotebookPen size={100} className="text-salmon object-contain mx-auto" /> */}

            <div className="inline-flex h-16 w-16 items-center justify-center rounded-xl bg-orange text-white border-2 border-black ">
                <NotebookPen size={100} className="h-10 w-10" />
            </div>


            <h2 className="text-xl font-bold my-4 text-black">No Project Selected</h2>
            <p className='text-black mb-4'>Select a project or get started with a new one</p>
            <p className='mt-8'>
                <Button className="bg-light-blue text-black" onClick={onStartAddProject}>Create new project</Button>
            </p>
        </div>
    );
}