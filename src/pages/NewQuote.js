import React from "react";
import QuoteForm from "../components/quotes/QuoteForm";
import { useHistory } from "react-router";

const NewQuote = () => {
  const history = useHistory(); // history all pages have visited

  const addQuoteHandler = (quote) => {
    //add quote
    history.push("/quotes");
  };

  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
