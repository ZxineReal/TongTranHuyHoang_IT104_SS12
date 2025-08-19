const UserInfo = () => {
  const username: string = "Nguyễn Văn A";
  const gender: string = "Nam";
  const dateOfBirth: Date = new Date("2024-06-03");
  const email: string = "nva@gmail.com";
  const address: string = "Thanh Xuân, Hà Nội";

  const formatDate = (date: Date): string => {
    return date.toLocaleDateString("vi-VN", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <div>
      <h2>Thông tin cá nhân</h2>
      <ul>
        <li>Họ và tên: {username}</li>
        <li>Giới tính: {gender}</li>
        <li>Ngày sinh: {formatDate(dateOfBirth)}</li>
        <li>Email: {email}</li>
        <li>Địa chỉ: {address}</li>
      </ul>
    </div>
  );
};

export default UserInfo;
