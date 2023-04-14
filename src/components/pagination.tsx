const Pagination = () => {
  return (
    <div className="pagination__container">
      <ul className="pagination">
        <li className="icon">
          <a href="#">
            <span className="fas fa-angle-left"></span>Previous
          </a>
        </li>
        <li>
          <a href="#">1</a>
        </li>
        <li>
          <a href="#">2</a>
        </li>
        <li>
          <a href="#">3</a>
        </li>
        <li>
          <a href="#">4</a>
        </li>
        <li>
          <a href="#">5</a>
        </li>
        <li>
          <a href="#">6</a>
        </li>
        <li>
          <a href="#">7</a>
        </li>
        <li>
          <a href="#">8</a>
        </li>
        <li>
          <a href="#">9</a>
        </li>
        <li>
          <a href="#">10</a>
        </li>
        <li className="icon">
          <a href="#">
            Next<span className="fas fa-angle-right"></span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
