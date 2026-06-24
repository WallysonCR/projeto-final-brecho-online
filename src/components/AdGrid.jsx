import { Box } from '@mui/material';
import AdCard from './AdCard';

export default function AdGrid({ anuncios, carregando, onClick }) {

  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: {
          xs: '1fr',
          sm: 'repeat(2, 1fr)',
          lg: 'repeat(3, 1fr)'
        },
        gap: 3
      }}
    >

      {carregando
        ? [1,2,3,4,5,6].map((i) => (
            <AdCard key={i} loading />
          ))
        : anuncios.map((anuncio) => (
            <AdCard
              key={anuncio.id}
              anuncio={anuncio}
              onClick={() => onClick(anuncio.id)}
            />
          ))
      }

    </Box>
  );
}