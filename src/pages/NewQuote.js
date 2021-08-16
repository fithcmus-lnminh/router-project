import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";

const NewQuote = () => {
  const addQuoteHandler = (quote) => {
    //add quote
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
