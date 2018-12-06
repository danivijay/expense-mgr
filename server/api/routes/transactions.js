const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
      res.status(200).json({
            message: 'GET Req Handler',
      });
});

router.post('/', (req, res, next) => {
      const { name, amount, type } = req.body;
      const transaction = {
            name,
            amount,
            type,
      };
      res.status(201).json({
            message: 'POST Req Handler',
            transaction,
      });
});

router.get('/:transactionId', (req, res, next) => {
      const id = req.params.transactionId;
      if (id) {
            res.status(200).json({
                  message: 'Get transaction object',
                  id,
            });
      }
});

router.patch('/:transactionId', (req, res, next) => {
      const id = req.params.transactionId;
      if (id) {
            res.status(200).json({
                  message: 'Updated transaction',
                  id,
            });
      }
});

router.delete('/:transactionId', (req, res, next) => {
      const id = req.params.transactionId;
      if (id) {
            res.status(200).json({
                  message: 'Deleted transaction',
                  id,
            });
      }
});

module.exports = router;
