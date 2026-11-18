import ListingCard from "../components/ListingCard";
import { listings } from "../data/listings";
import { useState } from "react";
import StatusPanel from "../components/StatusPanel";

const cityOptions = [
  ...new Set(listings.map((listing) => listing.city)),
].sort();

const typeOptions = [
  ...new Set(listings.map((listing) => listing.propertyType)),
].sort();

const bedroomOptions = [
  ...new Set(listings.map((listing) => listing.bedrooms)),
].sort((a, b) => a - b);

function ListingsPage({ savedIds, onToggleSave }) {
  const [cityFilter, setCityFilter] = useState("all");
  const [typeFilter, setTypeFilter] = useState("all");
  const [bedroomFilter, setBedroomFilter] = useState("all");
  const filteredListings = listings.filter((listing) => {
    const matchesCity = cityFilter === "all" || listing.city === cityFilter;

    const matchesType =
      typeFilter === "all" || listing.propertyType === typeFilter;

    const matchesBedrooms =
      bedroomFilter === "all" || listing.bedrooms === Number(bedroomFilter);

    return matchesCity && matchesType && matchesBedrooms;
  });
  function handleResetFilters() {
    setCityFilter("all");
    setTypeFilter("all");
    setBedroomFilter("all");
  }
  return (
    <section>
      <h1>Browse rentals</h1>
      <p>{filteredListings.length} rentals available</p>
      <div className="filters">
        <label>
          City
          <select
            value={cityFilter}
            onChange={(event) => setCityFilter(event.target.value)}
          >
            <option value="all">All cities</option>
            {cityOptions.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </label>

        <label>
          Property Type
          <select
            value={typeFilter}
            onChange={(event) => setTypeFilter(event.target.value)}
          >
            <option value="all">All types</option>

            {typeOptions.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>

        <label>
          Bedrooms
          <select
            value={bedroomFilter}
            onChange={(event) => setBedroomFilter(event.target.value)}
          >
            <option value="all">Any bedrooms</option>

            {bedroomOptions.map((bedrooms) => (
              <option key={bedrooms} value={bedrooms}>
                {bedrooms} bedroom{bedrooms > 1 ? "s" : ""}
              </option>
            ))}
          </select>
        </label>
        <button type="button" onClick={handleResetFilters}>
          Reset filters
        </button>
      </div>

      {filteredListings.length > 0 ? (
        <div className="listing-grid">
          {filteredListings.map((listing) => (
            <ListingCard
              key={listing.id}
              listing={listing}
              isSaved={savedIds.includes(listing.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>
      ) : (
        <StatusPanel variant="empty" title="No rentals found">
          <p>Try changing or resetting your filters.</p>

          <button
            className="primary-link status-action"
            type="button"
            onClick={handleResetFilters}
          >
            Reset filters
          </button>
        </StatusPanel>
      )}
    </section>
  );
}

export default ListingsPage;
