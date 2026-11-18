import { Link } from "react-router-dom";
import { formatMonthlyRent } from "../utils/listingHelpers";

function ListingCard({ listing, isSaved, onToggleSave }) {
  return (
    <article className="listing-card">
      <h3>{listing.title}</h3>
      <p className="location">
        {listing.area}, {listing.city}
      </p>
      <p className="details">
        {listing.bedrooms} Bedroom{listing.bedrooms > 1 ? "s" : ""} |{" "}
        {listing.propertyType}
      </p>

      <p className="rent">{formatMonthlyRent(listing.monthlyRent)}</p>
      <p className="furnished-status">
        {listing.furnished ? "Furnished" : "Unfurnished"}
      </p>
      <Link className="details-link" to={`/listings/${listing.id}`}>
        View details
      </Link>
      
      <button
        className="save-button"
        type="button"
        aria-pressed={isSaved}
        onClick={() => onToggleSave(listing.id)}
      >
        {isSaved ? "Saved" : "Save"}
      </button>
    </article>
  );
}

export default ListingCard;
