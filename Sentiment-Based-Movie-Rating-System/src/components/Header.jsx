

function Header() {
    return (
        <div className='bg-red-500 container mx-auto flex p-5 justify-between gap-5'>
            <div>hello</div>
            <div className='flex gap-28 justify-between'>
                <div className='bg-green-400 rounded-full '>s</div>
                <div>movie</div>
                <div>movie</div>
                <div>movie</div>
            </div>
            <div>
                <button className='bg-orange-400 p-2 px-4 rounded-lg hover:bg-orange-600 shadow-2xl drop-shadow-xl'>Sign in</button>
            </div>
        </div>
    );
}

export default Header;