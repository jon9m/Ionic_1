import { Quote } from "../data/quote.interface";

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorite(quote: Quote) {
        this.favoriteQuotes.push(quote);
    }
    removeQuoteFromFavorite(quote: Quote) {
        const position = this.favoriteQuotes.findIndex((quoteEl) => {
            if (quoteEl.id === quote.id) {
                return true;
            }
        });
        this.favoriteQuotes.splice(position, 1);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice();  //get a copy.
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find(quoteEl => {
            if (quote.id === quoteEl.id) {
                return true;
            }
        });
    }
}