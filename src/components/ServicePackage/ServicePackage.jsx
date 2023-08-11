import Button from "../Button/Button";

/* eslint-disable react/prop-types */
const ServicePackage = (props) => {
    const {children} = props;
    return (
        <div className={`w-full mb-20`}>
            {/* name section */}
            <h1 className={`text-xl text-center font-semibold mb-8 lg:text-3xl lg:mb-14`}>Paket Layanan</h1>

            <div className={`w-full grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-5 xl-1100:w-[1000px] xl-1100:mx-auto`}>
                {children}
            </div>
        </div>
    );
}

const CardService = (props) => {
    const {children, borderColor='border-zinc-300', marginTop, shadowColor='hover:shadow-slate-400'} = props;
    return (
        <div className={`w-full ${marginTop} px-5 py-12 border ${borderColor} rounded-md flex flex-col justify-center items-center duration-300 hover:-translate-y-3 hover:shadow-md ${shadowColor} relative md:mt-16`}>
            {children}
        </div>
    );
}

const ServiceName = (props) => {
    const {children} = props;
    return (
        <h1 className={`text-lg text-center font-semibold lg:text-2xl lg:mx-auto lg:w-[233px]`}>{children}</h1>
    );
}

const Icon = (props) => {
    const {children} = props;
    return (
        <img src={children} alt="Icon" className={`w-12 my-5 lg:w-16 lg:my-[45px]`} />
    );
}

const Description = (props) => {
    const {children} = props;
    return (
        <p className={`text-center sm-500:w-[400px] md:w-full`}>{children}</p>
    );
} 

const Price = (props) => {
    const {children} = props;
    return (
        <p className={`my-5 text-xl font-semibold lg:my-[45px] lg:text-2xl`}>Rp. {children}</p>
    )
}

const Superior = () => {
    return (
        <div className={`bg-yellow-400 absolute -top-[70px] text-white text-lg font-semibold rounded-md`}>
            <div className={`px-8 py-3 relative`}>
                <p>Terlaris!</p>
                <img src="/img/icon/arrow.svg" alt="Icon" className={`w-10 absolute -bottom-6 left-[35%]`} />
            </div>
        </div>
    );
}

const Custom = () => {
    return (
        <div className={`w-full max-w-[414px] mb-16 -mt-3`}>
            <h1 className={`text-2xl font-semibold`}>Paket Tidak Sesuai?</h1>
            <p className={`text-sm my-4`}>Tenang kami masih memiliki jalan keluar, Anda dapat membuat paket anda sendiri dengan keinginan anda!</p>
            <Button paddingResponsive='px-8 py-3'>Buat Paket Custom</Button>
        </div>
    )
} 

ServicePackage.CardService = CardService;
ServicePackage.ServiceName = ServiceName;
ServicePackage.Icon = Icon;
ServicePackage.Description = Description;
ServicePackage.Price = Price;
ServicePackage.Superior = Superior;
ServicePackage.Custom = Custom;

export default ServicePackage;