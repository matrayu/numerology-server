BEGIN;

TRUNCATE
  things,
  motivation,
  users
  RESTART IDENTITY CASCADE;

INSERT INTO users (username, first_name, middle_name, last_name, dob, password)
VALUES
  ('dunder', 'Dunder', 'Aka', 'Mifflin', '2000-05-03', '$2a$12$AmM8ZuvNAXf5FKYtyQ1xCus6Nm.YPbPazD3IAibAwZQWxdR7znkvW'),
  ('b.deboop', 'Bodeep', 'Ira', 'Deboop', '1979-08-03', '$2a$12$LwaEMhzGB1wQLmXmZch57e.t.N8YFZR49Ax4oHD1nGAYLxWJ5e0zK'),
  ('c.bloggs', 'Charlie', 'Moore', 'Bloggs', '1978-01-13', '$2a$12$HOjNkF3P/VqJB7YEuOKvx.yPokHFP0Bdkkk.qpqsOBt42D8xMkVlK'),
  ('s.smith', 'Sam', 'James', 'Smith', '1949-08-10', '$2a$12$c228lzGCIVZ0rOSQuz/LVOSuOysnJIXeMASEzMaQW40SQ5B0ODkYK'),
  ('lexlor', 'Alex', 'Tate', 'Taylor', '1942-05-11', '$2a$12$hOYu4F/2DFGyZnS4ir28pu7Oy2JKePsc0d8h87cNfNealWurUhOoO'),
  ('wippy', 'Ping', 'Won', 'In', '1979-02-21', '$2a$12$VD04zwnrQZ/2.6Pw.ijzQuebC.M4ZZxH3UUq3IxaDzb.AvXus4k0S');

INSERT INTO motivation (motivation_number, motivation_content) VALUES 
(1,'Content for motivation value 1')
,(2,'Content for motivation value 2')
,(3,'Content for motivation value 3')
,(4,'Content for motivation value 4')
,(5,'Content for motivation value 5')
,(6,'Content for motivation value 6')
,(7,'Content for motivation value 7')
,(8,'Content for motivation value 8')
,(9,'Content for motivation value 9')
,(11,'Content for motivation value 11')
,(22,'Content for motivation value 22');

INSERT INTO motivation_users (user_id, motivation_number) VALUES 
(1,1)
,(2,1)
,(3,5)
,(4,7)
,(5,11)
,(6,22);

COMMIT;