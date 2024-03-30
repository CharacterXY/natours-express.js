import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Treba staviti JSON.parse je u suprotnom vraca Buffer array pun niza brojeva. Stoga ako zelimo da se procitaju kao string, treba drugi parametar staviti utf-8, te koristit JSON parse jer nasa datoteka je JSON pa je parsiranmo kako bi radili s njom kao s javascript objektom.
const tours = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../dev-data/data/tours-simple.json'))
);

//  Route handlers

export const getAllTours = (req, res) => {
  res.status(200).json({
    status: 'success',
    requestedAt: req.requestTime,
    results: tours.length,
    tour1Average: [...tours][0].ratingsAverage,
    data: {
      // envelope for our data
      tours,
    },
  });
};

export const getToursById = (req, res) => {
  const tour = tours.find((element) => element.id === +req.params.id);

  if (!tour) {
    return res.status(404).json({
      status: 'faild',
      message: 'Invalid ID',
    });
  } else {
    res.status(200).json({
      status: 'success',
      data: {
        tour,
      },
    });
  }
};
export const createTour = (req, res) => {
  //console.log(req.body);

  const newId = tours[tours.length - 1].id + 1;

  const newTour = Object.assign({ id: newId }, req.body);

  tours.push(newTour);

  fs.writeFile(
    `${__dirname}/dev-data/data/tours-simple.json`,
    JSON.stringify(tours),
    (err) => {
      res.status(201).json({
        status: 'success',
        data: {
          tour: newTour,
        },
      });
    }
  );
};

export const updateTour = (req, res) => {
  if (+req.params.id > tours.length) {
    return res.status(404).json({
      status: 'faild',
      message: 'Invalid ID',
    });
  }

  res.status(200).json({
    status: 'success',
    data: {
      tour: '<Updated tour here...>',
    },
  });
};

export const deleteTour = (req, res) => {
  if (+req.params.id > tours.length) {
    return res.status(404).json({
      status: 'faild',
      message: 'Invalid ID',
    });
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
