import React, { useEffect, useState } from "react";
import "./modal.css";
import FormInput from "../FormInput";
import axios from "axios";

const Modal = ({ showModal, handleClick, options }) => {
  // const [checkBox, setCheckBox] = useState([]);

  const uuid = {
    uuid: []
  };

  const resetCheckbox = () => {
    
  }

  // const getOptions = () => {
  //   axios
  //     .get(
  //       `https://6252ef5e7f7fa1b1ddeb8f61.mockapi.io/api/v2/options/23d486fe-bc0d-4367-848d-1cc8cf81bc75`
  //     )
  //     .then((res) => {
  //       setCheckBox(res.data.options);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  // useEffect(() => {
  //   getOptions();
  // }, []);

  const handleCheckboxChange = (e) => {
    // const { name, checked } = e.target;
    // const tempUser = checkBox?.map((check) =>
    //   check.name === name ? { ...check, isChecked: checked } : check
    // );

    // setCheckBox(tempUser);

    console.log();
  };

  // const handleSubmit = () => {
  // }

  return (
    <div className={`modal-wrapper ${showModal ? "modal-wrapper--show" : ""}`}>
      <div className="modal-window">
        <form onSubmit={(e) => {
              e.preventDefault();
              axios.post('https://6252ef5e7f7fa1b1ddeb8f61.mockapi.io/api/v2/postIDs', uuid)
        }}>
          <div className="modal-window__input">
            <FormInput
              type="text"
              placeholder="Поиск..."
              inputClass="modal-window__search-input"
            />
          </div>
          <div className="modal-window__content">
            {options?.map((option) => (
              <FormInput
                key={option.id}
                type="checkbox"
                name={option.id}
                endLabel={option.name}

                // checked={check?.isChecked || false}
                handleChange={() => {
                  // (IDArray.push(check?.id))
                  // IDArray.contains(option?.id) ? IDArray.push(option?.id) : null
                  if(!(uuid.uuid.includes(option?.id))){
                    uuid.uuid.push(option?.id)
                  }
                  console.log(uuid);
                }}
                divClass="modal-window__checkbox-div"
                inputClass="modal-window__checkbox-input"
              />
            ))}
            {/* <FormInput
              type="checkbox"
              name="check"
              endLabel="Tanlanganlar"
              divClass="modal-window__checkbox-div"
              inputClass="modal-window__checkbox-input"
            />
            <FormInput
              type="checkbox"
              name="check"
              endLabel="Tanlanganlar"
              divClass="modal-window__checkbox-div"
              inputClass="modal-window__checkbox-input"
            />
            <FormInput
              type="checkbox"
              name="check"
              endLabel="Tanlanganlar"
              divClass="modal-window__checkbox-div"
              inputClass="modal-window__checkbox-input"
            />
            <FormInput
              type="checkbox"
              name="check"
              endLabel="Tanlanganlar"
              divClass="modal-window__checkbox-div"
              inputClass="modal-window__checkbox-input"
            />
            <FormInput
              type="checkbox"
              name="check"
              endLabel="Auktsionga chiqarish uchun vakolatli organlar tomonidan ko'rib chiqilayotgan"
              divClass="modal-window__checkbox-div"
              inputClass="modal-window__checkbox-input"
            /> */}
          </div>
          <div className="modal-window__buttons">
            <button
              className="cancel-button"
              type="button"
              onClick={() => handleClick()}
            >
              Bekor qilish
            </button>
            <button className="save-button" type="submit">
              Davom ettish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
