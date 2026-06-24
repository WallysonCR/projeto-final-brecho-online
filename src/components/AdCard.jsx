import {
  Card, CardMedia, CardContent, Button,
  Typography, Chip, Box, Stack, Skeleton
} from '@mui/material';

import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const FALLBACK_IMAGE =
  'https://www.ype.ind.br/assets-NS/roupas-de-malha_ypedia-scaled.jpg?w=500';

export default function AdCard({ anuncio, onClick, loading = false }) {

  if (loading) {
    return (
      <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

        <Skeleton variant="rectangular" height={200} animation="wave" />

        <CardContent sx={{ flexGrow: 1 }}>
          <Stack direction="row" spacing={1} flexWrap="wrap">
            <Skeleton width={80} height={24} />
            <Skeleton width={60} height={24} />
          </Stack>

          <Skeleton width="80%" height={28} sx={{ mt: 1 }} />

          <Skeleton width="100%" height={20} />
          <Skeleton width="90%" height={20} />

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Skeleton width={80} />
            <Skeleton width={60} />
          </Box>
        </CardContent>

        <Box sx={{ p: 2 }}>
          <Skeleton height={36} />
        </Box>

      </Card>
    );
  }

  // proteção contra indefinido
  if (!anuncio) return null;

  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>

      <Box sx={{ height: 200, overflow: 'hidden' }}>
        <CardMedia
          component="img"
          image={anuncio.foto}
          onError={(e) => (e.target.src = FALLBACK_IMAGE)}
          sx={{ height: '100%', objectFit: 'cover' }}
        />
      </Box>

      <CardContent sx={{ flexGrow: 1 }}>
        <Stack direction="row" spacing={1} flexWrap="wrap">
          <Chip label={anuncio.categoria} size="small" />
          <Chip label={anuncio.tamanho} size="small" />
        </Stack>

        <Typography fontWeight="bold" noWrap>
          {anuncio.titulo}
        </Typography>

        <Typography variant="body2">
          {anuncio.descricao}
        </Typography>

        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
          <Typography variant="caption" sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
            <LocalOfferIcon fontSize="small" />
            {anuncio.modalidade}
          </Typography>

          <Typography fontWeight="bold">
            {anuncio.vats} VATs
          </Typography>
        </Box>
      </CardContent>

      <Box sx={{ p: 2 }}>
        <Button fullWidth onClick={onClick}>
          Ver detalhes
        </Button>
      </Box>

    </Card>
  );
}