import fs from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Treba staviti JSON.parse je u suprotnom vraca Buffer array pun niza brojeva. Stoga ako zelimo da se procitaju kao string, treba drugi parametar staviti utf-8, te koristit JSON parse jer nasa datoteka je JSON pa je parsiranmo kako bi radili s njom kao s javascript objektom.
const users = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../dev-data/data/users.json'))
);

export const getAllUsers = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route in not yet defined',
  });
};

export const createUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route in not yet defined',
  });
};

export const updateUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route in not yet defined',
  });
};

export const deleteUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route in not yet defined',
  });
};

export const getUser = (req, res) => {
  res.status(500).json({
    status: 'error',
    message: 'This route in not yet defined',
  });
};
