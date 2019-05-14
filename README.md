# dmpgen

Node script to generate huge mysql dump. It generates a table name properties and inserts configured number of rows in the table

## Usage

- Configure DB details, table name and number of rows to generate in [config.json](config.json)
- Database table should have following columns
  - `lat`
  - `lng`
  - `price`
  - `bathrooms`
  - `bedrooms`
- To start the script, run the below command
```
node index.js
```

## Contributing

We are constantly working on improving `my-no-sql` and we need all the help we can get.

You can contribute to this project by giving [suggestions](https://github.com/arshadkazmi42/dmpgen/issues/new), fixing [open issues](https://github.com/arshadkazmi42/dmpgen/issues) or by implementing a new feature. Read our contibution guide [here](CONTRIBUTING.md)

## Contributors

Thank you to all the contributors who have helped us in making this project better 🙌

<a href="https://github.com/arshadkazmi42"><img src="https://github.com/arshadkazmi42.png" width="30" /></a>
