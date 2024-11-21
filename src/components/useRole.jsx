import { useSelector } from 'react-redux';

const useRole = () => {
  // Lấy role từ Redux
  const reduxRole = useSelector((state) => state.auth.role);
  // Nếu role không có trong Redux, thì lấy từ localStorage
  const role = reduxRole || localStorage.getItem('role');

  return role;
};

export default useRole;
