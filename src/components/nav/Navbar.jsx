/* eslint-disable react/prop-types */
import { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import ButtonSubmit from "../Button/ButtonSubmit";

const Navbar = () => {
    // nav user 
    const [displayNavUser, setDisplayNavUser] = useState('hidden');
    const [opacityCloseNavUser, setopacityCloseNavUser] = useState('opacity-0');
    const [translateOpacityContainerList, settranslateOpacityContainerList] = useState('opacity-0 translate-y-5');

    // show nav user
    const handleShowNavUser = () => {
        setDisplayNavUser('block');
        setTimeout(() => {
            setopacityCloseNavUser('opacity-100');
        }, 10);

        setTimeout(() => {
            settranslateOpacityContainerList('opacity-100 translate-y-0');
        }, 300);
    }

    // close nav user
    const handleCloseNavUser = () => {
        settranslateOpacityContainerList('opacity-0 translate-y-5');

        setTimeout(() => {
            setopacityCloseNavUser('opacity-0');
        }, 310);

        setTimeout(() => {
            setDisplayNavUser('hidden');
        }, 430);
    }

    // ------------------------------------------------------

    // nav mobile
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

    // -------------------------------------------------------

    // ketika di scroll ke bawah 200 px maka nav akan terdapat shadow
    const [showShadow, setShowShadow] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 200) {
            setShowShadow(true);
        } else {
            setShowShadow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <Fragment>
            <nav className={`bg-white w-full py-4 px-4 flex justify-between items-center duration-300 ${showShadow ? 'shadow-md shadow-slate-200' : 'shadow-none' } fixed z-[6] top-0 md:px-8 lg:px-12`}>
            <div className={`flex items-center gap-x-10`}>
                {/* logo */}
                    <Link to='/' className={`font-poppins font-bold mt-1`}>DUDI TKJ</Link>

                {/* list nav desktop */}
                <ul className={`hidden items-center gap-x-3 md:flex`}>
                    <li><Link to='#' className="text-[13px] text-zinc-500 font-medium">Home</Link></li>
                    <li><Link to='#' className="text-[13px] text-zinc-500 font-medium">Paket Layanan</Link></li>
                    <li><Link to='#' className="text-[13px] text-zinc-500 font-medium">Tentang</Link></li>
                </ul>
            </div>

            {/* login dan burger button */}
            <div className={`flex items-center gap-x-4`}>
                {/* jika belum login */}
                {/* <Button paddingResponsive='md:px-5 md:py-2' url='/login'>Login</Button> */}

                {/* jika sudah login */}
                <ButtonSubmit onClick={handleShowNavUser} paddingResponsive='md:px-5 md:py-2' url='/login'>Rizki</ButtonSubmit>

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

        {/* navigasi user yang sudah login */}
        <div className={`w-full h-screen ${displayNavUser} fixed z-30 top-0 right-0 bottom-0 left-0`}>
            <div className={`w-full h-full relative`}>
                {/* close navigasi user */}
                <div onClick={handleCloseNavUser} className={`bg-black-transparent w-full h-full duration-300 ${opacityCloseNavUser}`}></div>

                {/* container list navigasi user */}
                <div className={`bg-blue-primary w-44 py-2 absolute z-10 top-14 right-10 rounded-md duration-300 ${translateOpacityContainerList} md:right-8 md:top-16 lg:right-12`}>
                    <ul>
                        <li>
                            <a href="#" className="flex items-center hover:bg-blue-700">
                                <img src="/img/icon/dashboard.svg" alt="Icon" className="w-5 my-3 mr-2 ml-3" />
                                <p className={`text-white text-[13px] font-semibold`}>Admin Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center hover:bg-blue-700">
                                <img src="/img/icon/dashboard-apps.svg" alt="Icon" className="w-5 h-[22px] my-3 mr-2 ml-3" />
                                <p className={`text-white text-[13px] font-semibold`}>Dashboard</p>
                            </a>
                        </li>
                        <li>
                            <button className="w-full flex items-center hover:bg-blue-700">
                                <img src="/img/icon/logout.svg" alt="Icon" className="w-5 my-3 mr-2 ml-3" />
                                <p className={`text-white text-[13px] font-semibold`}>Logout</p>
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </Fragment>
    );
}

export default Navbar;