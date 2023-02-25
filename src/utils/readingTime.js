/**
 * Calculates the estimated reading time for a given piece of text.
 * @param {string} text - The text to calculate reading time for.
 * @param {number} [wordsPerMinute=200] - The average reading speed in words per minute. Defaults to 200.
 * @param {number} [minReadingTime=1] - The minimum reading time to return, in minutes. Defaults to 1.
 * @param {number} [maxReadingTime=Infinity] - The maximum reading time to return, in minutes. Defaults to Infinity.
 * @param {number} [decimalPlaces=0] - The number of decimal places to round the reading time to. Defaults to 0.
 * @param {boolean} [includeSeconds=false] - Whether to include seconds in the reading time estimate. Defaults to false.
 * @returns {string} The estimated reading time, in minutes or minutes and seconds.
 */
export function calculateReadingTime(
  text,
  wordsPerMinute = 200,
  minReadingTime = 1,
  maxReadingTime = Infinity,
  decimalPlaces = 0,
  includeSeconds = false
) {
  // Remove HTML tags and trim whitespace
  const cleanText = text.replace(/<.*?>/g, "").trim()

  // Count words
  const wordCount = cleanText.match(/\b\w+\b/g)?.length || 0

  // Calculate reading time in minutes
  const readingTimeMinutes = wordCount / wordsPerMinute

  // Check if reading time is within bounds
  const readingTime = Math.max(
    Math.min(readingTimeMinutes, maxReadingTime),
    minReadingTime
  )

  // Format reading time string
  if (includeSeconds) {
    const seconds = Math.round((readingTime % 1) * 60)
    const minutes = Math.floor(readingTime)
    return `${minutes} min${minutes === 1 ? "" : "s"} ${seconds} sec${
      seconds === 1 ? "" : "s"
    }`
  } else {
    return `${readingTime.toFixed(decimalPlaces)} min${
      readingTime === 1 ? "" : "s"
    }`
  }
}
