import React from 'react';
import {flexRender} from "@tanstack/react-table";
import useOrdersTable from "../../../features/data/useOrdersTable";
import {useFetchOrders} from "../../../features/api/orders/useFetchOrders";
import Loader from "../../../shared/Loader/Loader";
import NotFoundError from "../../../shared/NotFound/NotFoundError";
import styles from "./OrdersTable.module.scss"

const OrdersTable = () => {
    const {data: ordersData, isLoading} = useFetchOrders()
    const data = useOrdersTable(ordersData)

    if (isLoading) return <div className={styles.absolute}><Loader></Loader></div>;
    if (!ordersData && !isLoading) return <div className={styles.absolute}><NotFoundError>Не удалось подключиться к
        серверу</NotFoundError></div>;

    return (
        <div className={styles.table_wrapper}>
            <table className={styles.table}>
                <thead>
                {data.table.getHeaderGroups().map((headerGroup) => (
                    <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                            <th key={header.id}>
                                {flexRender(header.column.columnDef.header, header.getContext())}
                            </th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody>
                {data.table.getRowModel().rows.map((row) => (
                    <tr key={row.id}>
                        {row.getVisibleCells().map((cell) => (
                            <td key={cell.id}>
                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                            </td>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default OrdersTable;