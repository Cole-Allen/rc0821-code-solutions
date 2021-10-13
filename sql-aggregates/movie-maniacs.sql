SELECT
  "cust"."firstName",
  "cust"."lastName",
  sum("pay"."amount") as "total"
FROM
  "customers" as "cust"
JOIN
  "payments" as "pay" using ("customerId")
GROUP BY "cust"."customerId"
ORDER BY "total" desc;
