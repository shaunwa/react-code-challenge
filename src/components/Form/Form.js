import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {

  return (
    <div>
      <form style={{ width: '100%' }} onSubmit={props.handleSubmit}>
        {
          Object.keys(props.object).map(fieldName => {
            return (<div>
              <label htmlFor={fieldName}>{fieldName}</label>
              <input type="text" id={fieldName} name={fieldName} value={props.object[fieldName]} onChange={props.handleChange} required /><br />
            </div>)
          })
        }
        <button type="submit">{props.submitButton}</button>
      </form>
    </div>
  );
}

Form.prototype = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  object: PropTypes.object.isRequired,
  submitButton: PropTypes.string,
}

Form.defaultProps = {
  submitButton: 'Submit'
}

export default Form;
