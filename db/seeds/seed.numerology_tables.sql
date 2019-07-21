BEGIN;

TRUNCATE
  things,
  users
  RESTART IDENTITY CASCADE;

INSERT INTO users (username, firstName, middleName, lastName, dob, password)
VALUES
  ('dunder', 'Dunder', 'Aka', 'Mifflin', '2000-05-03', '$2a$12$AmM8ZuvNAXf5FKYtyQ1xCus6Nm.YPbPazD3IAibAwZQWxdR7znkvW'),
  ('b.deboop', 'Bodeep', 'Ira', 'Deboop', '1979-08-03', '$2a$12$LwaEMhzGB1wQLmXmZch57e.t.N8YFZR49Ax4oHD1nGAYLxWJ5e0zK'),
  ('c.bloggs', 'Charlie', 'Moore', 'Bloggs', '1978-01-13', '$2a$12$HOjNkF3P/VqJB7YEuOKvx.yPokHFP0Bdkkk.qpqsOBt42D8xMkVlK'),
  ('s.smith', 'Sam', 'James', 'Smith', '1949-08-10', '$2a$12$c228lzGCIVZ0rOSQuz/LVOSuOysnJIXeMASEzMaQW40SQ5B0ODkYK'),
  ('lexlor', 'Alex', 'Tate', 'Taylor', '1942-05-11', '$2a$12$hOYu4F/2DFGyZnS4ir28pu7Oy2JKePsc0d8h87cNfNealWurUhOoO'),
  ('wippy', 'Ping', 'Won', 'In', '1979-02-21', '$2a$12$VD04zwnrQZ/2.6Pw.ijzQuebC.M4ZZxH3UUq3IxaDzb.AvXus4k0S');

INSERT INTO things (title, image, userId, content)
VALUES
  ('Hand-Painted Rubber Ducky', 'https://loremflickr.com/750/300/landscape?random=1', 1, 'This ducky has been hand-painted and is now art. Therefore it is useless and cannot be put in water.'),
  ('Cloning Machine', 'https://loremflickr.com/750/300/landscape?random=2', 2, '100% guaranteed to occasionally work every time! Requires a 167.23v power outlet or a dragonscale battery (obtained separately by solving a riddle).'),
  ('Kangaroo Carrier', 'https://loremflickr.com/750/300/landscape?random=3', 3, 'This convenient item can assist you in bringing your kangaroo to your favorite grocery store, or as a conversation starter at a first date or funeral.'),
  ('Love Potion #26', 'https://loremflickr.com/750/300/landscape?random=4', 4, 'While not as well known as its predecessor, Love Potion #9, this formulation has been proven to be effective in winning the affections of some small amphibians.'),
  ('My Freeze Ray', 'https://loremflickr.com/750/300/landscape?random=5', 5, 'With this freeze ray, you can stop the world.'),
  ('Personal EMP Generator', 'https://loremflickr.com/750/300/landscape?random=6', 6, 'With its guaranteed 10m radius, this discreet device will disable an entire busload of iPhones with the push of a button. It is recommended to include an analog camera which can record the entertaining looks on the faces of those affected, as well as a riot shield in case of mass hysteria.'),
  ('Foolproof Instant Wealth Pamphlet', 'https://loremflickr.com/750/300/landscape?random=7', 1, 'Purchase this pamphlet for $100. Sell this pamphlet to a billion people for $100. Acquisition of this pamphlet is indeed proof of foolishness!'),
  ('Story Water Spigot', 'https://loremflickr.com/750/300/landscape?random=8', 2, 'Once installed by a qualified leprechaun, this spigot will produce a steady stream of stories which can be later be adapted to motion pictures which will not be quite as good as the originals.'),
  ('Ruby Red Slippers', 'https://loremflickr.com/750/300/landscape?random=9', 3, 'Get home quicker than either Uber or Lyft! Three taps of the heels is all it takes. One size fits all.'),
  ( 'Magic Lamp', 'https://loremflickr.com/750/300/landscape?random=10', 4, 'May or may not produce a genie.');

COMMIT;