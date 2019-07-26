CREATE TABLE motivation_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  motivation_number INTEGER REFERENCES motivation(motivation_number)
);

CREATE TABLE inner_self_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  inner_self_number INTEGER REFERENCES inner_self(inner_self_number)
);

CREATE TABLE expression_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  expression_number INTEGER REFERENCES expression(expression_number)
);

CREATE TABLE karmic_lessons_users (
  karmic_lessons_id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  karmic_lessons_number INTEGER REFERENCES karmic_lessons(karmic_lessons_number)
);

CREATE TABLE hidden_tendencies_users (
  hidden_tendencies_users_id INTEGER PRIMARY KEY,
  user_id INTEGER REFERENCES users(id),
  hidden_tendencies_number INTEGER REFERENCES hidden_tendencies(hidden_tendencies_number)
);

CREATE TABLE subconscious_response_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  subconscious_response_number INTEGER REFERENCES subconscious_response(subconscious_response_number)
);

CREATE TABLE destiny_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  destiny_number INTEGER REFERENCES destiny(destiny_number)
);

CREATE TABLE first_lifecycle_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  first_lifecycle_number INTEGER REFERENCES first_lifecycle(first_lifecycle_number)
);

CREATE TABLE second_lifecycle_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  second_lifecycle_number INTEGER REFERENCES second_lifecycle(second_lifecycle_number)
);

CREATE TABLE third_lifecycle_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  third_lifecycle_number INTEGER REFERENCES third_lifecycle(third_lifecycle_number)
);

CREATE TABLE destiny_lifecycle_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  destiny_lifecycle_id INTEGER REFERENCES destiny_lifecycle(destiny_lifecycle_id)
);

CREATE TABLE turning_points_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  turning_points_number INTEGER REFERENCES turning_points(turning_points_number)
);

CREATE TABLE challenges_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  challenges_number INTEGER REFERENCES challenges(challenges_number)
);

CREATE TABLE personal_year_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  personal_year_number INTEGER REFERENCES personal_year(personal_year_number)
);

CREATE TABLE astrological_influences_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  astrological_influences_number INTEGER REFERENCES astrological_influences(astrological_influences_number)
);

CREATE TABLE astrological_personal_users (
  user_id INTEGER PRIMARY KEY REFERENCES users(id),
  astrological_personal_id INTEGER REFERENCES astrological_personal(astrological_personal_id)
);
