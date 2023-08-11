/* eslint-disable react/prop-types */
const Input = (props) => {
    const {type, name, id, children, value, onChange} = props;
    return (
        <input className={`text-sm w-full outline-none`} onChange={onChange} type={type} name={name} id={id} value={value} placeholder={children} />
    );
}

export default Input;