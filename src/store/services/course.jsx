import api from "../api";
import * as yup from "yup";

export const createCourseSchema = yup.object().shape({
  maKhoaHoc: yup.string().required("Required"),
  biDanh: yup.string().required("Required"),
  tenKhoaHoc: yup.string().required("Required"),
  moTa: yup.string().required("Required"),
  luotXem: yup.number().required("Required"),
  danhGia: yup.number().required("Required"),
  hinhAnh: yup.string().required("Required"),
  maNhom: yup.string().required("Required"),
  ngayTao: yup.string().required("Required"),
  maDanhMucKhoaHoc: yup.string().required("Required"),
  taiKhoanNguoiTao: yup.string().required("Required"),
});

class CourseService {
  constructor() {
    this.maNhom = "GP08";
    this.pageSize = 10;
  }

  // (Public) trả về Danh sách khóa học
  layDanhSachKhoaHoc = () =>
    api.get(`QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=${this.maNhom}`);

  // (Public) trả về thông tin 1 khóa học theo mã khóa học
  layThongTinKhoaHoc = (maKhoaHoc) =>
    api.get(`QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`);

  // (Public) trả về danh sách khóa học phân trang (page: trang hiện tại, pageSize: số items trong 1 trang)
  layDanhSachKhoaHocPhanTrang = (page) =>
    api.get(
      `QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${this.pageSize}&MaNhom=${this.maNhom}`
    );

  // (Public) trả về mã danh mục và tên danh mục
  layDanhMucKhoaHoc = () => api.get("QuanLyKhoaHoc/LayDanhMucKhoaHoc");

  // (Public) trả về danh sách khóa học theo danh mục
  layKhoaHocTheoDanhMuc = (maDanhMuc) =>
    api.get(
      `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${this.maNhom}`
    );

  // (Private, maLoaiNguoiDung: HV) (data: gồm maKhoaHoc và taiKhoan của HV) trả về thông báo "Ok"
  dangKyKhoaHoc = (data) => api.post("QuanLyKhoaHoc/DangKyKhoaHoc", data);

  // (Private, maLoaiNguoiDung: GV) trả về danh sách học viên đăng ký khóa học và khóa học theo mã
  layThongTinHocVienKhoaHoc = (maKhoaHoc) =>
    api.get(`QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=${maKhoaHoc}`);

  // (Private, maLoaiNguoiDung: GV) (data: thông tin khóa học) trả về thông tin khóa học mới thêm
  themKhoaHoc = (data) => api.post("QuanLyKhoaHoc/ThemKhoaHoc", data);

  // (Private, maLoaiNguoiDung: GV) (data: thông tin khóa học)  trả về thông tin khóa học mới cập nhật
  capNhatKhoaHoc = (data) => api.post("QuanLyKhoaHoc/CapNhatKhoaHoc", data);

  // (Private, maLoaiNguoiDung: GV) trả về thông báo xóa thành công
  xoaKhoaHoc = (maKhoaHoc) =>
    api.delete(`QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`);

  // (Private, maLoaiNguoiDung: GV) (data: gồm maKhoaHoc và taiKhoan của HV) trả về thông báo ghi danh thành công
  ghiDanhKhoaHoc = (data) => api.post("QuanLyKhoaHoc/GhiDanhKhoaHoc", data);

  // (Private, maLoaiNguoiDung: GV) (data: gồm maKhoaHoc và taiKhoan của HV) trả về thông báo hủy ghi danh thành công
  huyGhiDanh = (data) => api.post("QuanLyKhoaHoc/HuyGhiDanh", data);
}

export default CourseService;
