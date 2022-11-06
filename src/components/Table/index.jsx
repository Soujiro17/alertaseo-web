import React from "react";
import PropTypes from "prop-types";
import "gridjs/dist/theme/mermaid.css";
import { Grid, _ } from "gridjs-react";

const language = {
  search: {
    placeholder: "Buscar...",
  },
  sort: {
    sortAsc: "Ordenar columna ascendentemente",
    sortDesc: "Ordenar columna descendentemente",
  },
  pagination: {
    previous: "Anterior",
    next: "Siguiente",
    navigate: (page, pages) => `Página ${page} de ${pages}`,
    page: (page) => `Página ${page}`,
    showing: "Mostrando",
    of: "de",
    to: "a",
    results: () => "registros",
  },
  loading: "Cargando...",
  noRecordsFound: "No hay registros coincidentes",
  error: "Un error ha ocurrido mientras se obtenía la información",
};

const Table = ({ data, columns, disableSearch, pagination }) => {
  return (
    <Grid
      columns={columns}
      data={data}
      search={!disableSearch}
      pagination={pagination}
      autoWidth
      language={language}
      sort
    />
  );
};

Table.defaultProps = {
  disableSearch: false,
  pagination: {
    enabled: true,
    limit: 10,
  },
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  disableSearch: PropTypes.bool,
  pagination: PropTypes.object,
};

export default Table;
