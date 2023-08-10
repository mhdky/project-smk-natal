/* eslint-disable react/prop-types */
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
    const {children} = props; 

    const [displayNavMobile, setDisplayNavMobile] = useState('hidden');
    const [translateLisNav, settranslateLisNav] = useState('translate-y-[110%]');
    const [opacityLisNav, setopacityLisNav] = useState('opacity-0');

    // show nav list mobile
    const handleShowNavList = () => {
        setDisplayNavMobile('block');
        setTimeout(() => {
            settranslateLisNav('translate-y-0');
            setopacityLisNav('opacity-100');
        }, 100);
    }

    // close nav list mobile
    const closeNavList = () => {
        settranslateLisNav('translate-y-[110%]');
        setTimeout(() => {
            setDisplayNavMobile('hidden');
            setopacityLisNav('opacity-0');
        }, 500);
    } 

    return (
        <Fragment>
            <nav className={`bg-white w-full py-4 px-4 flex justify-between items-center shadow-md shadow-slate-100 fixed z-[6] top-0 md:px-8 lg:px-12`}>
            <div className={`flex items-center gap-x-10`}>
                {/* logo */}
                    <Link to='/' className={`font-poppins font-bold mt-1`}>DUDI TKJ SMKN 1 NATAL</Link>

                {/* list nav desktop */}
                <ul className={`hidden items-center gap-x-3 md:flex`}>
                    <li><Link to='#' className="text-[13px] text-zinc-500 font-medium">Home</Link></li>
                    <li><Link to='#' className="text-[13px] text-zinc-500 font-medium">Paket Layanan</Link></li>
                    <li><Link to='#' className="text-[13px] text-zinc-500 font-medium">Tentang</Link></li>
                </ul>
            </div>

            {/* login dan burger button */}
            <div className={`flex items-center gap-x-4`}>
                {children}

                {/* button show nav list mobile */}
                <div onClick={handleShowNavList} className={`w-3 h-5 flex flex-col items-center justify-between md:hidden`}>
                    <span className={`bg-black w-1 h-1 rounded-full`}></span>
                    <span className={`bg-black w-1 h-1 rounded-full`}></span>
                    <span className={`bg-black w-1 h-1 rounded-full`}></span>
                </div>
            </div>            
        </nav>

        {/* show nav list mobile */}
            <div className={`bg-[#0000009a] ${displayNavMobile} fixed z-20 top-0 right-0 bottom-0 left-0`}>
            <div className={`w-full h-full relative`}>
                {/* close nav list mobile */}
                <div onClick={closeNavList} className={`w-full h-full absolute z-10`}></div>
                
                {/* list nav mobile */}
                <div className={`w-full px-4 absolute z-20 bottom-4 duration-300 ${translateLisNav} ${opacityLisNav}`}>
                    <div className={`bg-white rounded-xl overflow-hidden sm-430:w-[328px] sm-430:mx-auto`}>
                        <div className={`w-full flex justify-center py-3 font-bold border-b border-slate-300`}>Menu</div>

                        <div className={`my-3`}>
                            <Link to='/' className={`w-full flex justify-center py-2 text-zinc-500 font-bold`}>Home</Link>
                            <Link to='/' className={`w-full flex justify-center py-2 text-zinc-500 font-bold`}>Paket Layanan</Link>
                            <Link to='/' className={`w-full flex justify-center py-2 text-zinc-500 font-bold`}>Tentang</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default Navbar;