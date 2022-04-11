import { TableCell, TableRow } from "@material-ui/core"
import { Skeleton } from "@material-ui/lab"
import {useMemo} from 'react'

const TableLoader = ({isVisible = true, columnsCount = 1, rowsCount = 10}) => {

  const columns = useMemo(() => {
    return new Array(columnsCount).fill(0)
  }, [columnsCount])

  const rows = useMemo(() => {
    return new Array(rowsCount).fill(0)
  }, [rowsCount])

  if(!isVisible) return null

  return (
    <>
      {
        rows.map((row, index) => (
          <TableRow key={index + row}>
            {
              columns.map((col, index) => (
                <TableCell key={col + index}><Skeleton /></TableCell>
              ))
            }
          </TableRow>
        ))
      }
    </>
  )
}

export default TableLoader
