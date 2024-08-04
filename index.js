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
  
    return errors;
  }
  
  
  module.exports = validateForm;
  