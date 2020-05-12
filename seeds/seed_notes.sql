BEGIN;

INSERT INTO notes (note_name, folder_id, content)

VALUES
('Test 1', '4', 'Bananas rock'),
('Test 2', '3', 'Unicorns rock'),
('Test 3', '3', 'Soraka rock'),
('Test 4', '1', 'Puppies rock'),
('Test 5', '4', 'Mangoes rock'),
('Test 6', '2', 'I rock'),
('Test 7', '2', 'U do not rock'),
('Test 8', '1', 'Rocks rock'),
('Test 9', '1', 'Pop rock'),
('Test 10', '1', 'Lets rock'),
('Test 11', '4', 'Stonefruit rock'),
('Test 12', '4', 'Berries rock'),
('Test 13', '2', 'Stop wit the rock');

COMMIT;