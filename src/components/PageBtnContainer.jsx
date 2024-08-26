import { FaChevronCircleLeft, FaChevronCircleRight } from 'react-icons/fa';
import Wrapper from '../assets/wrappers/PageBtnContainer';
import { useAppContext } from '../context/appContext';

const PageBtnContainer = () => {
    const { numOfPages, page, changePage } = useAppContext();
    const pages = Array.from({ length: numOfPages }, (_, i) => i + 1);
    const nextPage = () => {
        let newPage = page + 1;
        if (newPage > numOfPages) {
            newPage = numOfPages;
        }
        changePage(newPage);
    };
    const prevPage = () => {
        let newPage = page - 1;
        if (newPage < 1) {
            newPage = 1;
        }
        changePage(newPage);
    };
    return (
        <Wrapper>
            <button onClick={prevPage} className="prev-btn">
                <FaChevronCircleLeft /> Prev
            </button>
            <div className="btn-container ">
                {pages.map((pageNumber, index) => (
                    <button
                        onClick={() => changePage(pageNumber)}
                        className={
                            pageNumber === page ? 'page-btn active' : 'page-btn'
                        }
                        type="button"
                        key={index}
                    >
                        {pageNumber}
                    </button>
                ))}
            </div>
            <button
                onClick={nextPage}
                className="next-btn"
                disabled={page === numOfPages}
            >
                Next <FaChevronCircleRight />
            </button>
        </Wrapper>
    );
};
export default PageBtnContainer;
