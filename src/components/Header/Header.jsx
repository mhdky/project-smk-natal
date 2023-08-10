import Button from "../Button/Button";

const Header = () => {
    return (
        <div className={`w-full flex items-center relative md:justify-between`}>
            {/* left bar */}
            <div className={`bg-black-transparent w-full h-full absolute z-[1] px-4 flex flex-col justify-center gap-y-5 md:relative md:w-1/2 md:bg-transparent md:pl-0 md:justify-between md:h-[250px] xl-1365:-mt-20`}>
                <h1 className={`text-white text-xl text-center font-bold sm-500:w-[400px] sm-500:mx-auto sm-600:text-2xl md:w-full md:text-black md:text-left md:text-2xl lg:leading-10 xl-1230:text-4xl xl-1365:leading-[50px] xl-1365:text-[40px]`}>Bangun Jaringan Telekomunikasi Bersama Teknisi Profesional</h1>
                <p className={`text-zinc-400 text-center font-semibold sm-500:w-[410px] sm-500:mx-auto sm-600:text-lg md:w-full md:text-left md:text-lg md:-mt-2 lg:leading-8`}>Jaringan Kami Tersebar di Segala Pelosok Desa, Bahkan Di Daerah Yang Sulit Di Jangkau Kami Siap</p>
                <Button margin='mx-auto md:mx-0' textResponsive='sm-600:text-base sm-600:font-medium' paddingResponsive='md:p-2 md:px-5'>Pesan Layanan</Button>
            </div>

            {/* jumbotron */}
            <img src="/img/header.jpg" alt="jumbotron" className={`w-full md:w-1/2 md:h-[37vw] md:rounded-bl-[50px] xl-1365:h-[450px]`} />
        </div>
    );
}

export default Header;