# QuanLyGiaiBongDaVDQG

## Server - Laravel 8
*Server Configuration: Laravel 8.x + PHP 7.4*
- Required:
*Download XAMPP + Install Composer(https://getcomposer.org/download/)*

- Clone:
```sh
git clone https://github.com/nguyenquochuy2311/QuanLyGiaiBongDaVDQG
```
```sh
cd server
```

- Install vendor:
```sh
composer install
```

- If fail install:
```sh
composer update
```
- Create .env
```sh
cp .env.example .env 
```

- Get key to run app:
```sh
php artisan key:generate
```
- Create database

- Config .env:
```sh
DB_CONNECTION=mysql          
DB_HOST=127.0.0.1            
DB_PORT=3306                 
DB_DATABASE=.....
DB_USERNAME=.....        
DB_PASSWORD=....
```

- Migrate model to db:
```sh
php artisan migrate 
```

- Import database

- Run server:
```sh
php artisan serve
```
=> http://127.0.0.1:8000 => http://localhost:8000/

-----------------------------------------------------------
## Client - Getting Started with Create React App


### Available Scripts

### `cd client/app`
### `npm i` to install node_modules.
In the project directory, you can run: 
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


## Structor Project:
    |__src____assets: img, video
    |       |__views:
    |       |__components: 
    |       |__styles: chứa các file global scss.
    |       |__utils: chứ các hàm xử lý js
    |       |__routes: chứa các đường dẫn
    |
    |__index.js

