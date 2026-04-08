import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { deleteproduct } from "../redux/productslice";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import Editproduct from "./Editproduct";
function ProductCard({ el, ping, setping }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={el?.img} />
      <Card.Body>
        <Card.Title>{el?.nameproduct}</Card.Title>
        <Card.Text>{el?.category}</Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(deleteproduct(el?._id));
            setping(!ping);
            Swal.fire({
              title: "Do you want to save the changes?",
              showDenyButton: true,
              showCancelButton: true,
              confirmButtonText: "Save",
              denyButtonText: `Don't save`,
            }).then((result) => {
              /* Read more about isConfirmed, isDenied below */
              if (result.isConfirmed) Swal.fire("Saved!", "", "success");
              else if (result.isDenied)
                Swal.fire("Changes are not saved", "", "info");
            });
          }}
        >
          delete
        </Button>
    <Editproduct el={el} ping={ping} setping={setping}/>
      </Card.Body>
    </Card>
  );
}

export default ProductCard;
