import React from "react";
import PropTypes from "prop-types";
import "gridjs/dist/theme/mermaid.css";
import { Grid, _ } from "gridjs-react";
import tableLanguage from "../../data/tableLanguage";
import Acciones from "../Acciones";

const Table = ({ data, columns, disableSearch, pagination }) => {
  const definitiveColumns = [...columns, { name: "Accion" }];

  const definitiveData = Object.entries(data)?.map(([, value]) => {
    return { ...value, accion: _(<Acciones id={value.id.toString()} />) };
  });

  return (
    <Grid
      columns={definitiveColumns}
      data={definitiveData}
      search={!disableSearch}
      pagination={pagination}
      autoWidth
      language={tableLanguage}
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
