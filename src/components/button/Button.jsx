/* eslint-disable react/prop-types */
const Button = (props) => {
    const {children} = props;
    return (
        <button type="button" className={`bg-blue-primary py-1 px-3 rounded text-white text-[13px]`}>{children}</button>
    );
}

export default Button;