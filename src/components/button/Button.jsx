import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const Button = (props) => {
    const {children, margin, textResponsive, paddingResponsive, bg='bg-blue-primary', fontBold, url} = props;
    return (
        <Link to={url} type="button" className={`w-max ${bg} ${margin} py-1 px-3 rounded text-white text-[13px] relative ${fontBold} ${textResponsive} ${paddingResponsive}`}>{children}</Link>
    );
}

export default Button;