import { useMemo } from 'react';

export default function useFilteredAds(anuncios, filtros) {
  return useMemo(() => {
    const {
      busca,
      categoria,
      tamanho,
      modalidade,
      minVat,
      maxVat,
      ordenacao
    } = filtros;

    return anuncios
      .filter((a) => a.status === 'disponivel')
      .filter((a) => {
        if (!busca) return true;
        const t = busca.toLowerCase();
        return (
          a.titulo.toLowerCase().includes(t) ||
          a.descricao.toLowerCase().includes(t)
        );
      })
      .filter((a) => !categoria || a.categoria === categoria)
      .filter((a) => !tamanho || a.tamanho === tamanho)
      .filter((a) => !modalidade || a.modalidade === modalidade)
      .filter((a) => {
        const v = Number(a.vats);
        const min = minVat ? Number(minVat) : 0;
        const max = maxVat ? Number(maxVat) : Infinity;
        return v >= min && v <= max;
      })
      .sort((a, b) => {
        if (ordenacao === 'recentes') return new Date(b.criadoEm) - new Date(a.criadoEm);
        if (ordenacao === 'menor_vat') return a.vats - b.vats;
        if (ordenacao === 'maior_vat') return b.vats - a.vats;
        return 0;
      });
  }, [anuncios, filtros]);
}