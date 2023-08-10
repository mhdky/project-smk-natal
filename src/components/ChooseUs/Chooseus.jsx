/* eslint-disable react/prop-types */
const ChooseUs = (props) => {
    const {children} = props;
    
    return (
        <div className={`bg-slate-primary w-full px-4 py-12 lg:py-20`}>
            {/* name section */}
            <h1 className={`text-xl text-center font-semibold mb-8 lg:text-3xl lg:mb-14`}>Mengapa Memilih Kami</h1>

            <div className={`w-full flex flex-wrap justify-center gap-4 md:grid md:grid-cols-3 lg:w-[900px] lg:mx-auto xl-1100:w-[1000px]`}>
                {children}
            </div>
        </div>
    );
}

const FeaturedSection = (props) => {
    const {icon, nameSection, unggul} = props;

    return (
        <div className={`bg-white w-[47%] p-4 flex flex-col justify-between items-center gap-y-3 border border-zinc-100 rounded-md md:w-full xl-1100:p-12 xl-1100:gap-y-4`}>
            <img src={icon} alt="Icon" className={`w-7 lg:w-14`} />
            <h1 className={`text-sm font-semibold lg:text-2xl`}>{nameSection}</h1>
            <p className={`text-zinc-600 text-[11px] text-center flex-grow lg:text-sm xl-1100:text-[13px]`}>{unggul}</p>
        </div>
    )
}

ChooseUs.FeaturedSection = FeaturedSection;

export default ChooseUs;