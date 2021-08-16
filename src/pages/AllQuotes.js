import React from "react";
import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "John", text: "Learning React" },
  { id: "q2", author: "David", text: "Learning Vue" },
  { id: "q3", author: "Max", text: "Learning Angular" },
];

const AllQuotes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQuotes;
