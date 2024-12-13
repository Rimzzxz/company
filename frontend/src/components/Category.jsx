import { Col, ListGroup } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  categorySelectors,
  getAllCategory,
} from "../features/CategorySlice.js";
import { useEffect, useState } from "react";
import { MdHomeWork } from "react-icons/md";
import { MdDensitySmall } from "react-icons/md";
import { TbHomeBolt } from "react-icons/tb";
import { BiDotsHorizontal } from "react-icons/bi";
import { getProduct, getProductByCategory } from "../features/ProductSlice.js";

const Category = () => {
  const dispatch = useDispatch();
  const category = useSelector(categorySelectors.selectAll);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAllCategory()).finally(() => setLoading(false));
  }, [dispatch]);

  function setActive(elem) {
    var a = document.getElementsByClassName("active");
    for (let i = 0; i < a.length; i++) {
      a[i].classList.remove("active");
    }
    elem.classList.add("active");
  }

  const setIcon = (categori) => {
    if (categori === 1) {
      return <MdHomeWork />;
    } else if (categori === 2) {
      return <TbHomeBolt />;
    } else {
      return <BiDotsHorizontal />;
    }
  };

  const showAll = () => {
    dispatch(getProduct());
  };

  const categoryClicked = (id) => {
    dispatch(getProductByCategory(id));
  };

  return (
    <>
      <Col md={2} className="bg-primary text-white p-3 mt-n3">
        <h4>Product Kategori</h4>
        <p>{loading ? "Loading..." : ""}</p>
        <hr className="bg-white" />
        <ListGroup key="all001">
          <ListGroup.Item
            id="all001"
            className="mb-1 shadow-sm text-black bg-light border-0"
            active
            action
            onClick={() => {
              setActive(document.getElementById("all001")), showAll();
            }}
          >
            < MdDensitySmall /> All Product
          </ListGroup.Item>
        </ListGroup>
        {category &&
          category.map((item) => (
            <ListGroup key={item.id}>
              <ListGroup.Item
                id={`key${item.id}`}
                className="mb-1 shadow-sm text-black bg-light border-0"
                action
                onClick={() => {
                  setActive(document.getElementById(`key${item.id}`)),
                    categoryClicked(item.id);
                }}
              >
                {setIcon(item.id)} {item.name}
              </ListGroup.Item>
            </ListGroup>
          ))}
          
      </Col>
    </>
  );
};


export default Category;
