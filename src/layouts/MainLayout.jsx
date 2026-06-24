import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function MainLayout() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Barra de navegação */}
      <Navbar />
      
      {/* Conteúdo da página atual */}
      <Box component="main" sx={{ flexGrow: 1, py: 4, bgcolor: 'background.default' }}>
        <Outlet />
      </Box>

      {/* Rodapé */}
      <Footer />
    </Box>
  );
}