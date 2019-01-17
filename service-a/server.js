const express = require("express");
const http = require('http');
const request = require('request');
const requestPromise = require('request-promise-native');
const got = require('got');
const superagent = require('superagent');
const axios = require('axios');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;
const SERVICE_B_BASE_URL = process.env.SERVICE_B_BASE_URL || 'http://localhost:3001';
const SERVICE_B_BOOKS_URL = `${SERVICE_B_BASE_URL}/books`;

http.globalAgent.keepAlive = true;

app.get("/request", async (req, res, next) => {
  request(SERVICE_B_BOOKS_URL, (error, response, body) => {
    res.send(body);
  });
});

app.get("/request-promise-native", async (req, res, next) => {
  const books = await requestPromise(SERVICE_B_BOOKS_URL);
  res.send(books);
});

app.get("/got", async (req, res, next) => {
  const response = await got(SERVICE_B_BOOKS_URL);
  res.send(response.body);
});

app.get("/superagent", async (req, res, next) => {
  const response = await superagent.get(SERVICE_B_BOOKS_URL);
  res.send(response.body);
});

app.get("/axios", async (req, res, next) => {
    const response = await axios.get(SERVICE_B_BOOKS_URL);
    res.send(response.data);
});

app.get("/fetch", async (req, res, next) => {
  const response = await fetch(SERVICE_B_BOOKS_URL);
  const books = await response.json();
  res.send(books);
});

app.listen(PORT, () => {
  console.info(`Service A running at port ${PORT}`);
});
