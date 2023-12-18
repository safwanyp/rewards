// login, signup, logout, check tokens

// user object: { id, email, password, name, token_balance, token_expiry_date, created_at, updated_at }

// login: POST /users/login
// request body: { email, password }
// response body: { id, email, name, token_balance, token_expiry_date }

// signup: POST /users/signup
// request body: { email, password, name }
// response body: { id, email, name, token_balance, token_expiry_date }

// logout: POST /users/logout
// request body: { email }
// response body: { email }

// check tokens: GET /users/tokens
// request body: { email }
// response body: { email, token_balance, token_expiry_date }
