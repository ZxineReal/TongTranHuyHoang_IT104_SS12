import "./AccountList.css";

interface User {
  id: number;
  name: string;
  dateOfBirth: string;
  gender: string;
  address: string;
}

const users: User[] = [
  {
    id: 1,
    name: "NVA",
    dateOfBirth: "20-03-2000",
    gender: "Nam",
    address: "Thanh Xuân",
  },
  {
    id: 2,
    name: "NVB",
    dateOfBirth: "20-03-2001",
    gender: "Nữ",
    address: "Hà Đông",
  },
];

const AccountList = () => {
  return (
    <div className="table-container">
      <table className="user-table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Họ và tên</th>
            <th>Ngày sinh</th>
            <th>Giới tính</th>
            <th>Địa chỉ</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.dateOfBirth}</td>
              <td>{user.gender}</td>
              <td>{user.address}</td>
              <td>
                <button className="btn edit">Sửa</button>
                <button className="btn delete">Xóa</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountList;
