import Listing from '../models/listing.model.js';

export const createListing = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

// This is Step 2 , to create a controller to serve the router we have created , this controller interacts with user model and execute a query to create a new listing
