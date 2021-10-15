# QuanLyGiaiBongDaVDQG

*Server Configuration: Laravel 8.x + PHP 7.4*
- Clone:
#git clone https://github.com/nguyenquochuy2311/QuanLyGiaiBongDaVDQG

#cd server

- Lấy key để chạy:
#php artisan key:generate

- Nếu ko có .env
#cp .env.example .env 

- Tạo database

- Cấu hình .env:
#DB_CONNECTION=mysql          
#DB_HOST=127.0.0.1            
#DB_PORT=3306                 
#DB_DATABASE=.....
#DB_USERNAME=.....        
#DB_PASSWORD=....

- Migrate model sang db:(kiểm tra column chưa)
#php artisan migrate 

#php artisan db:seed {nếu có data sẵn thì chạy}

- Run server:
#php artisan serve
http://127.0.0.1:8000 => http://localhost:8000/
