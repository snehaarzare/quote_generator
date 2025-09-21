import React, { useState } from "react";
import "./App.css"; // Import custom styles

const Quote = () => {
  const [quote, setQuote] = useState("");  // Store quote text
  const [author, setAuthor] = useState("");  // Store author name

  // Predefined list of quotes and authors
  const quotes = [
    { content: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { content: "Success is not the key to happiness. Happiness is the key to success.", author: "Albert Schweitzer" },
    { content: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { content: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { content: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate, to have it make some difference that you have lived and lived well.", author: "Ralph Waldo Emerson" },
    { content: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { content: "The best way to predict the future is to create it.", author: "Abraham Lincoln" },
    { content: "You miss 100% of the shots you don’t take.", author: "Wayne Gretzky" },
    { content: "If you want to go fast, go alone. If you want to go far, go together.", author: "African Proverb" }
  ];

  // Function to select a random quote
  const fetchQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);  // Generate random index
    const selectedQuote = quotes[randomIndex];  // Select a random quote
    setQuote(selectedQuote.content);  // Set the quote text
    setAuthor(selectedQuote.author);  // Set the author name
  };

  return (
    <div className="quote-box">
      <p className="quote">"{quote}"</p>  {/* Display the quote */}
      <p className="author">— {author}</p>  {/* Display the author */}
      <button className="btn" onClick={fetchQuote}>New Quote</button>  {/* Button to fetch a new quote */}
    </div>
  );
};

export default Quote;
