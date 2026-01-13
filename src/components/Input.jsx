export default function Input({ ref, textarea, label, ...props }) {
    const classes = "w-full border-1 p-1 border-b-2 border-r-2 rounded-sm border-black bg-gray-200 text-black focus:outline-none focus:bg-stone-300";
    return (
        <p className="flex flex-col gap-1 my-4 text-black">
            <label className="text-sm font-bold uppercase">
                {label}
            </label>
            {textarea ?
                (<textarea ref={ref} className={classes} {...props} />) :
                (<input ref={ref} className={classes} {...props} />)}
        </p>

    );

}