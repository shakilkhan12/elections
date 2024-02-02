"use client";

import * as React from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import Image from "next/image";

const data = [
  {
    id: "m5gr84i9",
    seat: "na1",
    firstPosition: "pti 40000",
    secondPosition: "ji 40000",
    difference: "5000",
    pollingStations: "60/90",
    result: "40%",
  },
  {
    id: "m5gr84i9456",
    seat: "na1",
    firstPosition: "pti 40000",
    secondPosition: "ji 40000",
    difference: "5000",
    pollingStations: "60/90",
    result: "40%",
  },
  {
    id: "m5gr84i93453",
    seat: "na1",
    firstPosition: "pti 40000",
    secondPosition: "ji 40000",
    difference: "5000",
    pollingStations: "60/90",
    result: "40%",
  },
  {
    id: "m5gr84i93453",
    seat: "na1",
    firstPosition: "pti 40000",
    secondPosition: "ji 40000",
    difference: "5000",
    pollingStations: "60/90",
    result: "40%",
  },
  {
    id: "m5gr84i932545",
    seat: "na1",
    firstPosition: "pti 40000",
    secondPosition: "ji 40000",
    difference: "5000",
    pollingStations: "60/90",
    result: "40%",
  },
];

export const columns = [
  {
    id: "select",

    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "seat",
    header: "Seat",
    cell: ({ row }) => <div className="capitalize">{row.getValue("seat")}</div>,
  },
  {
    accessorKey: "firstPosition",
    header: <span className="inline-block px-6">First Position</span>,
    cell: ({ row }) => (
      <div className="capitalize flex items-center space-x-3 px-6">
        <Image src="/images/pti.png" width={38} height={30} />
        <span className="uppercase text-sm font-semibold">
          {row.getValue("firstPosition")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "secondPosition",
    header: <span className="inline-block px-6">Second Position</span>,
    cell: ({ row }) => (
      <div className="capitalize flex items-center space-x-3 px-6">
        <Image src="/images/anp.png" width={38} height={30} />
        <span className="uppercase text-sm font-semibold">
          {row.getValue("firstPosition")}
        </span>
      </div>
    ),
  },
  {
    accessorKey: "difference",
    header: "Difference",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("difference")}</div>
    ),
  },
  {
    accessorKey: "pollingStations",
    header: "Polling Stations",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("pollingStations")}</div>
    ),
  },
  {
    accessorKey: "result",
    header: "Result %",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("result")}</div>
    ),
  },
  ,
  {
    accessorKey: "details",
    header: "Details",
    cell: ({ row }) => (
      <div className="capitalize">
        <Link href="/halqa/1">view details</Link>
      </div>
    ),
  },
];

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState([]);
  const [columnFilters, setColumnFilters] = React.useState([]);
  const [columnVisibility, setColumnVisibility] = React.useState({});
  const [rowSelection, setRowSelection] = React.useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Search by Halqa (for example NA1)"
          value={table.getColumn("email")?.getFilterValue() ?? ""}
          onChange={(event) =>
            table.getColumn("email")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border  bg-white overflow-x-auto">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{" "}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
