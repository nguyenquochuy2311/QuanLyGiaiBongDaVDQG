# QuanLyGiaiBongDaVDQG

*Server Configuration: Laravel 8.x + PHP 7.4*
- Clone:
```sh
git clone https://github.com/nguyenquochuy2311/QuanLyGiaiBongDaVDQG
```
```sh
cd server
```
- Lấy key để chạy:
```sh
php artisan key:generate
```

- Nếu ko có .env
```sh
cp .env.example .env 
```

- Tạo database

- Cấu hình .env:
```sh
DB_CONNECTION=mysql          
DB_HOST=127.0.0.1            
DB_PORT=3306                 
DB_DATABASE=.....
DB_USERNAME=.....        
DB_PASSWORD=....
```

- Migrate model sang db:(kiểm tra column chưa)
```sh
php artisan migrate 
```

- Nếu có data sẵn thì chạy:
```sh
php artisan db:seed 
```

- Run server:
```sh
php artisan serve
```
=> http://127.0.0.1:8000 => http://localhost:8000/
