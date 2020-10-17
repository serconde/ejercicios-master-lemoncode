import React from 'react';
import { OrderContext } from 'common/context';
import { OrderHeaderComponent } from './order-header.component';
import { OrderLinesComponent } from './order-lines.component';
import { OrderLineStatus } from 'common/vm';
import { formatCurrency } from 'common/utils';
import { useDebounce } from 'use-debounce/lib';

export const OrderContainer: React.FC = () => {
  const { header, lines, setHeader, setLines } = React.useContext(OrderContext);
  const submit = () => console.log('Pedido enviado!!');
  const [debouncedLines] = useDebounce(lines, 1000);
  const [debouncedHeader] = useDebounce(header, 1000);

  React.useEffect(() => {
    const orderLinesFilledIn = debouncedLines.filter(
      (l) => !!l.description && !!l.amount
    );
    let total = 0;
    orderLinesFilledIn.map((l) => (total += l.amount));
    header.total = formatCurrency(total);
    header.status =
      orderLinesFilledIn.length === 0
        ? '0 %'
        : `${
            (orderLinesFilledIn.filter(
              (l) => l.status === OrderLineStatus.Validated
            ).length *
              100) /
            orderLinesFilledIn.length
          } %`;
          
    debouncedHeader.valid =
      !!debouncedHeader.reference &&
      !!debouncedHeader.provider &&
      !!debouncedHeader.date &&
      debouncedHeader.status === '100 %';
    setHeader({ ...header });
  }, [debouncedLines, debouncedHeader]);

  return (
    <>
      <OrderHeaderComponent
        header={debouncedHeader}
        setHeader={setHeader}
        submit={submit}
      ></OrderHeaderComponent>
      <OrderLinesComponent
        lines={debouncedLines}
        setLines={setLines}
      ></OrderLinesComponent>
    </>
  );
};
