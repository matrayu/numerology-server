CREATE TABLE numerology_users (
  id SERIAL PRIMARY KEY,
  user_name TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  dob DATE NOT NULL,
  password TEXT NOT NULL,
  date_created TIMESTAMP NOT NULL DEFAULT now(),
  date_modified TIMESTAMP
);

ALTER TABLE numerology_things
  ADD COLUMN
    user_id INTEGER REFERENCES numerology_users(id)
    ON DELETE SET NULL;