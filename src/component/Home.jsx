import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Biography', 'Mystery', 'Romance'];

const Home = () => {
  const [popularBooks, setPopularBooks] = useState([]);

  // Fetch popular books from API (replace the URL with a real API)
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=5') // Limiting to 5 for "popular books"
      .then((response) => {
        setPopularBooks(
          response.data.map((book) => ({
            id: book.id,
            title: book.title,
            author: `Author ${book.id}`,
            description: book.body,
          }))
        );
      })
      .catch((error) => console.error('Error fetching popular books:', error));
  }, []);

  return (
    <div className="home">
      <h1>Welcome to the Online Library</h1>
      <p>Explore a wide variety of books across different genres!</p>

      {/* Book Categories */}
      <div className="categories">
        <h2>Book Categories</h2>
        <ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/books/${category.toLowerCase()}`}>{category}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Popular Books */}
      <div className="popular-books">
        <h2>Popular Books</h2>
        <ul>
          {popularBooks.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
              <Link to={`/books/details/${book.id}`}>View Details</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Home;
