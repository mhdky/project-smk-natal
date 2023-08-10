/* eslint-disable react/prop-types */
const Button = (props) => {
    const {children, margin, textResponsive, paddingResponsive} = props;
    return (
        <button type="button" className={`w-max bg-blue-primary ${margin} py-1 px-3 rounded text-white text-[13px] ${textResponsive} ${paddingResponsive}`}>{children}</button>
    );
}

export default Button;