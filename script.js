// 1. Declare const for guide name and current year
const guideName = "Metro Manila Study Cafes";
const currentYear = new Date().getFullYear();

// 2. Declare a let for running count, starting at 0
let placesReviewedCount = 0;

// Calculate total places dynamically
const placesList = ["Warehouse Coffee", "Treehouse", "Majikasa Coffee"];
placesReviewedCount = placesList.length;

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

  // 5. Console logs with 3 labeled values
  console.log("Guide Name:", guideName);
  console.log("Current Year:", currentYear);
  console.log("Total Places Reviewed:", placesReviewedCount);
});