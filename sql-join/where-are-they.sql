SELECT "a"."line1",
"c"."name" as "cityName",
"a"."district",
"co"."name" as "countryName"
FROM "addresses" as "a"
JOIN "cities" as "c" using ("cityId")
JOIN "countries" as "co" using ("countryId");
