# Array Thinking Web App

A simple, browser-based tool that takes a list of numbers from the user and instantly breaks down their key statistical properties — built to practice array iteration, conditional logic, and DOM manipulation in vanilla JavaScript.

## Overview

The app accepts a comma-separated list of numbers and analyzes the array in a single pass to surface:

- Largest number
- Smallest number
- Sum of all numbers
- Average
- Count of zeros
- Count of positive numbers
- Count of negative numbers
- Count of even numbers
- Count of odd numbers

Results are displayed live on the page in a clean grid of result cards, with handling for empty input, invalid entries, and values outside a defined safe range.

## Features

- **Single-pass analysis** — all statistics (min, max, sum, average, parity, sign counts) are computed in one loop over the array for efficiency.
- **Input parsing** — splits the comma-separated string, trims whitespace, filters out empty entries, and converts each value to a number.
- **Validation & edge case handling**
  - Empty input is caught before processing and shown as an "Input is Empty" message.
  - Non-numeric entries (`NaN`) are detected mid-loop and reported as "Invalid Input."
  - Values outside a ±1000 range trigger a "Limit Exceeded" message to prevent unreasonable input.
  - On any invalid state, all result fields are reset to `None` rather than showing stale or partial data.
- **Even/odd classification** only applies to integer values, since parity is undefined for decimals.
- **Sign classification** — zero, positive, and negative numbers are counted separately rather than treating zero as positive or negative.

## Tech Stack

- **HTML** — structure and result display cards
- **CSS** — layout and styling
- **JavaScript (Vanilla)** — array parsing, validation, and DOM updates (no frameworks or libraries)

## How It Works

1. The user types numbers into the input field (e.g. `5,3,9,-2,0,12`) and clicks **Submit**.
2. The input string is split on commas, trimmed, and filtered to remove blank entries, then mapped to numbers.
3. The app loops through the resulting array once, tracking:
   - running max and min
   - running total (for sum and average)
   - counts for zero, positive, negative, even, and odd values
4. If any value fails validation (`NaN` or out of range), the loop exits early and the UI resets with an explanatory message.
5. On success, all nine result cards are updated with the computed values.

## Project Structure

```
Array Thinking Web App/
├── index.html      # Page structure and result display cards
├── style.css        # Styling and layout
└── script.js         # Array parsing, analysis logic, and DOM updates
```

## How to Run

1. Clone or download the project folder.
2. Open `index.html` directly in a browser, or serve it with a local server (e.g. VS Code Live Server) for the best experience.
3. Enter a comma-separated list of numbers and click **Submit** to see the results.

## Example

**Input:** `5,3,9,-2,0,12`

| Metric | Result |
|---|---|
| Largest Number | 12 |
| Smallest Number | -2 |
| Sum | 27 |
| Average | 4.5 |
| Zeros | 1 |
| Positive Numbers | 3 |
| Negative Numbers | 1 |
| Even Numbers | 3 |
| Odd Numbers | 2 |

## Learning Highlights

This project was built as practice in **array thinking** — reasoning about a dataset as a whole rather than as individual values. Key concepts reinforced include:

- Iterating an array once to extract multiple derived statistics, instead of looping separately for each metric.
- Defensive input handling: treating user input as untrustworthy by default (empty strings, stray commas, non-numeric text).
- Keeping the UI in a predictable state on failure by explicitly resetting all fields rather than leaving partial results visible.

## Possible Future Improvements

- Allow decimal-aware even/odd handling or simply hide those fields when decimals are entered.
- Add a configurable input limit instead of a hardcoded ±1000 range.
- Display results with a chart (e.g. Chart.js) for visual distribution of the numbers.
- Add unit tests for the parsing and analysis logic.