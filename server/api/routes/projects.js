const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
      res.status(200).json({
            message: 'GET Req Handler',
      });
});

router.post('/', (req, res, next) => {
      res.status(201).json({
            message: 'POST Req Handler',
      });
});

router.get('/:projectId', (req, res, next) => {
      const id = req.params.projectId;
      if (id) {
            res.status(200).json({
                  message: 'Get project object',
                  id,
            });
      }
});

router.patch('/:projectId', (req, res, next) => {
      const id = req.params.projectId;
      if (id) {
            res.status(200).json({
                  message: 'Updated project',
                  id,
            });
      }
});

router.delete('/:projectId', (req, res, next) => {
      const id = req.params.projectId;
      if (id) {
            res.status(200).json({
                  message: 'Deleted project',
                  id,
            });
      }
});

module.exports = router;
