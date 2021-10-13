SELECT
  "cat"."name" as "categoryName",
  count("castMembers"."filmId")
FROM "categories" as "cat"
JOIN "filmCategory" using ("categoryId")
JOIN "castMembers" using ("filmId")
JOIN "actors" using ("actorId")
WHERE "actorId" = 178
GROUP BY "cat"."name";
