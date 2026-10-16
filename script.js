// 1. Declare const for guide name and current year
const guideName = "Metro Manila Study Cafes";
const currentYear = new Date().getFullYear();

// 2. Declare a let for running count, starting at 0
let placesReviewedCount = 0;

// Calculate total places dynamically
const placesList = ["Warehouse Coffee", "Treehouse", "Majikasa Coffee"];
placesReviewedCount = placesList.length;

// --- ACTIVITY 8.3: DECISION VARIABLES ---
const placeRating = Number(4.5);          // Numeric rating out of 5
const priceLevel = "budget";              // Price level option
const isOpenNow = true;                   // Open status boolean
const isWithinWalkingDistance = true;     // Distance boolean

// Wait for DOM content to load safely
document.addEventListener("DOMContentLoaded", () => {
  // 3. Write guide name dynamically into element
  const guideTitleElement = document.getElementById("guide-title");
  if (guideTitleElement) {
    guideTitleElement.textContent = guideName;
  }

  // 4. Dynamic copyright line in footer
  const footerCopyrightElement = document.getElementById("footer-copyright");
  if (footerCopyrightElement) {
    footerCopyrightElement.textContent = `© ${currentYear} ${guideName}. All rights reserved.`;
  }

  // Small Calculation display
  const reviewCountElement = document.getElementById("review-count");
  if (reviewCountElement) {
    reviewCountElement.textContent = `Featured Spots: ${placesReviewedCount} Top Cafes Reviewed`;
  }

  // --- ACTIVITY 8.3: DECISION LOGIC & DOM INJECTIONS ---

  // 1. Rating label (if / else if / else chain)
  let ratingLabel = "";
  if (placeRating >= 4.0) {
    ratingLabel = "Highly recommended";
  } else if (placeRating >= 2.5 && placeRating <= 3.9) {
    ratingLabel = "Worth a visit";
  } else {
    ratingLabel = "Only if you're nearby";
  }

  const ratingElement = document.getElementById("rating-label");
  if (ratingElement) {
    ratingElement.textContent = `Spot Rating (${placeRating}/5): ${ratingLabel}`;
  }

  // 2. Budget check (uses && and ternary with === strict equality)
  const budgetDecision = (priceLevel === "budget" && isOpenNow === true) 
    ? "Good option right now" 
    : "Maybe another time";

  const budgetElement = document.getElementById("budget-check");
  if (budgetElement) {
    budgetElement.textContent = `Status: ${budgetDecision}`;
  }

  // 3. Distance note (uses boolean and ternary with === strict equality)
  const distanceDecision = (isWithinWalkingDistance === true) 
    ? "Walking distance" 
    : "Better to commute";

  const distanceElement = document.getElementById("distance-note");
  if (distanceElement) {
    distanceElement.textContent = `Distance: ${distanceDecision}`;
  }

  // 5. Console logs with labeled values
  console.log("Guide Name:", guideName);
  console.log("Current Year:", currentYear);
  console.log("Total Places Reviewed:", placesReviewedCount);
  console.log("Rating Decision:", ratingLabel);
  console.log("Budget Decision:", budgetDecision);
  console.log("Distance Decision:", distanceDecision);
});