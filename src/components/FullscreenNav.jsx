import { useState } from "react";

function MobileNav({open , setOpen}) {
    return (
        <div className={`absolute top-0 left-0 w-screen bg-white transform ${open ? "-translate-y-0": "-translate-y-full"} transtion-transform duration-300 ease-in-out filter`} >
            <div className="flex flex-col justify-center items-center mt-28">
                <a className="text-2xl font-bold text-red-500 my-4" href="#">home</a>
                <a className="text-2xl font-bold hover:text-red-500 my-4" href="#">skills</a>
                <a className="text-2xl font-bold hover:text-red-500 my-4" href="#">works</a>
                <a className="text-2xl font-bold hover:text-red-500 my-4" href="#">about me</a>
                <a className="text-2xl font-bold hover:text-red-500 my-4" href="#">contact</a>
            </div>
        </div>
    )
}

export default function FullscreenNav() {
    const [open , setOpen] = useState(false);
    return (
        <nav className="ml-auto">
            <MobileNav open={open} setOpen={setOpen}/>
                <div className="group z-50 relative w-6 h-6 mt-2 cursor-pointer flex-col justify-between items-center flex" onClick={() => {setOpen(!open)}}>
                <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition dutation-300 ease-in-out ${open ? "rotate-45 translate-y-2.5": ""}`}/>
                <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition dutation-300 ease-in-out ${open ? "w-0" : "w-full"}`} />
                <span className={`h-1 w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition dutation-300 ease-in-out ${open ? "-rotate-45 -translate-y-2.5":""}`}/>
            </div>
        </nav>
    )
}