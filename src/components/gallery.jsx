import { Image } from "./image";
import ReactPaginate from 'react-paginate';
import { useState } from "react";
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
const ITEMS_PER_PAGE = 9;

export const Gallery = (props) => {

  const [currPage, setCurrPage] = useState(0);
  const [currCategory, setCurrCategory] = useState("Pre and post treatment");
  const data = props.data?.filter((e)=>e.category === currCategory);
  const currData = data ? data.slice(currPage * ITEMS_PER_PAGE, currPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE) : null;
  const pageCount = data ? data.length / ITEMS_PER_PAGE : 0;

  const options = [
    "Pre and post treatment", "Our happy customer", "Home visit", "Event"
  ];
  const defaultOption = currCategory;

  const handlePageClick = (event) =>
  {
    setCurrPage(event.selected)
  }

  const onSelect = (event) =>
  {
    setCurrCategory(event.value);
    setCurrPage(0);
  }

  return (
    <div id='portfolio' className='text-center'>
      <div className='container'>
        <div className='section-title'>
          <h2>Gallery</h2>
          <p>
           What we do 
          </p>
        </div>

        <Dropdown options={options} menuClassName='myMenuClassName' className="dropdown-select" onChange={onSelect} value={defaultOption} placeholder="Select an option" />;

        <div className='row'>
          <div className='portfolio-items'>
            {currData
              ? currData.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-sm-6 col-md-4 col-lg-4'>
                  <Image title={d.title} images={d.images} />
                </div>
              ))
              : 'Loading...'}
          </div>
        </div>
        <ReactPaginate
                className="paginate"
                pageClassName="paginate-button"
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
      </div>
    </div>
  )
}
