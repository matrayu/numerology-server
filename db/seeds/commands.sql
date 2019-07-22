
/* return a users motivation number */
SELECT u.id, u.username, mu.motivation_number, m.motivation_content
FROM users u
LEFT JOIN motivation_users mu ON mu.user_id = u.id
LEFT JOIN motivation m ON m.motivation_number = mu.motivation_number
WHERE u.username = 'wippy'