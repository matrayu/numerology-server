CREATE TABLE motivation (
  motivation_number INTEGER PRIMARY KEY UNIQUE,
  motivation_content TEXT
);

CREATE TABLE inner_self (
  inner_self_number INTEGER PRIMARY KEY UNIQUE,
  inner_self_content TEXT
);

CREATE TABLE expression (
  expression_number INTEGER PRIMARY KEY,
  expression_content TEXT
);

CREATE TABLE karmic_lessons (
  karmic_lessons_number INTEGER PRIMARY KEY,
  karmic_lessons_content TEXT
);

CREATE TABLE hidden_tendencies (
  hidden_tendencies_number INTEGER PRIMARY KEY,
  hidden_tendencies_content TEXT
);

CREATE TABLE subconscious_response (
  subconscious_response_number INTEGER PRIMARY KEY,
  subconscious_response_content TEXT
);

CREATE TABLE destiny (
  destiny_number INTEGER PRIMARY KEY,
  destiny_content TEXT
);

CREATE TABLE first_lifecycle (
  first_lifecycle_number INTEGER PRIMARY KEY,
  first_lifecycle_content TEXT
);

CREATE TABLE second_lifecycle (
  second_lifecycle_number INTEGER PRIMARY KEY,
  second_lifecycle_content TEXT
);

CREATE TABLE third_lifecycle (
  third_lifecycle_number INTEGER PRIMARY KEY,
  third_lifecycle_content TEXT
);

CREATE TABLE destiny_lifecycle (
  destiny_lifecycle_id SERIAL PRIMARY KEY,
  destiny_number INTEGER,
  lifecycle_number INTEGER,
  destiny_lifecycle_content TEXT
);

CREATE TABLE turning_points (
  turning_points_number INTEGER PRIMARY KEY,
  turning_points_content TEXT
);

CREATE TABLE challenges (
  challenges_number INTEGER PRIMARY KEY,
  challenges_content TEXT,
  challenges_health TEXT
);

CREATE TABLE personal_year (
  personal_year_number INTEGER PRIMARY KEY,
  personal_year_content TEXT
);

CREATE TABLE astrological_influences (
	astrological_influences_number int4 PRIMARY KEY NOT NULL,
	astrological_influences_content text NULL
);

CREATE TABLE astrological_personal (
  astrological_personal_id SERIAL PRIMARY KEY,
  astrological_influence_number INTEGER,
  personal_year INTEGER,
  astrological_personal_content TEXT
);