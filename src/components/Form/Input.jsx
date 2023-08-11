/* eslint-disable react/prop-types */
const Input = (props) => {
    const {type, name, id, children} = props;
    return (
        <input className={`text-sm w-full outline-none`} type={type} name={name} id={id} placeholder={children} />
    );
}

export default Input;