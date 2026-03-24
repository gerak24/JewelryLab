import {getCoreRowModel, getSortedRowModel, useReactTable} from "@tanstack/react-table";
import React from "react";
import styles from "./ordersTableData.module.scss";
import {usePayOrder} from "../api/orders/usePayOrder";
import {usePassOrder} from "../api/orders/usePassOrder";

export default function useOrdersTable(orders) {
  const {mutateAsync: payOrder} = usePayOrder()
  const {mutateAsync: passOrder} = usePassOrder()

  const columns = !orders ? [] :
    [
      {
        accessorKey: "Id",
      },
      {
        accessorKey: "rowNumber",
        header: () => "№",
        size: 10,
        cell: ({row}) => (typeof row?.index === "number" ? row.index + 1 : "-"),
      },
      {
        accessorKey: "orderNumber",
        header: () => "Номер заказа",
        size: 40,
        accessorFn: (row) => row?.number ?? "-",
      },
      {
        accessorKey: "orderCreationDate",
        header: () => "Дата создания заказа",
        size: 40,
        accessorFn: (row) => row?.created ? new Date(row.created).toLocaleString("ru-RU") : "-",
      },
      {
        accessorKey: "buyer",
        header: () => "Заказчик",
        size: 200,
        accessorFn: (row) => row?.customer ?? "-",
      },
      {
        accessorKey: "buyerContact",
        header: () => "Контакт заказчика",
        size: 200,
        accessorFn: (row) =>
          row?.contact === "unknown"
            ? "-"
            : row?.contact ?? "-",
      },
      {
        accessorKey: "sum",
        header: () => "Сумма заказа",
        size: 40,
        accessorFn: (row) => row?.sum ?? "-",
      },
      {
        //TODO: Добить сммену стейта у order на onClick
        accessorKey: "isPaid",
        header: () => "Оплачен",
        size: 40,
        cell: ({row}) => {
          return <div className={styles.wrapper}>
            <div className={styles.label}
                 onClick={() => payOrder(row?.original?.id)}>{row?.original?.isPaid ? "Оплачен" : "Не оплачен"}</div>
          </div>;
        },
      },
      {
        //TODO: Добить сммену стейта у order на onClick
        accessorKey: "isPassed",
        header: () => "Отдан",
        size: 40,
        cell: ({row}) => {
          return <div className={styles.wrapper}>
            <div className={styles.label}
                 onClick={() => passOrder(row?.original?.id)}>{row?.original?.isPassed ? "Отдан" : "Не отдан"}</div>
          </div>;
        },
      },
    ];

  const table = useReactTable({
    columns,
    data: orders,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      columnVisibility: {
        Id: false,
      }
    }
  });
  return {table}
}