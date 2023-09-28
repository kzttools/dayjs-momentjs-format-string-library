// Date format: Year-Month-Day
export const formatDate = "YYYY-MM-DD";

// 24-hour time format: Hour:Minute:Second
export const formatTime24Hour = 'HH:mm:ss';

// Same 24-hour time format
export const formatTime = formatTime24Hour;

// 12-hour time format: Hour:Minute:Second AM/PM
export const formatTime12Hour = 'hh:mm:ss A';

// Full day of the week format: Full name of the day (e.g., Monday)
export const formatDayOfWeekFull = "dddd";

// Date format with separator: Year-Month-Day, separator specified as a parameter
export const formatDateWithSeparator = (separator: string) => "YYYY-MM-DD".replace("-", separator);
