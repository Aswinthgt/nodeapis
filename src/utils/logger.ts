export default class Logger {
    // Define the ANSI color codes for each log type
    static styles = {
      success: "\x1b[32m%s\x1b[0m",  // Green
      error: "\x1b[31m%s\x1b[0m",    // Red
      warning: "\x1b[33m%s\x1b[0m",  // Yellow
      info: "\x1b[36m%s\x1b[0m",     // Cyan
    };
  
    // Method to log success messages
    static success(message: string) {
      console.log(Logger.styles.success, message);
    }
  
    // Method to log error messages
    static error(message: string) {
      console.log(Logger.styles.error, message);
    }
  
    // Method to log warning messages
    static warning(message: string) {
      console.log(Logger.styles.warning, message);
    }
  
    // Method to log info messages
    static info(message: string) {
      console.log(Logger.styles.info, message);
    }
  }
  
  