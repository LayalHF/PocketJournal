export default function Button({ children, className, ...props }) {

    let buttonClass = "retro-btn font-semibold retro-card px-6 py-2 hover:bg-stone-950 rounded-md ";
    buttonClass += className;
    return <button {...props} className={buttonClass}>{children}</button>;
}