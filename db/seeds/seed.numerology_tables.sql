BEGIN;

TRUNCATE
  users
  RESTART IDENTITY CASCADE;

INSERT INTO users (username, first_name, middle_name, last_name, dob, password, motivation, inner_self, expression, karmic_lessons,hidden_tendencies,subconscious_response,destiny,first_lifecycle,second_lifecycle,third_lifecycle,fourth_lifecycle,first_minor_challenge,second_minor_challenge,major_challenge,personal_year,astrological_influence)
VALUES
  ('dunder', 'Dunder', 'Aka', 'Mifflin', '2000-05-03', '$2a$12$AmM8ZuvNAXf5FKYtyQ1xCus6Nm.YPbPazD3IAibAwZQWxdR7znkvW',5,3,1,'{2,22}','{4,11}',6,1,'{7,2}','{8,3}','{9,4}','{11,5}',1,6,1,7,2),
  ('b.deboop', 'Bodeep', 'Ira', 'Deboop', '1979-08-03', '$2a$12$LwaEMhzGB1wQLmXmZch57e.t.N8YFZR49Ax4oHD1nGAYLxWJ5e0zK',1,4,7,'{3,11}','{5,22}',7,2,'{8,3}','{9,4}','{11,5}','{22,6}',2,7,2,8,3),
  ('c.bloggs', 'Charlie', 'Moore', 'Bloggs', '1978-01-13', '$2a$12$HOjNkF3P/VqJB7YEuOKvx.yPokHFP0Bdkkk.qpqsOBt42D8xMkVlK',2,3,17,'{4,9}','{6,1}',8,3,'{9,4}','{11,5}','{22,6}','{1,7}',22,8,3,9,4),
  ('s.smith', 'Sam', 'James', 'Smith', '1949-08-10', '$2a$12$c228lzGCIVZ0rOSQuz/LVOSuOysnJIXeMASEzMaQW40SQ5B0ODkYK',4,11,5,'{5,8}','{7,2}',9,4,'{11,5}','{22,6}','{1,7}','{2,8}',3,9,4,11,5),
  ('lexlor', 'Alex', 'Tate', 'Taylor', '1942-05-11', '$2a$12$hOYu4F/2DFGyZnS4ir28pu7Oy2JKePsc0d8h87cNfNealWurUhOoO',8,7,22,'{6,7}','{8,3}',11,5,'{22,6}','{1,7}','{2,8}','{3,9}',4,11,5,22,6),
  ('wippy', 'Ping', 'Won', 'In', '1979-02-21', '$2a$12$VD04zwnrQZ/2.6Pw.ijzQuebC.M4ZZxH3UUq3IxaDzb.AvXus4k0S',9,9,11,'{7,6}','{9,4}',22,6,'{1,7}','{2,8}','{3,9}','{4,11}',5,22,6,1,7);

COMMIT;







