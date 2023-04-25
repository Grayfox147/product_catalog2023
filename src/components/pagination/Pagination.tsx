import React from 'react';
import classNames from 'classnames';

type PaginationProps = {
  itemsPerPage: number,
  total: number,
  currentPage: number,
  pages: number[],
  onPageChange: (value:number) => void,
};

export const Pagination:React.FC<PaginationProps> = ({
    itemsPerPage,
    total,
    currentPage,
    pages,
    onPageChange,
}) => {
    const isFirstPage = currentPage === 1;
    const lastPage = Math.ceil(total /itemsPerPage);
    const isLastPage = currentPage === lastPage;

    return (
        <div className='pagination-container'>
            <ul className='pagination'>
                <li className={classNames(
                    'page-item',
                    { disabled: isFirstPage }
                )}>
                    <a
                        data-cy="prevLink"
                        className="page-link"
                        href="#prev"
                        aria-disabled={isFirstPage}
                        onClick={(event) => {
                            event.preventDefault();
                            onPageChange((currentPage - 1));}}
                    >
                  «
                    </a>
                </li>
                {pages.map((page) => (
                    <li
                        className={classNames(
                            'page-item',
                            { 'page-item_active': page === currentPage }
                        )}
                        key={page}
                    >
                        <a
                            data-cy="pageLink"
                            className="page-link"
                            href={`#${page}`}
                            onClick={(event) => {
                                event.preventDefault();
                                if (page !== currentPage) {
                                    onPageChange(page);
                                }
                            }}
                        >
                            {page}
                        </a>
                    </li>
                ))}
                <li className={classNames(
                    'page-item',
                    { disabled: isLastPage }
                )}>
                    <a
                        data-cy="prevLink"
                        className="page-link"
                        href="#prev"
                        aria-disabled={isLastPage}
                        onClick={(event) => {
                            event.preventDefault();
                            onPageChange((currentPage + 1));}}
                    >
                  »
                    </a>
                </li>
            </ul>
        </div>
    );
};