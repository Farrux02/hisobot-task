import React, { useEffect, useState } from "react";
import "./modal.css";
import FormInput from "../FormInput";
import axios from "axios";

const Modal = ({ showModal, handleClick, options }) => {
  const uuid = {
    uuid: [],
  };

  const resetCheckbox = () => {
    uuid.uuid = [];
    // setDefaultChecked(false);
  };

  return (
    <div className={`modal-wrapper ${showModal ? "modal-wrapper--show" : ""}`}>
      <div className="modal-window">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (uuid.uuid.length) {
              axios
                .post(
                  "https://6252ef5e7f7fa1b1ddeb8f61.mockapi.io/api/v2/postIDs",
                  uuid
                )
                .catch((err) => console.log(err))
                .finally(() => {
                  // setDefaultChecked(false);
                  console.log("sent");
                });
            } else {
              console.log('err');
            }
          }}
        >
          <div className="modal-window__input">
            <FormInput
              type="text"
              placeholder="Поиск..."
              inputClass="modal-window__search-input"
            />
          </div>
          <div className="modal-window__content">
            {options?.map((option, index) => (
              <FormInput
                key={option.id}
                type="checkbox"
                name={option.id}
                endLabel={option.name}
                // defaultChecked={defaultChecked}
                handleChange={() => {
                  if (!uuid.uuid.includes(option?.id)) {
                    uuid.uuid.push(option?.id);
                  } else if (uuid.uuid.includes(option?.id)) {
                    const idIndex = uuid.uuid.findIndex(
                      (index) => index === option?.id
                    );
                    console.log(idIndex);
                    uuid.uuid.splice(idIndex, 1);
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
              onClick={() => {
                handleClick();
                resetCheckbox();
              }}
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
