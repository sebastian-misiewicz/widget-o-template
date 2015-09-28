# Template for widget-o applications

## Requirements
* composer
* bower

## How to use
1. Clone or download the files from repository.
1. Get the *bower* dependencies 
   ```
   bower update
   ```
1. Get the *composer* dependencies
   ```
   composer update
   ```
1. Create a database and run the creation script (vendor/widget-o/widget-o-php/sql/create.sql)
   *Currently only MySQL is supported out-of-the box*
1. Adjust the connection properties in *config/database.json*
1. Run the application