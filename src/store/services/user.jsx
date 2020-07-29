import api from "../api";
import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("Required"),
  matKhau: yup.string().required("Required"),
  hoTen: yup.string().required("Required"),
  email: yup.string().required("Required").email("Email is invalid"),
  soDT: yup
    .string()
    .required("Required")
    .matches(/(03|07|08|09|01[2|6|8|9])+([0-9]{8})\b/),
  maNhom: yup.string().required("required"),
});

class UserService {
  constructor() {
    this.maNhom = "GP08";
    this.pageSize = 60;
  }
  // (Public) (data gồm các trường thông tin tài khoản) trả về thông tin mới đăng ký
  dangKy = (data) => api.post("QuanLyNguoiDung/DangKy", data);

  // (Public) (data gồm taiKhoan và matKhau) trả về accessToken (set Headers: type: Authorization - value: Bearer + accessToken)
  dangNhap = (data) => api.post("QuanLyNguoiDung/DangNhap", data);

  // (Public) trả về maLoaiNguoiDung: HV or GV và tenLoaiNguoiDung: Giáo vụ or Học viên
  layDanhSachLoaiNguoiDung = () =>
    api.get("LayDanhSachLoaiNguoiDung");

  // (Public) Nếu taiKhoan === "" trả về danh sách người dùng.
  layDanhSachNguoiDung = (taiKhoan) => {
    if (taiKhoan !== "")
      return api.get(
        `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${this.maNhom}&tuKhoa=${taiKhoan}`
      );
    return api.get(`QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${this.maNhom}`);
  };

  // (Public) Nếu taiKhoan === "" trả về danh sách người dùng, page là trang hiện tại, pageSize là số users trên 1 trang
  layDanhSachNguoiDungPhanTrang = (taiKhoan, page) => {
    if (taiKhoan !== "")
      return api.get(
        `QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${this.maNhom}&tuKhoa=${taiKhoan}&page=${page}&pageSize=${this.pageSize}`
      );
    return api.get(
      `QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=${this.maNhom}&page=${page}&pageSize=${this.pageSize}`
    );
  };

  // (Public) Nếu taiKhoan === "" trả về danh sách người dùng ( !== "" trả về có mật khẩu)
  timKiemNguoiDung = (taiKhoan) => {
    if (taiKhoan !== "")
      return api.get(
        `QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${this.maNhom}&tuKhoa=${taiKhoan}`
      );
    return api.get(`QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=${this.maNhom}`);
  };

  // (Private) (data: taiKhoan & matKhau) (maLoaiNguoiDung: HV or GV) là HV trả về khóa học đã đăng ký, là GV trả về khóa học đã ghi danh
  thongTinTaiKhoan = (data) => api.post("QuanLyNguoiDung/ThongTinTaiKhoan", data);

  // (Private) (data: là thông tin người dùng) (maLoaiNguoiDung: GV) trả về thông tin người dùng mới thêm
  themNguoiDung = (data) => api.post("QuanLyNguoiDung/ThemNguoiDung", data);

  // (Private) (data: là thông tin người dùng) (maLoaiNguoiDung: GV) trả về thông tin người dùng mới cập nhật
  capNhatThongTinNguoiDung = (data) =>
    api.post("QuanLyNguoiDung/CapNhatThongTinNguoiDung", data);

  // (Private) (maLoaiNguoiDung: GV) trả về thông báo xóa thành công
  xoaNguoiDung = (taiKhoan) =>
    api.post(`QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`);

  // (Private) (maLoaiNguoiDung: GV) trả về danh sách khóa học chưa ghi danh hoặc chưa đăng ký
  layDanhSachKhoaHocChuaGhiDanh = (taiKhoan) =>
    api.post(`QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`);

  // (Private) (maLoaiNguoiDung: GV) trả về danh sách khóa học đã ghi danh hoặc đăng ký nhưng chưa xét duyệt
  layDanhSachKhoaHocChoXetDuyet = (taiKhoan) =>
    api.post("QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", { taiKhoan });

  // (Private) (maLoaiNguoiDung: GV) trả về danh sách khóa học đã ghi danh hoặc đăng ký và đã xét duyệt
  layDanhSachKhoaHocDaXetDuyet = (taiKhoan) =>
    api.post("QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", { taiKhoan });

  // (Private) (maLoaiNguoiDung: GV) trả về danh sách người dùng chưa ghi danh và khóa học theo mã khóa học
  layDanhSachNguoiDungChuaGhiDanh = (maKhoaHoc) =>
    api.post("QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh", { maKhoaHoc });

  // (Private) (maLoaiNguoiDung: GV) trả về danh sách người dùng đã ghi danh nhưng chưa xét duyệt khóa học theo mã khóa học
  layDanhSachHocVienChoXetDuyet = (maKhoaHoc) =>
    api.post("QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet", { maKhoaHoc });

  // (Private) (maLoaiNguoiDung: GV) trả về danh sách người dùng đã ghi danh nhưng đã xét duyệt khóa học theo mã khóa học
  layDanhSachHocVienKhoaHoc = (maKhoaHoc) =>
    api.post("QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc", { maKhoaHoc });
}

export default UserService;
