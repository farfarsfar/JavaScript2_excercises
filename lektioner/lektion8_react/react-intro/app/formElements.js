import React from 'react';

export const FormInput = (props) => {
  return <input type='text' {...props}/>
}
FormInput.defaultProps = { placeholder: "skriv något!" }

FormInput.propTypes = {
  placeholder: React.PropTypes.string.isRequired
}

export const TextOutput = (props) => {
  return <h1>{props.outputText}</h1>
}

TextOutput.propTypes = {
  outputText: React.PropTypes.string.isRequired
}
TextOutput.defaultProps = { outputText: "HEJ!" }