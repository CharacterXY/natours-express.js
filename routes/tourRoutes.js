import express from 'express';
import {
  getAllTours,
  getToursById,
  updateTour,
  deleteTour,
  createTour,
} from '../controllers/tourController.js';

const router = express.Router();

router.route('/').get(getAllTours).post(createTour);

router.route('/:id').get(getToursById).patch(updateTour).delete(deleteTour);

export { router };
