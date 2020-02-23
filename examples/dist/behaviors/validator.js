// eslint-disable-next-line no-undef
export default Behavior({
  definitionFilter(defFields) {
    const {
      properties
    } = defFields;
    const propsKey = Object.keys(properties);
    propsKey.forEach(name => {
      const {
        options
      } = properties[name];
      if (options) {
        properties[name].observer = function(newValue) {
          if(options.indexOf(newValue) !== -1) {
            return;
          } else {
            console.error(`'${name}' must be in the [${options}]`);
          }
        };
      } else {
        return;
      }
    });
  }
});