// utils/pick.js

function pick(obj, fields) {
    return fields.reduce((acc, field) => {
      if (Object.prototype.hasOwnProperty.call(obj, field)) {
        acc[field] = obj[field];
      }
      return acc;
    }, {});
  }
  
  module.exports = pick;
  