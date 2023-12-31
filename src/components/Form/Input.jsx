/* eslint-disable react/prop-types */
const Input = (props) => {
    const {type, name, id, children, value} = props;
    return (
        <input className={`text-sm w-full outline-none`} type={type} name={name} id={id} value={value} placeholder={children} />
    );
}

export default Input;