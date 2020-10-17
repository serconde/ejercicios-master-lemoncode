import React, { ChangeEvent } from 'react';
import {
  Button,
  Checkbox,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from '@material-ui/core';
import { OrderLine, OrderLineStatus } from 'common/vm';
import * as classes from './order-lines.styles';

interface Props {
  lines: Array<OrderLine>;
  setLines: (lines: Array<OrderLine>) => void;
}

interface Column {
  id: 'selected' | 'status' | 'amount' | 'description';
  label: string;
  minWidth?: number;
  align?: 'right';
}

const columns: Column[] = [
  { id: 'selected', label: '', minWidth: 30 },
  { id: 'status', label: 'Estado'},
  {
    id: 'description',
    label: 'Descripción',
  },
  {
    id: 'amount',
    label: 'Importe',
    align: 'right',    
  },
];

export const OrderLinesComponent: React.FC<Props> = ({ lines, setLines }) => {
  const isValidOrderLine = (lineNumber: number): boolean =>
    !!lines[lineNumber].description && !!lines[lineNumber].amount;

  const isOrderLineChecked = (index: number): boolean => lines[index].selected;

  const validateSelected = (validate: boolean) => {
    const orderLinesFilledIn = lines.filter(
      (l) => !!l.description && !!l.amount
    );
    orderLinesFilledIn
      .filter((l) => l.selected === true)
      .map(
        (l) =>
          (l.status = validate
            ? OrderLineStatus.Validated
            : OrderLineStatus.Pending)
      );

    setLines([...lines]);
  };


  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    const [fieldName, orderLineNumber] = e.currentTarget.name.split('-');
    const orderLine: OrderLine = lines[orderLineNumber];
    orderLine[fieldName] = e.currentTarget.type === "number" ? Number.parseFloat(e.currentTarget.value) : e.currentTarget.value;
    orderLine.selected =
      orderLine.selected && !!orderLine.description && !!orderLine.amount;
    orderLine.status =  orderLine.status === OrderLineStatus.Validated &&  !!orderLine.description && !!orderLine.amount ? OrderLineStatus.Validated : OrderLineStatus.Pending;
    setLines([...lines]);
  };

  const handleOrderLineCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const [fieldName, orderLineNumber] = e.currentTarget.name.split('-');
    const orderLine: OrderLine = lines[orderLineNumber];
    orderLine[fieldName] = e.currentTarget.checked;
    setLines([...lines]);
  };

  const getOrderLineStatus = (orderLineNumber: number) =>
    isValidOrderLine(orderLineNumber)
      ? lines[orderLineNumber].status
      : '';
      
  return (
    <div>
      <br></br>
      <Grid container direction="column">
        <Grid container direction="row">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={validateSelected.bind(null, true)}
            >
              Validar
            </Button>
            &nbsp;
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              onClick={validateSelected.bind(null, false)}
            >
              Invalidar
            </Button>
          </Grid>
        </Grid>
        <br></br>
        <Grid container>
          <Paper className={classes.container}>
            <TableContainer className={classes.table}>
              <Table stickyHeader>
                <TableHead>
                  <TableRow>
                    {columns.map((column) => (
                      <TableCell
                        key={column.id}
                        align={column.align}
                        style={{ minWidth: column.minWidth }}
                      >
                        {column.label === '' ? '' : column.label}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {lines.map((line, index) => {
                    return (
                      <TableRow hover tabIndex={-1} key={index}>
                        {columns.map((column) => {
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.id === 'selected' ? (
                                <Checkbox
                                  inputProps={{ name: `${column.id}-${index}` }}
                                  disabled={!isValidOrderLine(index)}
                                  onChange={handleOrderLineCheck} 
                                  checked={isOrderLineChecked(index)}                                 
                                />
                              ) : column.id != 'status' ? (
                                <TextField
                                  type={
                                    column.id == 'amount' ? 'number' : 'text'
                                  }
                                  inputProps={{ name: `${column.id}-${index}` }}
                                  onChange={handleFieldChange}
                                />
                              ) : (
                                <TextField
                                  inputProps={{ name: `${column.id}-${index}` }}
                                  disabled
                                  value={getOrderLineStatus(index)}
                                />
                              )}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};
