import { useState, useRef, useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { Container, Box } from '@mui/material';

import useFilteredAds from '../hooks/useFilteredAds';
import HeroBanner from '../components/HeroBanner';
import AdFilters from '../components/AdFilters';
import AdSearchBar from '../components/AdSearchBar';
import AdGrid from '../components/AdGrid';

export default function Home() {
  const { anuncios } = useStore();
  const navigate = useNavigate();
  const catalogoRef = useRef(null);

  const [busca, setBusca] = useState('');
  const [categoria, setCategoria] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [modalidade, setModalidade] = useState('');
  const [minVat, setMinVat] = useState('');
  const [maxVat, setMaxVat] = useState('');
  const [ordenacao, setOrdenacao] = useState('recentes');

  const [carregando, setCarregando] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('scroll_to_catalogo') === 'true') {
      sessionStorage.removeItem('scroll_to_catalogo');

      setTimeout(() => {
        catalogoRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  }, []);

  useEffect(() => {
    setCarregando(true);
    const timer = setTimeout(() => setCarregando(false), 350);
    return () => clearTimeout(timer);
  }, [busca, categoria, tamanho, modalidade, minVat, maxVat, ordenacao]);

  const anunciosFiltrados = useFilteredAds(anuncios, {
    busca,
    categoria,
    tamanho,
    modalidade,
    minVat,
    maxVat,
    ordenacao
  });

  const handleLimparFiltros = () => {
    setBusca('');
    setCategoria('');
    setTamanho('');
    setModalidade('');
    setMinVat('');
    setMaxVat('');
    setOrdenacao('recentes');
  };

  return (
    <Container maxWidth="lg" sx={{ pt: 2 }}>

      <HeroBanner
        onExplorar={() =>
          catalogoRef.current?.scrollIntoView({ behavior: 'smooth' })
        }
        onAnunciar={() => navigate('/garagem')}
      />

      <div ref={catalogoRef} />

      {/* FILTROS + LISTA */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '280px 1fr' },
          gap: 3
        }}
      >

        <AdFilters
          categoria={categoria}
          setCategoria={setCategoria}
          tamanho={tamanho}
          setTamanho={setTamanho}
          modalidade={modalidade}
          setModalidade={setModalidade}
          minVat={minVat}
          maxVat={maxVat}
          setMinVat={setMinVat}
          setMaxVat={setMaxVat}
          onLimpar={handleLimparFiltros}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <AdSearchBar
            busca={busca}
            setBusca={setBusca}
            ordenacao={ordenacao}
            setOrdenacao={setOrdenacao}
            total={anunciosFiltrados.length}
          />

          <AdGrid
            anuncios={anunciosFiltrados}
            carregando={carregando}
            onClick={(id) => navigate(`/anuncio/${id}`)}
          />
        </Box>

      </Box>
    </Container>
  );
}