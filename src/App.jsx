import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import ListingsPage from "./pages/ListingsPage";
import SavedPage from "./pages/SavedPage";
import ListingDetailPage from "./pages/ListingDetailPage";
import InquiryPage from "./pages/InquiryPage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [savedIds, setSavedIds] = useState([]);

  function handleToggleSave(listingId) {
    setSavedIds((currentIds) =>
      currentIds.includes(listingId)
        ? currentIds.filter((id) => id !== listingId)
        : [...currentIds, listingId],
    );
  }

  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />

        <Route
          path="listings"
          element={
            <ListingsPage savedIds={savedIds} onToggleSave={handleToggleSave} />
          }
        />

        <Route
          path="saved"
          element={
            <SavedPage savedIds={savedIds} onToggleSave={handleToggleSave} />
          }
        />
        <Route path="listings/:listingId" element={<ListingDetailPage />} />
        <Route path="listings/:listingId/inquire" element={<InquiryPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
