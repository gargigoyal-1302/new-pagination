import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getApiAction } from "../redux/Actions";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import { Button } from "@material-ui/core";
import { Modal } from "react-bootstrap";
export default function Posts() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => {
    return state?.paginationData;
  });
  //set page count to 0
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);
  const [selectedRow, setSelectedRow] = useState(false);
  /// handle modal close and open
  const handleClose = () => setShow(false);
  const handleShow = (row) => {
    setShow(true);
    setSelectedRow(row);
  };
  // useEffect for changing page count
  useEffect(() => {
    setTimeout(() => {
      dispatch(getApiAction(count));
      setCount(count + 1);
    }, 10000);
  }, [dispatch, count]);
  console.log(detail);
  // function to display raw data using modal
  const renderButton = (row) => {
    return (
      <div>
        <Button variant="outlined" onClick={() => handleShow(row)}>
          RAW JSON
        </Button>
      </div>
    );
  };
  const columns = [
    {
      Header: "Title",
      accessor: "title",
      sortable: false,
    },
    {
      Header: "URL",
      accessor: "url",
      sortable: false,
    },
    {
      Header: "CREATED_AT",
      accessor: "created_at",
      filterable: false,
    },
    {
      Header: "AUTHOR",
      accessor: "author",
    },
    {
      Header: "ACTION",
      sortable: false,
      filterable: false,
      Cell: (row) => {
        return renderButton(row.original);
      },
    },
  ];
  return (
    <div>
      <Modal
        size="sm"
        show={show}
        aria-labelledby="example-modal-sizes-title-sm"
        onHide={handleClose}
      >
        <Modal.Header>
          <Modal.Title>RAW DATA</Modal.Title>
        </Modal.Header>
        <Modal.Body>{JSON.stringify(selectedRow)}</Modal.Body>
        <Modal.Footer>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ReactTable
        columns={columns}
        noDataText="Please Wait"
        showPageSizeOptions={false}
        defaultPageSize={20}
        data={detail}
        filterable
      />
    </div>
  );
}
