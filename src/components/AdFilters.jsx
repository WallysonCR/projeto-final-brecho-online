import { Box, Typography, TextField, MenuItem, Button, Stack, Divider } from '@mui/material';
import FilterAltOffIcon from '@mui/icons-material/FilterAltOff';

export default function AdFilters({
  categoria, setCategoria,
  tamanho, setTamanho,
  modalidade, setModalidade,
  minVat, setMinVat,
  maxVat, setMaxVat,
  onLimpar
}) {
  return (
    <Box sx={{
      p: 3,
      position: 'static',
      top: 90,
      borderRadius: 2,
      border: '1px solid rgba(255,255,255,0.1)'
    }}>

      <Typography fontWeight="bold">Filtros</Typography>

      <Button
        startIcon={<FilterAltOffIcon />}
        onClick={onLimpar}
        sx={{ mt: 1 }}
      >
        Limpar
      </Button>

      <Divider sx={{ my: 2 }} />

      <Stack spacing={2}>

        <TextField
          select
          label="Categoria"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          <MenuItem value="camisa">CAMISA</MenuItem>
          <MenuItem value="calca">CALÇA</MenuItem>
          <MenuItem value="casaco">CASACO</MenuItem>
          <MenuItem value="calcado">CALÇADO</MenuItem>
          <MenuItem value="acessorio">ACESSÓRIO</MenuItem>
          <MenuItem value="outro">OUTRO</MenuItem>
        </TextField>

        <TextField
          select
          label="Tamanho"
          value={tamanho}
          onChange={(e) => setTamanho(e.target.value)}
        >
          {['PP','P','M','G','GG'].map(t => (
            <MenuItem key={t} value={t}>{t}</MenuItem>
          ))}
        </TextField>

        <TextField
          select
          label="Modalidade"
          value={modalidade}
          onChange={(e) => setModalidade(e.target.value)}
        >
          {['Venda','Troca','Ambos'].map(m => (
            <MenuItem key={m} value={m}>{m}</MenuItem>
          ))}
        </TextField>

        <Box>
          <Typography variant="caption">VAT</Typography>

          <Stack direction="row" spacing={1}>
            <TextField
              type="number"
              label="Min"
              value={minVat}
              onChange={(e) => setMinVat(e.target.value)}
            />
            <TextField
              type="number"
              label="Max"
              value={maxVat}
              onChange={(e) => setMaxVat(e.target.value)}
            />
          </Stack>
        </Box>

      </Stack>
    </Box>
  );
}