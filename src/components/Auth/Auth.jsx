/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";
import Typed from "typed.js";

const Auth = (props) => {
    const el = React.useRef(null);

    React.useEffect(() => {
        const typed = new Typed(el.current, {
        strings: ['Aman', 'Fleksibel', 'Murah'],
        typeSpeed: 100,
        loop: true
        });

        return () => {
        // Destroy Typed instance during cleanup to stop animation
        typed.destroy();
        };
    }, []);

    const handleBack = () => {
        window.history.back();
    }

    const {children} = props; 
    return (
        <div className={`w-full min-h-screen flex`}>
            {/* image auth */}
            <div className={`w-1/2 min-h-screen relative hidden justify-between items-center lg:flex`}>
                <img src="/img/tower.jpg" alt="Tower" className={`w-full h-full object-cover`} />

                <div className={`bg-[#000000be] w-full h-full absolute z-10 flex justify-center items-start`}>
                    <div className={`w-full h-full px-10 flex flex-col justify-center`}>
                        <h1 className="mb-2 text-white text-[40px] font-bold xl-1365:text-[3vw]">DUDI TKJ</h1>
                        <p className={`w-[400px] text-white text-[22px] font-bold xl-1365:w-[30vw] xl-1365:text-[1.6vw]`}>Bangun Jaringan Telekomunikasi yang <span ref={el} className={`text-blue-700`}></span></p>
                    </div>
                </div>
            </div>
            
            {/* form auth */}
            <form className={`w-full min-h-full lg:w-1/2`}>
                {/* back */}
                <div onClick={handleBack} className={`bg-white w-full py-3 px-4 flex items-center fixed top-0 border-b border-zinc-300 cursor-pointer`}>
                    <img src="/img/icon/back.svg" alt="Icon" className={`w-8`} />
                    <p className={`text-sm ml-2`}>Kembali</p>
                </div>

                {/* container auth */}
                <div className={`w-full min-h-screen flex items-center`}>
                    {children}
                </div>
            </form> 
        </div>
    );
}

const ContainerAuth = (props) => {
    const {children} = props;
    return (
        <div className={`w-full px-4 md:w-[65%] md:mx-auto`}>
            {children}
        </div>
    );
}

const AuthLabel = (props) => {
    const {children} = props;
    return (
        <div className={`w-full mb-4`}>{children}</div>
    );
}

const ContainerAuthInput = (props) => {
    const {children, iconUrl} = props;
    return (
        <div className={`w-full flex items-center mb-9 pb-3 border-b border-zinc-300`}>
            <img src={iconUrl} alt="Icon" className={`w-5 flex-[2] mr-2`} />
            {children}
        </div>
    );
}

const ForgotPassword = (props) => {
    const {children} = props;
    return (
        <div className={`w-full flex justify-between items-center`}>
            <Link className={`text-red-500 font-semibold`} to='/forgot-password'>Lupa Password</Link>
            {children}
        </div>
    );
}

const AuthAction = (props) => {
    const {text, url, textUrl} = props;
    return (
        <div className={`w-full flex justify-center fixed bottom-2 lg:w-1/2`}>
            <p className={`font-semibold`}>{text} <Link className={`text-blue-primary`} to={url}>{textUrl}</Link></p>
        </div>
    );
}

Auth.ContainerAuth = ContainerAuth;
Auth.AuthLabel = AuthLabel;
Auth.ContainerAuthInput = ContainerAuthInput;
Auth.ForgotPassword = ForgotPassword;
Auth.AuthAction = AuthAction;

export default Auth;