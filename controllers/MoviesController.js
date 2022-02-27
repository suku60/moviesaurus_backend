const { Movie } = require('../models/index');
const { Op } = require('sequelize');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/auth');
const bcrypt = require('bcrypt');