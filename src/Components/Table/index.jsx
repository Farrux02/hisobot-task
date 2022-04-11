import {
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Table,
  withStyles,
  TableCell,
} from "@material-ui/core";
import TableLoader from "../TableLoader";
import TableMessage from "../TableMessage";
import axios from "axios";
import Pagination from "../Pagination";
import { useEffect, useState } from "react";
// import { useTranslation } from "react-i18next"
// import Pagination from "../../components/Pagination"
// import axios from "../../utils/axios"
// import StatusTag from "../../components/Tag/StatusTag"
// import moment from "moment"
// import TableMessage from "../../components/TableMessage"
// import { useHistory } from "react-router"

// Style For TableRow
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: "#F4F6FA",
    },
    cursor: "pointer",
  },
}))(TableRow);

// Style For StyledTableCell
const StyledTableCell = withStyles(() => ({
  head: {
    color: "#1A2024",
    fontSize: 14,
    lineHeight: "24px",
    boxShadow: "inset -1px -1px 0px #E5E9EB",
    border: "1px solid #E5E9EB",
    padding: "12px 16px",
  },
  body: {
    fontSize: 14,
    color: "#1A2024",
    padding: "12px 16px",
    boxShadow: "inset -1px -1px 0px #E5E9EB",
    border: "1px solid #E5E9EB",
  },
}))(TableCell);

const MTable = ({}) => {
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState([]);

  // const getUsers = () => {
    // axios
    //   .get(
    //     `https://6252ef5e7f7fa1b1ddeb8f61.mockapi.io/api/v2/people?page=${currentPage}&limit=10`
    //   )
    //   .then((res) => {
    //     setUsers(res.data);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  // };

  useEffect(() => {
    // getUsers();
    axios
      .get(
        `https://6252ef5e7f7fa1b1ddeb8f61.mockapi.io/api/v2/people?page=${currentPage}&limit=10`
      )
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

  // const data = [
  //   {
  //     id: 1,
  //     username: "John Doe",
  //     email: "John@gmail.com",
  //     phone: "123456789",
  //     company_name: "ABC",
  //     experience: "1 year",
  //   },
  //   {
  //     id: 2,
  //     username: "Samuel Doe",
  //     email: "Samuel@gmail.com",
  //     phone: "(911) 123-4567",
  //     company_name: "Sony",
  //     experience: "5 year",
  //   },
  //   {
  //     id: 3,
  //     username: "John Doe",
  //     email: "John@gmail.com",
  //     phone: "123456789",
  //     company_name: "ABC",
  //     experience: "1 year",
  //   },
  //   {
  //     id: 4,
  //     username: "Samuel Doe",
  //     email: "Samuel@gmail.com",
  //     phone: "(911) 123-4567",
  //     company_name: "Sony",
  //     experience: "5 year",
  //   },
  //   {
  //     id: 5,
  //     username: "John Doe",
  //     email: "John@gmail.com",
  //     phone: "123456789",
  //     company_name: "ABC",
  //     experience: "1 year",
  //   },
  //   {
  //     id: 6,
  //     username: "Samuel Doe",
  //     email: "Samuel@gmail.com",
  //     phone: "(911) 123-4567",
  //     company_name: "Sony",
  //     experience: "5 year",
  //   },
  //   {
  //     id: 7,
  //     username: "John Doe",
  //     email: "John@gmail.com",
  //     phone: "123456789",
  //     company_name: "ABC",
  //     experience: "1 year",
  //   },
  //   {
  //     id: 8,
  //     username: "Samuel Doe",
  //     email: "Samuel@gmail.com",
  //     phone: "(911) 123-4567",
  //     company_name: "Sony",
  //     experience: "5 year",
  //   },
  //   {
  //     id: 9,
  //     username: "John Doe",
  //     email: "John@gmail.com",
  //     phone: "123456789",
  //     company_name: "ABC",
  //     experience: "1 year",
  //   },
  //   {
  //     id: 10,
  //     username: "Jane Anderson",
  //     email: "Jane@gmail.com",
  //     phone: "(123) 456-7890",
  //     company_name: "Amazon",
  //     experience: "2 years",
  //   },
  // ];

  return (
    <div className="bg-white rounded-lg m-4 p-4">
      <TableContainer className="mt-4">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell>#</StyledTableCell>
              <StyledTableCell>{"Username"}</StyledTableCell>
              <StyledTableCell>{"Email"}</StyledTableCell>
              <StyledTableCell>{"Phone"}</StyledTableCell>
              <StyledTableCell>{"Company Name"}</StyledTableCell>
              <StyledTableCell>{"Experience"}</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <StyledTableRow key={user.id}>
                <StyledTableCell>{index + 1}</StyledTableCell>
                <StyledTableCell>{user.username}</StyledTableCell>
                <StyledTableCell>{user.email}</StyledTableCell>
                <StyledTableCell>{user.phone}</StyledTableCell>
                <StyledTableCell>{user.company_name}</StyledTableCell>
                <StyledTableCell>{user.experience} years</StyledTableCell>
              </StyledTableRow>
            ))}
            <TableLoader
              columnsCount={6} // ! Number of columns
              isVisible={!loading} // ! Whether the loader is visible or not
            />
          </TableBody>
        </Table>
      </TableContainer>

      <TableMessage
        isVisible={!loading && !(users?.length > 0)} // ! Whether the message is visible or not
        text="No data found" // ! Message text
      />

      <Pagination
        currentPage={currentPage} // ! Current page default value is 1
        count={users?.count || 40} // ! Total count of data comes from the backend
        onChange={(pageNumber) => setCurrentPage(pageNumber)} // ! Callback function to handle pagination
        title="Users count" // ! Title of the pagination
      />
    </div>
  );
};

export default MTable;
