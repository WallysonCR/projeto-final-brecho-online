import { Box, TextField, MenuItem, Typography, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function AdSearchBar({
  busca,
  setBusca,
  ordenacao,
  setOrdenacao,
  total
}) {
  return (
    <>
      <Box 
        sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 200px' }, 
          gap: 2,
          width: '100%',
        }}
      >
        <TextField
          fullWidth
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
          placeholder="Pesquisar..."
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            )
          }}
        />

        <TextField
          select
          value={ordenacao}
          onChange={(e) => setOrdenacao(e.target.value)}
          fullWidth
        >
          <MenuItem value="recentes">Recentes</MenuItem>
          <MenuItem value="menor_vat">Menor Valor</MenuItem>
          <MenuItem value="maior_vat">Maior Valor</MenuItem>
        </TextField>
      </Box>

      <Typography sx={{ mt: 2 }}>
        {total} anúncios
      </Typography>
    </>
  );
}