import React from "react";
import FavoriteQuoteCard from "./FavoriteQuoteCard";

const FavoriteQuotes = ({ favoriteQuotes, maxFaves, removeFromFavorites }) => {
    const remainingFavorites = maxFaves - favoriteQuotes.length;

    return (
        <section className="favorite-quotes">
            <div className="wrapper quotes">
                <h3>Top 3 favorite quotes</h3>
                {favoriteQuotes.length > 0 && <ul>{favoriteQuotes.map((quote, index) => <FavoriteQuoteCard quote={quote} key={quote.id} listPosition={index + 1} removeFromFavorites={removeFromFavorites} />)}</ul>}
                <div className="favorite-quotes-description">
                    {favoriteQuotes.length < maxFaves && 
                        <p>You can add {remainingFavorites} more quote{remainingFavorites > 1 &&"s"} to your top three favorites by selecting from the options below.
                        <br /> Once you choose, they will appear here.</p>}
                </div>
            </div>
        </section>
    );
};

export default FavoriteQuotes;