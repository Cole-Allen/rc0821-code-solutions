WITH "cte_pay" AS (
  SELECT
    "films"."title",
    "films"."filmId" as "filmId",
    sum("pay"."amount") as "total"
  FROM
    "payments" as "pay"
  JOIN
    "rentals" as "rent" using ("rentalId")
  JOIN
    "inventory" as "inv" using ("inventoryId")
  JOIN
    "films" using ("filmId")
  GROUP BY
    "films"."filmId"
),
"cte_cost" AS (
  SELECT
    "films"."filmId" as "filmId",
    count("inv"."filmId") * "films"."replacementCost" as "total"
  FROM
    "films"
  JOIN
    "inventory" as "inv" using ("filmId")
  GROUP BY
    "films"."filmId"
)

SELECT
  "films"."title",
  "films"."description",
  "films"."rating",
  "pay"."total" - "cost"."total" as "total"
FROM
  "cte_pay" as "pay"
JOIN
  "cte_cost" as "cost" using ("filmId")
JOIN
  "films" using ("filmId")
ORDER BY
  "total" desc
LIMIT 5;
