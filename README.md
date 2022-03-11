## Cài đặt

1. Clone project này về và cd vào project
2. Mở terminal (nhớ ở đúng folder)-> npm install
3. npm audit fix
4. npm start
5. Tạo branch mới để code -> push code lên github, nhánh develop -> sau khi code được review và merge vào develop thì delete branch
6. pull code về ở nhánh develop

## Extension
1. Prettier & Eslint - Format code

## Cách push và pull code
- Push code lên nhánh develop, không push lên master
- Tạo pull request cũng tạo ở nhánh develop
- Cú pháp:
        git push <remote> <local_branch>:<remote_branch_name>
        git push origin quyen/ten_nhanh:develop
- Lưu ý: khi push code lên develop không merge vào master
        
## Các url đang khả dụng
- /                       -> Trang giới thiệu
- /login                  -> Trang đăng nhập
- /logup                  -> Trang đăng ký
- /forgot-password        -> Trang quên mật khẩu
- /reset-password         -> Trang làm mới mật khẩu
- /question               -> Trang tất cả câu hỏi
- /profile                -> Trang thông tin người dùng
