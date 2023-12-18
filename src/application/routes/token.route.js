// calculate tokens, credit tokens, debit tokens

// calculate tokens: POST /tokens/calculate
// request body: { user_id, purchase_amount, purchase_date }
// response body: { user_id, token_amount, token_expiry_date }

// credit tokens: POST /tokens/credit
// request body: { user_id, token_amount, token_expiry_date }
// response body: { user_id, credited_token_amount, updated_token_balance, token_expiry_date }

// debit tokens: POST /tokens/debit
// request body: { user_id, token_debit_amount }
// response body: { user_id, debited_token_amount, updated_token_balance, token_expiry_date }
