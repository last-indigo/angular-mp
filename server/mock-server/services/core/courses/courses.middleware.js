const express = require('express');
const router = express.Router();
const url = require('url');

module.exports = (server) => {

  router.get('/courses', (req, res, next) => {
    let url_parts = url.parse(req.originalUrl, true),
      query = url_parts.query,
      from = query.start,
      to = +query.start + +query.count,
      sort = query.sort,
      queryStr = query.query,
      courses = server.db.getState().courses;
    console.log(sort);
    console.log(queryStr);
    if (courses.length < to) {
      to = courses.length;
    }
    if (from && to) {
      courses = courses.slice(from, to);
    }
    if (queryStr) {
      courses = courses.filter((course) => course.name.includes(queryStr) || course.description.includes(queryStr));
    }

    res.json(courses);
  });

  return router;
};
