import { ChangeEvent } from "react";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { useSelector } from "react-redux";
import { selectSort } from "../redux/local/selectors";
import { setSort } from "../redux/local/slice";

const SelectSort = () => {
  const dispatch: AppDispatch = useDispatch();
  const sort = useSelector(selectSort);

  const handleSort = (value: string) => {
    dispatch(setSort(value));
  };

  return (
    <Form.Select
      className="mb-4"
      aria-label="Default select example"
      onChange={(e: ChangeEvent<HTMLSelectElement>) =>
        handleSort(e.target.value)
      }
      value={sort}
    >
      <option value="no_sorted">No sorted</option>
      <option value="by_price">Sort by price</option>
      <option value="by_date">Sort by add date</option>
    </Form.Select>
  );
};

export default SelectSort;
