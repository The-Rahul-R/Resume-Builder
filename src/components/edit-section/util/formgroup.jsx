import '@fortawesome/fontawesome-free/css/all.min.css';
import './formgroup.css'

export const FormGroup =({id,label,name,inputType,value,onChange,placeholder,big,required})=> {
    return(
        <div className='form-row'>
            <label htmlFor={id}>{label}</label>
            <div className='input'>
                {big ? <textarea id={id} type={inputType} name={name} value={value} placeholder={placeholder} onChange={onChange} required={required} /> :
                    <input id={id} type={inputType} name={name} value={value} placeholder={placeholder} onChange={onChange} required={required} />
                }
            </div>
        </div>
    )
}

export const FormEntry = ({ entryName, handleDelete, handleEdit }) => {
    return (
        <div className="form-entry">
            <div className="info">{entryName}</div>
            <button onClick={handleEdit} className="edit-btn">
                <i className="fas fa-edit"></i>
            </button>
            <button onClick={handleDelete} className="delete-btn">
                <i className="fas fa-trash"></i>
            </button>
        </div>
    );
}

