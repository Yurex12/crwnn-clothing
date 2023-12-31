import './form-input.styles.scss';

const FormInput = ({ label, ...otherProps }) => {
  // console.log({...otherProps});
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} required />
      {label && (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
