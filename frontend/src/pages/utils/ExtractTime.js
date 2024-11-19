import { parseISO, isValid } from 'date-fns';

export function extractTime(dateString) {
  try {
    if (!dateString || dateString.trim() === '') {
      throw new Error('Date string is undefined or empty');
    }

    // Check if the date string is a valid ISO date
    if (!isValid(parseISO(dateString))) {
      throw new Error('Invalid date string');
    }

    const date = parseISO(dateString);
    const hours = padZero(date.getHours());
    const minutes = padZero(date.getMinutes());
    return `${hours}:${minutes}`;
  } catch (error) {
    console.log('Error:', error.message);
    return 'Invalid time';
  }
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
  return number.toString().padStart(2, "0");
}