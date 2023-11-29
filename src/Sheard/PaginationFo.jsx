import React from 'react';
import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';

const List = styled('ul')({
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    backgroundColor: '#ff4444', // Red background color
    height: '40px', // Specify your desired height
    width: '300px', // Specify your desired width
});

const PaginationFo = () => {
    const { items } = usePagination({
        count: 10,
    });

    return (
        <nav>
            <List>
                {items.map(({ page, type, selected, ...item }, index) => {
                    let children = null;

                    if (type === 'start-ellipsis' || type === 'end-ellipsis') {
                        children = '…';
                    } else if (type === 'page') {
                        children = (
                            <button
                                type="button"
                                style={{
                                    fontWeight: selected ? 'bold' : undefined,
                                    color: selected ? 'white' : 'black', // Text color
                                    textAlign: 'center', // Text centering
                                    border: '1px solid #ccc', // Border style
                                    padding: '5px 10px', // Padding
                                    margin: '0 5px', // Margin
                                }}
                                {...item}
                            >
                                {page}
                            </button>
                        );
                    } else {
                        children = (
                            <button
                                type="button"
                                style={{
                                    color: 'black', // Text color for other button types
                                    textAlign: 'center',
                                    border: '1px solid #ccc',
                                    padding: '5px 10px',
                                    margin: '0 5px',
                                }}
                                {...item}
                            >
                                {type}
                            </button>
                        );
                    }

                    return <li key={index}>{children}</li>;
                })}
            </List>
        </nav>
    );
};

export default PaginationFo;
