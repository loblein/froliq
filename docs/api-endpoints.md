## API Endpoints

### HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### User-Settings

- `POST /api/users/:userId/settings`
- `PATCH /api/users/:userId/settings`
  + `one settings table per user`

### Businesses

- `POST /api/businesses`
- `PATCH /api/businesses/:businessId`

### Business-Settings

- `POST /api/businesses/:businessId/settings`
- `PATCH /api/businesses/:businessId/settings`
  + `one settings table per business`

### Job-Listings

- `GET /api/listings`
  + `Listings index/search`
- `GET /api/listings/:listingId`
- `POST /api/listings`
- `PATCH /api/listings/:listingId`
- `DELETE /api/listings/:listingId`

### User-Reviews

- `POST /api/users/:userId/reviews`
  + `post endpoint when rating user`
- `GET /api/users/:userId/reviews`
  + `index of reviews for a single user`

### Business-Reviews

- `POST /api/businesses/:businessId/reviews`
  + `post endpoint when rating a business`
- `GET /api/businesses/:businessId/reviews`
  + `index of reviews for a single business`
