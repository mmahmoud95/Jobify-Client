function FormRow({ labelText, value, name, type, handleChange }) {
    return (
        <div className="form-row">
            <label htmlFor={name} className="form-label">
                {labelText || name}
            </label>
            <input
                value={value}
                type={type}
                name={name}
                className="form-input"
                onChange={handleChange}
            />
        </div>
    );
}
export default FormRow;
