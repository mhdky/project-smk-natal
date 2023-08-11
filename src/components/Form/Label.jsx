/* eslint-disable react/prop-types */
const Label = (props) => {
    const {labelFor, children} = props;
    return (
        <label className={`text-zinc-400 font-semibold`} htmlFor={labelFor}>{children}</label>
    );
}

export default Label;