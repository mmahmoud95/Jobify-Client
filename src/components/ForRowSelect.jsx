const ForRowSelect = ({ labelText, name, value, hanldeJobInput, list }) => {
    return (
        <div className='form-row'>
            <label htmlFor={name} className='form-label'>
                {labelText || name}
            </label>
            <select
                name={name}
                className='form-select'
                value={value}
                onChange={hanldeJobInput}
            >
                {list.map((itemValue, index) => (
                    <option key={index}>{itemValue}</option>
                ))}
            </select>
        </div>
    );
};
export default ForRowSelect;
