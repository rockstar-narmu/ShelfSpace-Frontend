import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import BestSellers from "./pages/BestSellers";
import KidsPage from "./pages/KidsPage";
import ClassicPage from "./pages/ClassicPage";
import SciFiPage from "./pages/SciFiPage";
import BookDetails from "./pages/BookDetails"; // ✅ Import Book Details Page
import ScrollToTop from "./components/ScrollToTop";
import AuthorDetails from "./pages/AuthorDetails";
import { CartPage } from "./pages/CartPage";
import { StickyNotesPage } from "./pages/StickyNotesPage";
import { HighlighterPage } from "./pages/HighlighterPage";
import { LampPage } from "./pages/LampPage";
import { BookHolderPage } from "./pages/BookHolderPage";
import AwardWinnersPage from "./pages/AwardWinnersPage";

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/* Categories */}
        <Route path="/bestsellers" element={<BestSellers />} />
        <Route path="/award-winners" element={<AwardWinnersPage />} />
        
        {/* Top 50 Books */}
        <Route path="/kids" element={<KidsPage />} />
        <Route path="/classics" element={<ClassicPage />} />
        <Route path="/scifi" element={<SciFiPage />} />

        <Route path="/book/:id" element={<BookDetails />} /> {/* ✅ Book Details Route */}
        <Route path="/author/:id" element={<AuthorDetails />} />
        <Route path="/cart" element={<CartPage />} />

        {/* Merchendise Routes */}
        <Route path="/sticky-notes" element={<StickyNotesPage />} />
        <Route path="/highlighter" element={<HighlighterPage />} />
        <Route path="/lamp" element={<LampPage />} />
        <Route path="/book-holder" element={<BookHolderPage />} />
      </Routes>
    </>
  );
};

export default App;
