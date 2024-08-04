function validateForm(data) {
    const errors = {};
  
    // Simple predefined validation rules
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.email = "Invalid email address";
    }
  
    if (!data.phoneNumber || !/^\+?(\d.*){3,}$/.test(data.phoneNumber)) {
      errors.phoneNumber = "Invalid phone number";
    }
  
    if (!data.url || !/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/.test(data.url)) {
      errors.url = "Invalid URL";
    }
  
    // Custom validation rule example
    if (data.customField !== 'expectedValue') {
      errors.customField = "Custom field does not match expected value";
    }
  
    return errors;
  }
  
  
  module.exports = validateForm;
  