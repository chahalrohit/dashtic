import React from "react";
import { Button, Input, Label } from "reactstrap";
import DataTable from "react-data-table-component";
import differenceBy from "lodash/differenceBy";

const tableDataItems = [
  {
    id: "1",
    SNO: 1,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "30",
    Salary: "$143,654",
  },
  {
    id: "2",
    SNO: 2,
    Name: "Zonna",
    Office: "Jond",
    Position: "Accountant",
    Age: "22",
    Salary: "$343,654",
  },
  {
    id: "3",
    SNO: 3,
    Name: "Nonna",
    Office: "Tond",
    Position: "Chief Executive Officer",
    Age: "23",
    Salary: "$743,654",
  },
  {
    id: "4",
    SNO: 4,
    Name: "Bonna",
    Office: "Oond",
    Position: "Chief Operating Officer",
    Age: "24",
    Salary: "$643,654",
  },
  {
    id: "5",
    SNO: 5,
    Name: "Honna",
    Office: "Pond",
    Position: "Data Coordinator",
    Age: "25",
    Salary: "$243,654",
  },
  {
    id: "6",
    SNO: 6,
    Name: "Fonna",
    Office: "Nond",
    Position: "Developer",
    Age: "20",
    Salary: "$543,654",
  },
  {
    id: "7",
    SNO: 7,
    Name: "Aonna",
    Office: "Xond",
    Position: "Development lead",
    Age: "30",
    Salary: "$843,654",
  },
  {
    id: "8",
    SNO: 8,
    Name: "Qonna",
    Office: "Vond",
    Position: "Director",
    Age: "90",
    Salary: "$743,654",
  },
  {
    id: "9",
    SNO: 9,
    Name: "Jond",
    Office: "Zonna",
    Position: "Marketing Officer",
    Age: "67",
    Salary: "$543,654",
  },
  {
    id: "10",
    SNO: 10,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "65",
    Salary: "$143,654",
  },
  {
    id: "11",
    SNO: 11,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "26",
    Salary: "$143,654",
  },
  {
    id: "12",
    SNO: 12,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "45",
    Salary: "$143,654",
  },
  {
    id: "13",
    SNO: 13,
    Name: "Qonna",
    Office: "Pond",
    Position: "Data Coordinator",
    Age: "30",
    Salary: "$243,654",
  },
  {
    id: "14",
    SNO: 14,
    Name: "Yonna",
    Office: "Qond",
    Position: "Financial Controller",
    Age: "23",
    Salary: "$143,654",
  },
];
export const DataTabless = () => {
  const [selectedRows, setSelectedRows] = React.useState([]);
  const [toggleCleared, setToggleCleared] = React.useState(false);
  
  const handleRowSelected = React.useCallback((state:any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const columns:any = [
    {
      name: "S.NO",
      selector: (row:any) => [row.SNO],
      sortable: true,
    },
    {
      name: "NAME",
      selector: (row:any) => [row.Name],
      sortable: true,
    },
    {
      name: "LAST NAME",
      selector: (row:any) => [row.Office],
      sortable: true,
    },
    {
      name: "POSITION",
      selector: (row:any) => [row.Position],
      sortable: true,
    },
    {
      name: "AGE",
      selector: (row:any) => [row.Age],
      sortable: true,
    },
    {
      name: " SALARY",
      selector: (row:any) => [row.Salary],
      sortable: true,
    },
  ];
  const [allData, setAllData] = React.useState(tableDataItems);
  let allElement2:any = [];
  let myfunction = (InputData:any) => {
    let allElement;
    for (allElement of tableDataItems) {
      if (allElement.Name[0] == " ") {
        allElement.Name = allElement.Name.trim();
      }
      if (allElement.Name.toLowerCase().includes(InputData.toLowerCase())) {
        if (allElement.Name.toLowerCase().startsWith(InputData.toLowerCase())) {
          allElement2.push(allElement);
        }
      }
    }
    setAllData(allElement2);
  };
  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${selectedRows.map(
            (r:any) => r.SNO
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
        setAllData(differenceBy(allData, selectedRows, "SNO"));
      }
    };

    return (
      <Button key="delete" color="" className="btn btn-primary"onClick={handleDelete} icon="true">
        Delete
      </Button>
    );
  }, [allData, selectedRows, toggleCleared]);

  return (
    <span className="datatable deletadd">
        <Label className="float-end">
      <Input
        type="text"
        placeholder="Search..."
        className="mb-4 form-control-sm form-control"
        onChange={(ele) => {
          myfunction(ele.target.value);
        }}
      />
      </Label>
      <DataTable
        title
        columns={columns}
        data={allData}
        selectableRows
        contextActions={contextActions}
        onSelectedRowsChange={handleRowSelected}
        clearSelectedRows={toggleCleared}
        pagination
      />
    </span>
  );
};
