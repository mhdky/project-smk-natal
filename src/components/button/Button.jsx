/* eslint-disable react/prop-types */
const Button = (props) => {
    const {children, margin, textResponsive, paddingResponsive, bg='bg-blue-primary', fontBold} = props;
    return (
        <button type="button" className={`w-max ${bg} ${margin} py-1 px-3 rounded text-white text-[13px] ${fontBold} ${textResponsive} ${paddingResponsive}`}>{children}</button>
    );
}

export default Button;