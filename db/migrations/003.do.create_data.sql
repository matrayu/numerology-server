CREATE TABLE motivation (
  motivation_number INTEGER PRIMARY KEY UNIQUE,
  motivation_content TEXT
);

CREATE TABLE motivation_users (
  user_id INTEGER REFERENCES users(id),
  motivation_number INTEGER REFERENCES motivation(motivation_number)
);

CREATE TABLE inner_self (
  inner_self_id SERIAL PRIMARY KEY,
  inner_self_number INTEGER,
  inner_self_content TEXT
);

CREATE TABLE expression (
  expression_id SERIAL PRIMARY KEY,
  expression_number INTEGER,
  expression_content TEXT
);

CREATE TABLE karmic_lessons (
  karmic_lessions_id SERIAL PRIMARY KEY,
  karmic_lessons_number INTEGER,
  karmic_lessons_content TEXT
);

CREATE TABLE hidden_tendencies (
  hidden_tendencies_id SERIAL PRIMARY KEY,
  hidden_tendencies_number INTEGER,
  hidden_tendencies_content TEXT
);

CREATE TABLE subconscious_response (
  subconscious_response_id SERIAL PRIMARY KEY,
  subconscious_response_number INTEGER,
  subconscious_response_content TEXT
);

CREATE TABLE destiny (
  destiny_id SERIAL PRIMARY KEY,
  destiny_number INTEGER,
  destiny_content TEXT
);

CREATE TABLE first_lifecycle (
  first_lifecycle_id SERIAL PRIMARY KEY,
  first_lifecycle_number INTEGER,
  first_lifecycle_content TEXT
);

CREATE TABLE second_lifecycle (
  second_lifecycle_id SERIAL PRIMARY KEY,
  second_lifecycle_number INTEGER,
  second_lifecycle_content TEXT
);

CREATE TABLE third_lifecycle (
  third_lifecycle_id SERIAL PRIMARY KEY,
  third_lifecycle_number INTEGER,
  third_lifecycle_content TEXT
);

CREATE TABLE destiny_lifecycle (
  destiny_lifecycle_id SERIAL PRIMARY KEY,
  destiny_number INTEGER,
  lifecycle_number INTEGER,
  destiny_lifecycle_content TEXT
);

CREATE TABLE turning_points (
  turning_points_id SERIAL PRIMARY KEY,
  turning_points_number INTEGER,
  turning_points_content TEXT
);

CREATE TABLE challenges (
  challenges_id SERIAL PRIMARY KEY,
  challenges_number INTEGER,
  challenges_content TEXT,
  challenges_health TEXT
);

CREATE TABLE personal_year (
  personal_year_id SERIAL PRIMARY KEY,
  personal_year_number INTEGER,
  personal_year_content TEXT
);

CREATE TABLE astrological_influences (
  astrological_influences_id SERIAL PRIMARY KEY,
  astrological_influences_age INTEGER,
  astrological_influences_content TEXT,
  astrological_influences_number INTEGER
);

CREATE TABLE astrological_personal (
  astrological_personal_id SERIAL PRIMARY KEY,
  astrological_influence INTEGER ,
  personal_year INTEGER,
  astrological_personal_content TEXT
);