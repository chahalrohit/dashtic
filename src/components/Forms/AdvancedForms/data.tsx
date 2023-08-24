import React, { useEffect, useRef, useState } from "react";
import Select from "react-select";
import { MultiSelect } from "react-multi-select-component";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import "@simonwep/pickr/dist/themes/classic.min.css"; // 'classic' theme
import "@simonwep/pickr/dist/themes/monolith.min.css"; // 'monolith' theme
import "@simonwep/pickr/dist/themes/nano.min.css";
import Pickr from "@simonwep/pickr";
import Grid from "@mui/material/Grid";
import DualListBox from "react-dual-listbox";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Stack from "@mui/material/Stack";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";




export const Beastoptions = [
  { value: "Chuck Testa", label: "Chuck Testa" },
  { value: "Sage Cattabriga-Alosa", label: "Sage Cattabriga-Alosa" },
  { value: "Nikola Tesla", label: "Nikola Tesla" },
  { value: "Cattabriga-Alosa", label: "Cattabriga-Alosa" },
  { value: "Nikola Alosa", label: "Nikola Alosa" },
];
export const Basicoptions = [
  { value: "Arizona", label: "Arizona" },
  { value: "Colorado", label: "Colorado" },
  { value: "Idaho", label: "Idaho" },
  { value: "Montana", label: "Montana" },
  { value: "Nebraska", label: "Nebraska" },
  { value: "New Mexico", label: "New Mexico" },
  { value: "North Dakota", label: "North Dakota" },
  { value: "Utah", label: "Utah" },
  { value: "Wyoming", label: "Wyoming" },
  { value: "Alabama", label: "Alabama" },
  { value: "Arkansas", label: "Arkansas" },
  { value: "Illinois", label: "Illinois" },
  { value: "Iowa", label: "Iowa" },
  { value: "Kansas", label: "Kansas" },
  { value: "Kentucky", label: "Kentucky" },
  { value: "Louisiana", label: "Louisiana" },
  { value: "Minnesota", label: "Minnesota" },
  { value: "Mississippi", label: "Mississippi" },
  { value: "Missouri", label: "Missouri" },
  { value: "Oklahoma", label: "Oklahoma" },
  { value: "South Dakota", label: "South Dakota" },
  { value: "Texas", label: "Texas" },
  { value: "Tennessee", label: "Tennessee" },
  { value: "Wisconsin", label: "Wisconsin" },
];
export const Usersoptions = [
  { value: "Firefox", label: "Firefox" },
  { value: "Chrome", label: "Chrome" },
  { value: "Safari", label: "Safari" },
  { value: "Opera", label: "Opera" },
  { value: "Internet Explorer", label: "Internet Explorer" },
];
// Nano
export function Nanomethod() {
    const colorPicker = React.useRef<HTMLDivElement>(null);
  
    React.useEffect(() => {
      if (colorPicker.current) {
        const _pickr = Pickr.create({
          el: colorPicker.current,
          theme: 'nano',
          default: '#05c3fb',
          swatches: [
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)',
          ],
  
          components: {
            // Main components
            preview: true,
            opacity: true,
            hue: false,
  
            // Input / output Options
            interaction: {
              hex: true,
              // rgba: true,
              // hsla: true,
              // hsva: true,
              // cmyk: true,
              input: true,
              clear: true,
              save: true,
            },
          },
        });
      }
    }, []);

  return (
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}
// Classic
export function Classicmethod() {
  const colorPicker = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (colorPicker.current) {
      const pickr = Pickr.create({
        el: colorPicker.current,
        theme: 'classic',
        default: '#6c5ffc',
        swatches: [
          'rgba(244, 67, 54, 1)',
          'rgba(233, 30, 99, 0.95)',
          'rgba(156, 39, 176, 0.9)',
          'rgba(103, 58, 183, 0.85)',
          'rgba(63, 81, 181, 0.8)',
          'rgba(33, 150, 243, 0.75)',
          'rgba(3, 169, 244, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(0, 150, 136, 0.75)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(139, 195, 74, 0.85)',
          'rgba(205, 220, 57, 0.9)',
          'rgba(255, 235, 59, 0.95)',
          'rgba(255, 193, 7, 1)',
        ],

        components: {
          preview: true,
          opacity: true,
          hue: true,

          interaction: {
            hex: true,
            rgba: true,
            hsva: true,
            input: true,
            clear: true,
            save: true,
          },
        },
      });
    }
  }, []);

  return (
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}

// Monolith

export function Monolithmethod(): JSX.Element {
  const colorPicker = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (colorPicker.current) {
      const pickr = Pickr.create({
        el: colorPicker.current,
        theme: 'classic',
        default: '#fc5296',

        swatches: [
          'rgba(55, 35, 9, 0.5)',
          'rgba(44, 67, 54, 1)',
          'rgba(33, 30, 99, 0.95)',
          'rgba(56, 39, 176, 0.9)',
          'rgba(03, 58, 183, 0.85)',
          'rgba(163, 81, 181, 0.8)',
          'rgba(33, 150, 243, 0.75)',
          'rgba(3, 169, 244, 0.7)',
          'rgba(0, 188, 212, 0.7)',
          'rgba(0, 150, 136, 0.75)',
          'rgba(76, 175, 80, 0.8)',
          'rgba(139, 195, 74, 0.85)',
          'rgba(205, 220, 57, 0.9)',
          'rgba(255, 193, 7, 1)',
        ],

        components: {
          // Main components
          preview: true,
          opacity: true,
          hue: false,

          // Input / output Options
          interaction: {
            // hex: true,
            // rgba: true,
            // hsla: true,
            // hsva: true,
            // cmyk: true,
            input: true,
            clear: true,
            save: true,
          },
        },
      });
    }
  }, []);

  return (
    <div className="App">
      <div className="color-picker" ref={colorPicker}></div>
    </div>
  );
}
//Selectbox
export const Selectbox = () => {
  let [value, setValue] = useState<any>(["PDF - Swap Valuation"]);
  function handleChange (selected:any) {
    setValue(selected);

  }
  const options = [
    {
      label: "Software Side",
      options: [
        { value: "Web designer", label: "Web designer" },
        { value: "Web Developer", label: "Web Developer" },
        {
          value: "Application Developer",
          label: "Application Developer",
        },
        { value: "App Designer", label: "App Designer" },
      ],
    },
    {
      label: "Voice Side",
      options: [
        { value: "Tell Caller", label: "Tell Caller" },
        {
          value: "Recruiter",
          label: "Recruiter",
        },
        {
          value: "HR",
          label: "HR",
        },
        {
          value: "Data Entry",
          label: "Data Entry",
        },
        {
          value: "Mapping",
          label: "Mapping",
        },
        {
          value: "US Recruiter",
          label: "US Recruiter",
        },
      ],
    },
  ];

  return (
    <DualListBox
      canFilter
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }

        let words:any = filterInput.split(" ");
        let res = false;
        for (let word of words) {

          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
};
//Selectbox1
export const Selectbox1 = () => {
  let [value, setValue] = useState<any>(["PDF - Swap Valuation"]);
  function handleChange(selected:any) {
    setValue(selected);

  }
  const options:any = [
    {
      label: "Software Side",
      options: [
        { value: "HTML5", label: "HTML5" },
        { value: "CSS3", label: "CSS3" },
        {
          value: "Angular",
          label: "Angular",
          disabled: "disabled",
        },
        { value: ".Net", label: ".Net" },

        { value: "PHP", label: "PHP" },
        {
          value: "Java",
          label: "Java",
        },
        {
          value: "Android",
          label: "Android",
          disabled: "disabled",
        },
        {
          value: "AngularJS",
          label: "AngularJS",
        },
        {
          value: "Photoshop",
          label: "Photoshop",
          disabled: "disabled",
        },
        {
          value: "Python",
          label: "Python",
        },
        {
          value: "SQL",
          label: "SQL",
        },
        {
          value: "Java Script",
          label: "Java Script",
        },
      ],
    },
  ];

  return (
    <DualListBox
      canFilter={true}
      selected={value}
      options={options}
      filterCallback={(option, filterInput) => {
        if (filterInput === "") {
          return true;
        }

        let words = filterInput.split(" ");
        let res = false;
        for (let word of words) {

          res = new RegExp(word, "i").test(option.label);
          if (res === false) {
            break;
          }
        }
        return res;
      }}
      onChange={handleChange}
    />
  );
};
//TransferList1
function not(a:any, b:any) {
  return a.filter((value:any) => b.indexOf(value) === -1);
}

function intersection(a:any, b:any) {
  return a.filter((value:any) => b.indexOf(value) !== -1);
}

function union(a:any, b:any) {
  return [...a, ...not(b, a)];
}
export function TransferList1() {
  const [checked, setChecked] = React.useState<any>([]);
  const [left, setLeft] = React.useState([0, 1, 2, 3]);
  const [right, setRight] = React.useState([4, 5, 6, 7]);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value:any) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const numberOfChecked = (items:any) => intersection(checked, items).length;

  const handleToggleAll = (items:any) => () => {
    if (numberOfChecked(items) === items.length) {
      setChecked(not(checked, items));
    } else {
      setChecked(union(checked, items));
    }
  };

  const handleCheckedRight = () => {
    setRight(right.concat(leftChecked));
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const customList = (title:any, items:any) => (
    <Card className="border">
      <CardHeader
        sx={{ px: 2, py: 1 }}
        avatar={
          <Checkbox
            onClick={handleToggleAll(items)}
            checked={
              numberOfChecked(items) === items.length && items.length !== 0
            }
            indeterminate={
              numberOfChecked(items) !== items.length &&
              numberOfChecked(items) !== 0
            }
            disabled={items.length === 0}
            inputProps={{
              "aria-label": "all items selected",
            }}
          />
        }
        title={title}
        subheader={`${numberOfChecked(items)}/${items.length} selected`}
      />
      <Divider />
      <List
        sx={{
          width: 400,
          height: 230,
          bgcolor: "background.paper",
          overflow: "auto",
        }}
        dense
        component="div"
        role="list"
      >
        {items.map((value:any) => {
          const labelId = `transfer-list-all-item-${value}-label`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    "aria-labelledby": labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={`List item ${value + 1}`} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Card>
  );

  return (
    <Grid container spacing={2} justifyContent="center" alignItems="center">
      <Grid item>{customList("Choices", left)}</Grid>
      <Grid item>
        <Grid container direction="column" alignItems="center">
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedRight}
            disabled={leftChecked.length === 0}
            aria-label="move selected right"
          >
            &gt;
          </Button>
          <Button
            sx={{ my: 0.5 }}
            variant="outlined"
            size="small"
            onClick={handleCheckedLeft}
            disabled={rightChecked.length === 0}
            aria-label="move selected left"
          >
            &lt;
          </Button>
        </Grid>
      </Grid>
      <Grid item>{customList("Chosen", right)}</Grid>
    </Grid>
  );
}
//BasicMutipleSelect
export const BasicMutipleSelect = () => {
  const [selected, setSelected] = useState([]);
  const options = [
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  return (
    <MultiSelect
      value={selected}
      onChange={setSelected}
      labelledBy="Select"
      disableSearch={true}
      options={options}
      className="formselect"
    />
  );
};
//BasicMutipleSelect
//DisabledMutipleSelect
export const DisabledMutipleSelect = () => {
  const optionsMultiSelect1:any = [
    { key: "First", cat: "Group 1" },
    { key: "Second", cat: "Group 1" },
    { key: "Third", cat: "Group 1" },
    { key: "Fourth", cat: "Group 2" },
  ];
  const [selected, setSelected] = useState([]);
  return (
    <div>
      <MultiSelect
        options={optionsMultiSelect1}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
        disabled={true}
        className="formselect"
      />
    </div>
  );
};
//DisabledMutipleSelect
//Singleselectdis
export function Singleselectdis() {
  const optionsGroupOptionMutipleSelect = [
    {
      value: "Month",
      label: "Month",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" },
      ],
    },

    { value: "Brand", label: "Brand" },
    { value: "Audi", label: "Audi" },
    { value: "BMW", label: "BMW" },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "mitsubishi", label: "mitsubishi" },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  function logChange(val:any) {
    console.log("Selected: " + JSON.stringify(val));
  }

  return (
    <div>
      <Select
        classNamePrefix="Search"
        name="form-field-name"
        options={optionsGroupOptionMutipleSelect}
        onChange={logChange}
      />
    </div>
  );
}
//Singleselectdis
//MultipleGroupOption
export function MultipleGroupOption() {
  const optionsGroupOptionMutipleSelect = [
    {
      value: "Month",
      label: "Month",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" },
      ],
    },

    { value: "Brand", label: "Brand" },
    { value: "Audi", label: "Audi" },
    {
      value: "BMW",
      label: "BMW",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" },
      ],
    },
    { value: "volkswagen", label: "volkswagen" },
    { value: "Aston Martin", label: "Aston Martin" },
    {
      value: "mitsubishi",
      label: "mitsubishi",
      options: [
        { value: "January", label: "January" },
        { value: "February", label: "February", isDisabled: "true" },
        { value: "March", label: "March" },
        { value: "April", label: "April" },
        { value: "May", label: "May", isDisabled: "true" },
      ],
    },
    { value: "hyundai", label: "hyundai" },
    { value: "fiat", label: "fiat" },
  ];
  function logChange(val:any) {
    console.log("Selected: " + JSON.stringify(val));
  }

  return (
    <div>
      <Select
        classNamePrefix="Search"
        name="form-field-name"
        options={optionsGroupOptionMutipleSelect}
        onChange={logChange}
      />
    </div>
  );
}
//MultipleGroupOption
//SingleRow
export function Singleselect1() {
  const objectArraysingle = [
    { value: "First", label: "First" },
    { value: "Second", label: "Second" },
    { value: "Third", label: "Third" },
    { value: "Fourth", label: "Fourth" },
  ];
  return (
    <Select
      options={objectArraysingle}
      isSearchable={false}
      classNamePrefix="Search"
    />
  );
}

//SingleRow
//MutipleSelect
export const MutipleSelect = () => {
  const MutipleSelectdata = [
    { value: "January", label: "January", isDisabled: "disabled" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April", isDisabled: "disabled" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July", isDisabled: "disabled" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November", isDisabled: "disabled" },
    { value: "December", label: "December" },
  ];
  return (
    <Select
      options={MutipleSelectdata}
      isMulti
      isSearchable={false}
      classNamePrefix="Search"
    />
  );
};
//MutipleSelect

//MultipleItems
export const MultipleItems = () => {
  const MultipleItemsdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  return (
    <Select
      options={MultipleItemsdata}
      isMulti
      isSearchable={false}
      classNamePrefix="Search"
    />
  );
};
//MultipleItems

//single Select
export const SelectAll = () => {
  const HideSelectAlldata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  return (
    <Select
      options={HideSelectAlldata}
      isSearchable={false}
      classNamePrefix="Search"
    />
  );
};
//single Select

//Select Filter
export const SelectFilter = () => {
  const SelectFilterdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  return (
    <Select
      options={SelectFilterdata}
      isSearchable={true}
      classNamePrefix="Search"
    />
  );
};
//Select Filter
//custom style
export class CustomisedSelector extends React.Component {

  options = [
    { value: "January", label: "January" },
    { value: "Febuary", label: "Febuary" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May", color: "#6c5ffc" },
    { value: "June", label: "June" },
    { value: "July", label: "July", color: "#05c3fb" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October", color: "#498205" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];

  styles = {
    option: (provided:any, state:any) => ({
      ...provided,
      fontWeight: state.isSelected ? "bold" : "normal",
      color: "black",
      backgroundColor: state.data.color,
      fontSize: state.selectProps.myFontSize
    }),
    singleValue: (provided:any, state:any) => ({
      ...provided,
      color: state.data.color,
      fontSize: state.selectProps.myFontSize
    })
  };

  render() {
    return (
      <Select classNamePrefix='Search' options={this.options} styles={this.styles} />
    );
  }
}
//custom style

//SlectBox Select
export const SlectBox = () => {
  const SlectBoxdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  return (
    <Select
      options={SlectBoxdata}
      isSearchable={false}
      classNamePrefix="Search"
    />
  );
};
//SlectBox Select
export const Disabled = () => {
  const SlectBoxdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  return (
    <Select
      options={SlectBoxdata}
      isSearchable={false}
      classNamePrefix="Search"
      isDisabled
    />
  );
};
//Multiple
export const Multiple = () => {
  const Multipledata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  return (
    <Select
      options={Multipledata}
      isSearchable={false}
      classNamePrefix="Search"
      isMulti
    />
  );
};
//Multiple

//MultipleSelect1
export const MultipleSelect1 = () => {
  const MultipleSelectdata = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  return (
    <Select
      options={MultipleSelectdata}
      isSearchable={false}
      classNamePrefix="Search"
      isMulti
    />
  );
};
//MultipleSelect1
//MultipleSelect2
export const MultipleSelect2 = () => {
  const MultipleSelect2data = [
    { value: "January", label: "January" },
    { value: "February", label: "February",isDisabled:"disabled" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May",isDisabled:"disabled" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August",isDisabled:"disabled" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  return (
    <Select
      options={MultipleSelect2data}
      isSearchable={false}
      classNamePrefix="Search"
      isMulti
    />
  );
};
//MultipleSelect2
//SearchSelect1
export const SearchSelect1 = () => {
  const SearchSelect1data = [
    { value: "Saab", label: "Saab" },
    { value: "Opel", label: "Opel"},
    { value: "Mercedez", label: "Mercedez" },
    { value: "Chrysler", label: "Chrysler" },
    { value: "General Motors", label: "General Motors"},
    { value: "Ford", label: "Ford" },
    { value: "Plymouth", label: "Plymouth" },
    { value: "Citroën", label: "Citroën"},
    { value: "Peugeot", label: "Peugeot" },
    { value: "Renault", label: "Renault" },
    { value: "Nissan", label: "Nissan" },
    { value: "Fiat", label: "Fiat" },
  ];
  return (
    <Select
      options={SearchSelect1data}
      isSearchable
      classNamePrefix="Search"
    />
  );
};
//SearchSelect1
//SearchSelect2
export const SearchSelect2 = () => {
  const SearchSelect2data = [
    { value: "Saab", label: "Saab",isDisabled:"disabled" },
    { value: "Opel", label: "Opel"},
    { value: "Mercedez", label: "Mercedez",isDisabled:"disabled"},
    { value: "Aston Martin", label: "Aston Martin" },
    { value: "Hyundai", label: "Hyundai"},
    { value: "Mitsubishi", label: "Mitsubishi" },
  ];
  return (
    <Select
      options={SearchSelect2data}
      isSearchable
      classNamePrefix="Search"
    />
  );
};
//SearchSelect2
//SearchSelect3
export const SearchSelect3 = () => {
  const SearchSelect3data = [
    { value: "Volvo", label: "Volvo"},
    { value: "Saab", label: "Saab"},
    { value: "Mercedes", label: "Mercedes"},
    { value: "BMW", label: "BMW" },
    { value: "Porche", label: "Porche"},
    { value: "Ferrari", label: "Ferrari" },
  ];
  return (
    <Select
      options={SearchSelect3data}
      isSearchable
      classNamePrefix="Search"
      isMulti
    />
  );
};
//SearchSelect3

//SearchSelect4
export const SearchSelect4 = () => {
  const SearchSelect4data = [
    { value: "Volvo", label: "Volvo", options: [
      { value: "Mercedes", label: "Mercedes" },
      { value: "Volvo", label: "Volvo", isDisabled: "true" },
      { value: "Porche", label: "Porche" },
      { value: "BMW", label: "BMW" },
      { value: "Saab", label: "Saab", isDisabled: "true" },
    ],},
    { value: "Saab", label: "Saab"},
    { value: "Mercedes", label: "Mercedes"},
    { value: "BMW", label: "BMW" },
    { value: "Porche", label: "Porche", options: [
      { value: "Mercedes", label: "Mercedes" },
      { value: "Volvo", label: "Volvo", isDisabled: "true" },
      { value: "Porche", label: "Porche" },
      { value: "BMW", label: "BMW" },
      { value: "Saab", label: "Saab", isDisabled: "true" },
    ],},
    { value: "Ferrari", label: "Ferrari" },
  ];
  return (
    <Select
      options={SearchSelect4data}
      isSearchable
      classNamePrefix="Search"
      isMulti
    />
  );
}
//SearchSelect4
// LocalizedTimePicker
export function LocalizedTimePicker() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampmInClock
        openTo="hours"
        views={["hours", "minutes", "seconds"]}
       
        
        label="Hours and Minutes and seconds"
        value={value}
        onChange={(newValue:any) => {
          setValue(newValue);
        }}
        
      />
    </LocalizationProvider>
  );
}
// //BasicTimePicker
export function BasicTimePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
       
      />
    </LocalizationProvider>
  );
}
// //ResponsiveTimePickers
export function ResponsiveTimePickers() {
  const [value, setValue] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <TimePicker
        ampmInClock
        views={["minutes", "seconds"]}
        
        
        label="Minutes and seconds"
        value={value}
        onChange={(newValue:any) => {
          setValue(newValue);
        }}
        
      />
    </LocalizationProvider>
  );
}
export function TimeValidationTimePicker() {
  const [value, setValue] = React.useState(null);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <TimePicker
         
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </Stack>
    </LocalizationProvider>
  );
}
export function TimePickerscroll() {
    const [value, setValue] = React.useState(null);
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <TimePicker
            
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            shouldDisableTime={(timeValue:any, clockType) => {
              if (clockType === "hours" && timeValue % 2) {
                return true;
              }
  
              return false;
            }}
          />
        </Stack>
      </LocalizationProvider>
    );
  }
  export function DynamicTimePicker() {
    const [value, setValue] = React.useState(new Date());
  
    return (
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Stack spacing={3}>
          <TimePicker
            ampm={false}
            openTo="hours"
            views={['hours', 'minutes']}
            
            
            value={value}
            onChange={(newValue:any) => {
              setValue(newValue);
            }}
            
          />
  
        </Stack>
      </LocalizationProvider>
    );
  }