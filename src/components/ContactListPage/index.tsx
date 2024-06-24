import React, { useState, useEffect } from "react";

// MATERIAL - UI
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import UploadIcon from "@mui/icons-material/Upload";
import LogoutIcon from "@mui/icons-material/Logout";
import TableContainer from "@mui/material/TableContainer";
import { TablePagination } from "@mui/material";

// PROJECT IMPORTS
import ContainerV2 from "../UIComponent/ContainerV2";
import { useAuth } from "@/context/AuthContext/authContext";
import { HeadlinePink } from "../ReviewPage/Common.styled";
import UINewTypography from "../UIComponent/UINewTypography";
import {
  ViewPageMainContainer,
  ViewPageContainer,
  ViewPageIcon,
} from "../ViewPage/ViewPage.styled";

export interface Contact {
  _id: string;
  fname: string;
  lname: string;
  email: string;
  telephone: number;
  message: string;
  createdAt: string;
}

const ContactListPage = () => {
  const { push } = useRouter();

  const { isAuthenticated, logout } = useAuth();
  const [contacts, setContact] = useState<Contact[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const fetchCustomers = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contacts`
      );
      setContact(res.data.reviewsList);
    } catch (error) {
      console.error("Failed to fetch customers", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/delete-contact/${id}`
      );
      toast.success(res.data.message);
      fetchCustomers();
    } catch (error) {
      console.error("Failed to delete customer", error);
    }
  };

  useEffect(() => {
    fetchCustomers();
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      push("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    isAuthenticated && (
      <ContainerV2>
        <ViewPageMainContainer>
          <ViewPageContainer>
            <UINewTypography
              variant="h4"
              sx={{ textAlign: "center", color: "text.secondary" }}
            >
              Contact List
            </UINewTypography>
            <HeadlinePink />
            <ViewPageIcon>
              <Link href="/uploadfile" passHref>
                <IconButton>
                  <UploadIcon sx={{ color: "white.main" }} />
                </IconButton>
              </Link>

              <IconButton onClick={logout}>
                <LogoutIcon sx={{ color: "white.main" }} />
              </IconButton>
            </ViewPageIcon>
          </ViewPageContainer>
          <Box sx={{ width: "100%" }}>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>#</TableCell>
                    <TableCell align="right">First Name</TableCell>
                    <TableCell align="right">last Name</TableCell>
                    <TableCell align="center">Email</TableCell>
                    <TableCell align="right">Telephone</TableCell>
                    <TableCell align="center">Message</TableCell>
                    <TableCell align="center">Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {contacts
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((cust, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {page * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell align="right">{cust.fname}</TableCell>
                        <TableCell align="right">{cust.lname}</TableCell>
                        <TableCell align="center">{cust.email}</TableCell>
                        <TableCell align="center">{cust.telephone}</TableCell>
                        <TableCell align="center">{cust.message}</TableCell>

                        <TableCell align="center">
                          <IconButton onClick={() => handleDelete(cust._id)}>
                            <DeleteIcon sx={{ color: "white.main" }} />
                          </IconButton>
                        </TableCell>
                      </TableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={contacts.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </ViewPageMainContainer>
      </ContainerV2>
    )
  );
};

export default ContactListPage;
