# Bridge-the-Gap

## By: Jackson Seifferly

## Meta University Internship Program 2025

Project Plan: <https://docs.google.com/document/d/1vNQNzT8_fTWdJuXJ9tGQTQziGGsSEb8sm781ow9e8tE/edit?usp=sharing>

## Postgres Setup

This project makes use of a postgres database for the backend of the application, if you do not already have it installed go install it here <https://www.postgresql.org/download/>

Next we will move into the psql shell to set up our database

```bash
psql postgres
```

Now that we are in our postgres terminal we will set up our database with these commands

```sql
    DROP DATABASE IF EXISTS bridgedb;
    DROP ROLE IF EXISTS app_user;
    CREATE ROLE app_user WITH LOGIN PASSWORD '1234';
    ALTER ROLE app_user CREATEDB;
    CREATE DATABASE bridgedb OWNER app_user;
```

Now our database is initialized, lets leave the postgres terminal

```sql
\q
```

Continue to the backend README to finish setup with Prisma
