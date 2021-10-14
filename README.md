# QuanLyGiaiBongDaVDQG

Server Configuration: Laravel 8.x + PHP 7.4
- Clone:
git clone https://github.com/nguyenquochuy2311/QuanLyGiaiBongDaVDQG

cd server

- Lấy key để chạy
php artisan key:generate

cp .env.example .env (nếu ko có .env)

- Tạo database

- Cấu hình .env
VD:
DB_CONNECTION=mysql          
DB_HOST=127.0.0.1            
DB_PORT=3306                 
DB_DATABASE={tên db}
DB_USERNAME=root        
DB_PASSWORD=

- Migrate model sang db:
php artisan migrate (kiểm tra column chưa)

php artisan db:seed {nếu có data sẵn thì chạy}

- Run server
php artisan serve
