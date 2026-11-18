import ListingCard from "../components/ListingCard";
import { listings } from "../data/listings";
import { Link } from "react-router-dom";
import StatusPanel from "../components/StatusPanel";

function SavedPage({ savedIds, onToggleSave }) {
  const savedListings = listings.filter((listing) =>
    savedIds.includes(listing.id),
  );

  return (
    <section>
      <h1>Saved rentals</h1>
      <p>{savedListings.length} saved rentals</p>

      {savedListings.length > 0 ? (
        <div className="listing-grid">
          {savedListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              isSaved={true}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <StatusPanel variant="empty" title="No saved rentals">
          <p>Save rentals from the Browse page to see them here.</p>

          <Link className="primary-link" to="/listings">
            Browse rentals
          </Link>
        </StatusPanel>
      )}
    </section>
  );
}

export default SavedPage;
