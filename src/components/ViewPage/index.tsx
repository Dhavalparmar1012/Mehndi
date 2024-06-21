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
import { useAuth } from "@/components/AuthContext/authContext";
import ContainerV2 from "../UIComponent/ContainerV2";
import { HeadlinePink } from "../ReviewPage/Common.styled";
import UINewTypography from "../UIComponent/UINewTypography";
import {
  ViewPageMainContainer,
  ViewPageContainer,
  ViewPageIcon,
} from "./ViewPage.styled";

// TYPES
import { CategoryType } from "@/constants/category.constants";

interface CategoryData {
  _id: string;
  category: string;
  photo?: string;
}

const ViewPage = () => {
  const { push } = useRouter();

  const { isAuthenticated, logout } = useAuth();
  const [categoryData, setCategoryData] = useState<CategoryData[]>([]);
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
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/uploads`
      );
      setCategoryData(res.data.customerList);
    } catch (error) {
      console.error("Failed to fetch customers", error);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/delete-customer/${id}`
      );
      toast.success(res.data.message);
      fetchCustomers();
    } catch (error) {
      console.error("Failed to delete customer", error);
    }
  };

  const getCategoryName = (id: string): string => {
    const category = CategoryType.find((cat) => cat.id === id);
    return category ? category.name : "Unknown Category";
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
              Category List
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
                    <TableCell align="right">Category</TableCell>
                    <TableCell align="right">Photo</TableCell>
                    <TableCell align="right">Actions</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {categoryData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((cust, index) => (
                      <TableRow
                        key={cust._id}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {page * rowsPerPage + index + 1}
                        </TableCell>
                        <TableCell component="th" align="right">
                          {getCategoryName(cust.category)}
                        </TableCell>
                        <TableCell align="right">
                          {cust.photo ? (
                            <Box
                              component="img"
                              src={`http://localhost:8080/api/v1/auth/upload/photo/${cust._id}`}
                              style={{
                                maxWidth: "100px",
                                maxHeight: "100px",
                              }}
                              onError={(e: any) => {
                                e.target.onerror = null;
                                e.target.src = "/path/to/fallback/image.jpg";
                              }}
                            />
                          ) : (
                            <span>No Photo</span>
                          )}
                        </TableCell>
                        <TableCell align="right">
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
              count={categoryData.length}
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

export default ViewPage;
