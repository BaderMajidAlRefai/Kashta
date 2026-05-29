function Header(){

    return (
        <header>
            <nav className="bg-[#102038]">
                <ul className="flex items-center gap-10 h-12 ml-10">
                    <h1 className="text-2xl text-white select-none"> Kashta </h1>
                    <a href="#"><h2 className="text-white">Home</h2></a>
                    <a href="#"><h2 className="text-white">About Us</h2></a>
                    <a href="#"><h2 className="text-white">Settings</h2></a>
                </ul>
            </nav>
        </header>
    );
}

export default Header