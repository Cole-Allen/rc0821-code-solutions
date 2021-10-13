SELECT
  "co"."name" as "countryName",
  count("ci"."countryId")
FROM
  "countries" as "co"
JOIN
  "cities" as "ci" using ("countryId")
GROUP BY "co"."countryId";
