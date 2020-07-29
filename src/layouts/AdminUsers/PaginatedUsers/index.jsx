import React, { useState } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginatedUsers = ({ handleOnChangePage, totalPages }) => {
  const [activeItem, setActiveItem] = useState(1);
  const onChangePages = (page) => {
    handleOnChangePage(page);
    if (activeItem !== page) {
      setActiveItem(page);
    }
  };
  const renderPageNumber = () => {
    let temptArr = [];

    for (let i = 1; i <= totalPages; i++) {
      let paginationTemplate = (
        <PaginationItem
          active={activeItem === i ? true : false}
          key={i}
          onClick={() => onChangePages(i)}
        >
          <PaginationLink>{i}</PaginationLink>
        </PaginationItem>
      );
      temptArr = [...temptArr, paginationTemplate];
    }
    return temptArr;
  };
  return (
    <Pagination>
      <PaginationItem onClick={() => onChangePages(1)}>
        <PaginationLink first />
      </PaginationItem>
      {renderPageNumber()}
      <PaginationItem onClick={() => onChangePages(totalPages)}>
        <PaginationLink last />
      </PaginationItem>
    </Pagination>
  );
};

export default PaginatedUsers;
