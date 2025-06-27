# Dev Setup

## Prisma Database setup

Make sure you completed steps in project README to set up your postgres database on your local device

```sh
npm install
npm db:reset
npm db:migrate
```

You'll be prompted to name your migration. Name it "first_migration"

You should now see a migrations folder appear in the file directory, your database is now fully initialized with the proper rows and columns.

## Start Server

Now that our database is set up we can start up our server and begin to make http requests

```sh
npm run dev
```

You can begin adding data to the database using the initial routing outlined in index.ts

**Coming Soon:** A seed file to give you some initial data to work with and see when you initialize your database
