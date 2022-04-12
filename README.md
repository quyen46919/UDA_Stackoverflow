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
        `git push <remote> <local_branch>:<remote_branch_name>`
        `git push origin quyen/ten_nhanh:develop`
- Lưu ý: khi push code lên develop không merge vào master
- Việc merge code ở nhánh develop vào master sẽ do nhóm trưởng thực hiện
        
## Các url đang khả dụng
1. Routes chung
- /                             -> Trang giới thiệu
- /fallback                     -> Trang fallback (loading)
2. Authentication routes
- /login                        -> Trang đăng nhập
- /logup                        -> Trang đăng ký
- /forgot-password              -> Trang quên mật khẩu
- /reset-password               -> Trang làm mới mật khẩu
3. Home routes
- /home                         -> Trang tất cả câu hỏi
- /question                     -> Trang tất cả câu hỏi
- /question/questionId          -> Trang chi tiết câu hỏi
- /home/post                    -> Trang đăng tải câu hỏi
- /home/group                   -> Trang tất cả các nhóm
- /home/group/:groupId          -> Trang chi tiết nhóm
4. Profile routes
- /profile                      -> Trang thông tin người dùng
- /profile/notificationList     -> Trang thông báo của người dùng
- /profile/notification         -> Trang chỉnh sửa cài đặt thông báo
- /profile/privacy              -> Trang chỉnh sửa cài đặt quyền riêng tư
- /profile/blacklist            -> Trang chỉnh sửa danh sách chặn
- /profile/system               -> Trang chỉnh sửa cài đặt cấu hình hệ thống (ngôn ngữ, theme)
5. Blog routes
- /blogs                        -> Trang tất cả blog
- /blogs/:blogId                -> Trang chi tiết blog
6. Admin routes
- /admin                        -> Trang thống kê
- /admin/users                  -> Trang quản lí người dùng
- /admin/questions              -> Trang quản lí danh sách câu hỏi
