import { Box, Typography, Button, Stack } from '@mui/material';
import StorefrontIcon from '@mui/icons-material/Storefront';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';

export default function HeroBanner({ onExplorar, onAnunciar }) {
  return (
    <Box
      sx={{
        bgcolor: 'primary.dark',
        color: 'white',
        borderRadius: 4,
        p: { xs: 4, md: 8 },
        textAlign: 'center',
        mb: 6,
        animation: 'fadeInUp 0.6s cubic-bezier(0.4,0,0.2,1)',
        '@keyframes fadeInUp': {
          from: { opacity: 0, transform: 'translateY(15px)' },
          to: { opacity: 1, transform: 'translateY(0)' }
        }
      }}
    >
      <Typography variant="h3" fontWeight="bold">
        Estilo Sustentável, Economia Circular
      </Typography>

      <Typography sx={{ mt: 2, opacity: 0.7 }}>
        Renove seu guarda-roupa com VATs
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
        <Button
          startIcon={<StorefrontIcon />}
          onClick={onExplorar}
          variant="contained"
        >
          Explorar
        </Button>

        <Button
          startIcon={<AddCircleOutlinedIcon />}
          onClick={onAnunciar}
          variant="outlined"
        >
          Anunciar
        </Button>
      </Stack>
    </Box>
  );
}