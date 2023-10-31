import React, { useState } from 'react';
import { ObjectData } from "../Data/ArrayOfObject";
import { capitalizeFirst } from '../Data/Data';
import Dialog from './Dialog';

const ArrayofObject = () => {
  const [dialog, setDialog] = useState(false);
  const [dialogObject, setDialogObject] = useState({});


  const renderheading = () => {
    return (
      ObjectData &&
      Object.keys(ObjectData[0]).map((x) => {
        let value = capitalizeFirst(x);
        return <th>{value}</th>;
      })
    );
  };

  return (
    <>
      <div className="container">
        <table className="table table-bordered">
          <thead>
            <tr>{renderheading()}</tr>
          </thead>
          <tbody>
            {ObjectData.map((el) => {
              return (
                <tr>
                  <td>{el.id}</td>
                  <td>{el.type}</td>
                  <td>{el.ppu}</td>
                  <td>{el.name}</td>
                  <td>{el.value}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setDialog(true);
                        setDialogObject(el.batters.batter);
                      }}
                      style={{ marginRight: "20px" }}
                    >
                      Batters details
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => {
                        setDialog(true);
                        setDialogObject(el.topping);
                      }}
                      style={{ marginRight: "20px" }}
                    >
                      Topping details
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <Dialog show={dialog} data={dialogObject} />

    </>
  );
}

export default ArrayofObject