import Button from "./Button";
import Input from "./Input"
import Modal from "./Modal"

import { useRef } from "react";

export default function NewProject({ onAdd, onCancel }) {
    const validationModal = useRef();
    const titleRef = useRef();
    const titleDesc = useRef();
    const titleDueDate = useRef();

    function handleSave() {
        const enteredTitle = titleRef.current.value;
        const enteredDesc = titleDesc.current.value;
        const enteredDueDate = titleDueDate.current.value;
        // validation...
        if (enteredTitle.trim() === '' || enteredDesc.trim() === '' || enteredDueDate.trim() === '') {
            // show error modal
            validationModal.current.open();
            return;
        }

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            dueDate: enteredDueDate
        });
    }

    return (
        <>
            <Modal ref={validationModal} buttonCaption="Okay">
                <h2 className="text-xl font-bold text-black my-4">Invalid Input!</h2>
                <p className="text-black mb-4">Oopss.. looks like you forgot to enter a value.</p>
                <p className="text-black mb-4">Please make sure you provide a valid value for every input field.</p>
            </Modal>

            <div className="flex-1 w-full px-4 mt-5 md:flex-none md:mt-30 md:w-140">
                <menu className="flex items-center justify-end gap-4 my-4">
                    <li>
                        <button className="text-black hover:underline hover:decoration-4 hover:decoration-black cursor-pointer" onClick={onCancel} >Cancel</button>
                    </li>
                    <li>
                        <Button className="retro-btn bg-orange px-6 py-2 rounded-md text-black " onClick={handleSave}>Save</Button>
                    </li>
                </menu>
                <div>
                    <Input type="text" ref={titleRef} label="Title" />
                    <Input type="text" ref={titleDesc} label="Description" textarea />
                    <Input type="date" ref={titleDueDate} label="Due Date" />
                </div>
            </div>
        </>
    );

}