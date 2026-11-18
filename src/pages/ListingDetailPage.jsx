import { Link, useParams } from "react-router-dom";
import { listings } from "../data/listings";
import StatusPanel from "../components/StatusPanel";
import { findListingById, formatMonthlyRent } from "../utils/listingHelpers";
function ListingDetailPage() {
  const { listingId } = useParams();

  const listing = findListingById(listings, listingId);

  if (!listing) {
    return (
      <StatusPanel variant="error" title="Rental not found" headingLevel="h1">
        <p>No rental matches ID {listingId}.</p>

        <Link className="primary-link" to="/listings">
          Return to browse
        </Link>
      </StatusPanel>
    );
  }
  return (
    <section className="listing-detail">
      <p className="detail-type">{listing.propertyType}</p>

      <h1>{listing.title}</h1>

      <p>
        {listing.area}, {listing.city}
      </p>

      <p className="detail-rent">{formatMonthlyRent(listing.monthlyRent)}</p>

      <div className="detail-summary">
        <p>{listing.bedrooms} bedrooms</p>
        <p>{listing.bathrooms} bathrooms</p>
        <p>{listing.furnished ? "Furnished" : "Unfurnished"}</p>
      </div>

      <Link className="primary-link" to={`/listings/${listing.id}/inquire`}>
        Inquire about this rental
      </Link>

      <section>
        <h2>About this rental</h2>
        <p>{listing.description}</p>
      </section>

      <section>
        <h2>Amenities</h2>

        <ul className="amenities-list">
          {listing.amenities.map((amenity) => (
            <li key={amenity}>{amenity}</li>
          ))}
        </ul>
      </section>
    </section>
  );
}

export default ListingDetailPage;
