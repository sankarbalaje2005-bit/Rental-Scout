export function findListingById(listings, listingId) {
  const numericId = Number(listingId);

  return listings.find((listing) => listing.id === numericId);
}

export function formatMonthlyRent(amount) {
  return `Rs. ${amount.toLocaleString("en-IN")} / month`;
}
