import { HeaderIcon } from "./HeaderIcon";

const Header = () => {

    return (
        <header className="flex flex-col justify-center w-full h-16 bg-header-color pl-10">
            <HeaderIcon /> 
        </header>
    )
}


export { Header };