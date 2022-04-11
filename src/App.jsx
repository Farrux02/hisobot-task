import "./App.css";
import { useEffect, useState } from "react";
import Header from "./Components/Header";
import { StyledTab, StyledTabs } from "./Components/StyledTabs";
import Filters from "./Components/Filters";
import MTable from "./Components/Table";
import ButtonComponent from "./Components/Button";
import Modal from "./Components/Modal";
import axios from "axios";

const App = () => {
  const [tab, setTab] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [options, setOptions] = useState([]);

  const handleClick = () => {
    console.log("clicked");
    setShowModal(!showModal);
  };

  const IDArray = ['db2dc765-cd8d-4681-a9ea-320f148ba348', '23d486fe-bc0d-4367-848d-1cc8cf81bc75', 'fd2286cc-d539-4b00-ae12-9289fdc73222'] 

  const getOptions = (index) => {
    axios
      .get(`https://6252ef5e7f7fa1b1ddeb8f61.mockapi.io/api/v2/options/${IDArray[index]}`)
      .then((res) => {
        setOptions(res.data.options);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getOptions(tab);
  }, [tab])

  console.log(tab);

  return (
    <>
      <Header
        title="Hisobotlar"
        endAdornment={[
          <ButtonComponent variant="text" color="primary" text="Загрузить" />,
        ]}
      />
      <Filters
        extra={
          <ButtonComponent
            color="primary"
            variant="contained"
            text="Hisobotni shakllantirish"
            handleClick={handleClick}
          />
        }
      >
        <StyledTabs
          value={tab}
          onChange={(_, value) => setTab(value)}
          indicatorColor="primary"
          textColor="primary"
          centered={false}
          aria-label="full width tabs example"
          TabIndicatorProps={{ children: <span className="w-2" /> }}
        >
          <StyledTab label={"Viloyatlar"} />
          <StyledTab label={"Tumanlar/Shahar"} />
          <StyledTab label={"Xodimlar"} />
        </StyledTabs>
      </Filters>
      <MTable />
      <Modal showModal={showModal} handleClick={handleClick} options={options} />
    </>
  );
};

export default App;
