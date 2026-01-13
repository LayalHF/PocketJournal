
import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

export default function Modal({ ref, children, buttonCaption }) {
    const dialog = useRef();
    // expose methods of this function
    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(<dialog ref={dialog} className="backdrop:bg-stone-900/95 p-4 rounded-md shadow-md m-auto">
        {children}
        <form method="dialog" className="mt-4 text-right">
            <Button className="bg-green">{buttonCaption}</Button>
        </form>
    </dialog>, document.getElementById('modal-root'));
}