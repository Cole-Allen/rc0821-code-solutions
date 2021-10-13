SELECT
  "a"."firstName",
  "a"."lastName"
FROM "actors" as "a"
JOIN "castMembers" as "c" using ("actorId")
JOIN "films" as "f" using ("filmId")
WHERE "f"."title" = 'Jersey Sassy';
