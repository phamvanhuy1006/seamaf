import Box from '@mui/material/Box';
import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';

const Admin = (props) => {
  return (
    <Box className="admin"
    sx={{
      display:'grid',
      gridTemplateColumns: {
        lg: '1fr 5fr',
      },
      gap:0
    }}>
      <NavBar />
      <Outlet />
    </Box>
  );
}

export default Admin;