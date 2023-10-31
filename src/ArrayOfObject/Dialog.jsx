import React, { useState } from 'react'
import { Button, Modal, Table } from "react-bootstrap";

const Dialog = ({ show, data }) => {
    console.log("Data", data);
    console.log("show",show)
    const [Show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    const renderheading = () => {
        return (
            data.length &&
            Object.keys(data[0]).map((x) => {
                return <th>{x}</th>;
            })
        );
    };

    const renderBatter = () => {
        return (
            data.length &&
            data.map((item, index) => {
                const { id, type } = item; //destructuring
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{type}</td>
                    </tr>
                );
            })
        );
    };

    const renderTopping = () => {
        return (
            data.length &&
            data.map((item, index) => {
                const { id, type } = item; //destructuring
                return (
                    <tr key={id}>
                        <td>{id}</td>
                        <td>{type}</td>
                    </tr>
                );
            })
        );
    };
    return (
        <>
            <Modal show={show && Show} onHide={handleClose}>
                <Modal.Header closeButton>Batters and Topping details</Modal.Header>
                <Modal.Body>
                    <Table striped bordered hover>

                        <thead>
                            <tr>{renderheading()}</tr>
                        </thead>
                        <tbody>

                            {renderBatter()}

                            {renderTopping()}
                        </tbody>
                    </Table>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Dialog