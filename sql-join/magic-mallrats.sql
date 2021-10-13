SELECT
  "c"."firstName",
  "c"."lastName"
FROM
  "customers" as "c"
JOIN
  "rentals" using ("customerId")
JOIN
  "inventory" using ("inventoryId")
JOIN
  "films" using ("filmId")
WHERE "films"."title" = 'Magic Mallrats';
