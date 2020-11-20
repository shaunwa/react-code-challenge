import React from 'react';
import PropTypes from 'prop-types';

const Form = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        {
          Object.keys(props.data).map(fieldName => {
            return (<div>
              <label htmlFor={fieldName}>{fieldName}</label>
              <input type="text" id={fieldName} name={fieldName} value={props.data[fieldName]} onChange={props.handleChange} required /><br />
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
  data: PropTypes.object.isRequired,
  submitButton: PropTypes.string,
}

Form.defaultProps = {
  submitButton: 'Submit'
}

export default Form;
