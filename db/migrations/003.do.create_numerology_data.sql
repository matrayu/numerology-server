CREATE TABLE numerology_motivation (
  motivation_number INTEGER PRIMARY KEY,
  motivation_content TEXT
);

CREATE TABLE numerology_inner_self (
  inner_self_number INTEGER PRIMARY KEY,
  inner_self_content TEXT
);

CREATE TABLE numerology_expression (
  expression_number INTEGER PRIMARY KEY,
  expression_content TEXT
);

CREATE TABLE numerology_karmic_lessons (
  karmic_lessons_number INTEGER PRIMARY KEY,
  karmic_lessons_content TEXT
);

CREATE TABLE numerology_hidden_tendencies (
  hidden_tendencies_number INTEGER PRIMARY KEY,
  hidden_tendencies_content TEXT
);

CREATE TABLE numerology_subconscious_response (
  subconscious_response_number INTEGER PRIMARY KEY,
  subconscious_response_content TEXT
);

CREATE TABLE numerology_destiny (
  destiny_number INTEGER PRIMARY KEY,
  destiny_content TEXT
);

CREATE TABLE numerology_first_lifecycle (
  first_lifecycle_number INTEGER PRIMARY KEY,
  first_lifecycle_content TEXT
);

CREATE TABLE numerology_second_lifecycle (
  second_lifecycle_number INTEGER PRIMARY KEY,
  second_lifecycle_content TEXT
);

CREATE TABLE numerology_third_lifecycle (
  third_lifecycle_number INTEGER PRIMARY KEY,
  third_lifecycle_content TEXT
);

CREATE TABLE numerology_destiny_lifecycle (
  id SERIAL PRIMARY KEY,
  destiny_number INTEGER,
  lifecycle_number INTEGER,
  destiny_lifecycle_content TEXT
);

CREATE TABLE numerology_turning_points (
  turning_points_number INTEGER PRIMARY KEY,
  turning_points_content TEXT
);

CREATE TABLE numerology_challenges (
  challenges_number INTEGER PRIMARY KEY,
  challenges_content TEXT,
  challenges_health TEXT
);

CREATE TABLE numerology_personal_year (
  personal_year_number INTEGER PRIMARY KEY,
  personal_year_content TEXT
);

CREATE TABLE numerology_astrological_influences (
  astrological_influences_age INTEGER PRIMARY KEY,
  astrological_influences_content TEXT,
  astrological_influences_number INTEGER
);

CREATE TABLE numerology_astrological_personal (
  id SERIAL PRIMARY KEY,
  astrological_influence INTEGER ,
  personal_year INTEGER,
  astrological_personal_content TEXT
);