SELECT  "f"."releaseYear",
        "c"."name" as "categoryName"
FROM "films" as "f"
JOIN "filmCategory" USING ("filmId")
JOIN "categories" as "c" using ("categoryId")
WHERE "f"."title" = 'Boogie Amelie';
