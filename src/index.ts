const time24Hour = 'HH:mm:ss';

export default {
    // Date format: Year-Month-Day
    date: "YYYY-MM-DD",

    // 24-hour time format: Hour:Minute:Second
    time: time24Hour,

    // Same 24-hour time format
    time24Hour: time24Hour,

    // 12-hour time format: Hour:Minute:Second AM/PM
    time12Hour: 'hh:mm:ss A',

    // Full day of the week format: Full name of the day (e.g., Monday)
    dayOfWeekFull: "dddd",

    // Date format with separator: Year-Month-Day, separator specified as a parameter
    dateWithSeparator: (separator: string) => "YYYY-MM-DD".replace("-", separator),
};
