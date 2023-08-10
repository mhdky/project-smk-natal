/* eslint-disable react/prop-types */
const Container = (props) => {
    const {children, padding = 'px-4 md:px-8 lg:px-12', width} = props;

    return (
        <div className={`w-full mt-[63px] flex justify-center ${padding}`}>
            <div className={`bg-white w-full h-full xl-1365:w-[1300px] ${width}`}>{children}</div>
        </div>
    );
}

export default Container;