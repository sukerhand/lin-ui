// eslint-disable-next-line no-undef
export default Behavior({
  definitionFilter(defFields) {
    const {
      properties
    } = defFields;
    const propsKey = Object.keys(properties);
    propsKey.forEach(name => {
      const {
        options,
        validator = null,
        required = false,
        observer
      } = properties[name];
      if (options || validator || required || observer) {
        properties[name].observer = function (newValue, oldValue) {
          observer && observer(newValue, oldValue);
          if (options) {
            !options.includes(newValue) && console.error(`${name}: ${newValue} must be in the [${options}]`);
          }
          if (validator) {
            !validator(newValue, oldValue) && console.error(`${name} validate failed`);
          }
          required && console.error(`${name} is required`);
        };
      }
    });
  }
});