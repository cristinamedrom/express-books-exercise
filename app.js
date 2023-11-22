const express = require('express');
const app = express();
const port = 3000;
const booksData = require('./data/books.json');

app.get('/all', (req, res) => {
    res.json(booksData);
  });

  app.get('/first', (req, res) => {
    res.json(booksData[0]);
  });

  app.get('/last', (req, res) => {
    res.json(booksData[booksData.length - 1]);
  });

  app.get('/middle', (req, res) => {
    const middleIndex = Math.floor(booksData.length / 2);
    res.json(booksData[middleIndex]);
  });

  app.get('/author/:authorName', (req, res) => {
    const authorName = req.params.authorName.toLowerCase();
    const book = booksData.find(book => book.author.toLowerCase() === authorName);
    res.json({ title: book.title });
  });
  
  app.get('/country/:authorName', (req, res) => {
    const authorName = req.params.authorName.toLowerCase();
    const book = booksData.find(book => book.author.toLowerCase() === authorName);
    res.json({ country: book.country });
  });
  
  app.get('/year&pages/:authorName', (req, res) => {
    const authorName = req.params.authorName.toLowerCase();
    const book = booksData.find(book => book.author.toLowerCase() === authorName);
    res.json({ pages: book.pages, year: book.year });
  });
  
  app.get('/country/count/:countryName', (req, res) => {
    const countryName = req.params.countryName.toLowerCase();
    const count = booksData.filter(book => book.country.toLowerCase() === countryName).length;
    res.json({ count });
  });
  
  app.get('/country/at-least/:countryName', (req, res) => {
    const countryName = req.params.countryName.toLowerCase();
    const hasBook = booksData.some(book => book.country.toLowerCase() === countryName);
    res.json({ hasBook });
  });
  
  app.get('/pages/all-greater/:pageCount', (req, res) => {
    const pageCount = parseInt(req.params.pageCount);
    const allGreater = booksData.every(book => book.pages > pageCount);
    res.json({ allGreater });
  });
  
  app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
  });