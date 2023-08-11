/* eslint-disable react/prop-types */
const ButtonSubmit = (props) => {
    const {children, margin, textResponsive, paddingResponsive, bg='bg-blue-primary', fontBold} = props;
    return (
        <button type="submit" className={`w-max ${bg} ${margin} py-1 px-3 rounded text-white text-[13px] relative ${fontBold} ${textResponsive} ${paddingResponsive}`}>{children}</button>
    );
}

export default ButtonSubmit;