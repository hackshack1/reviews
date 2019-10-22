import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif !important;
  font-size: 15px;
  font-weight: 300;
  color: rgb(72, 72, 72);
`;

const PageNumber = styled.div`
  padding:10px;
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background-color: rgb(0, 132, 137);
  color: rgb(255, 255, 255);
  border-radius: 50%;
`;

const PageLink = styled.a`
  color: rgb(255, 255, 255) !important;
  text-decoration: none;
`;


const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <nav>
      <Wrapper>
        {pageNumbers.map(number => (
          <PageNumber key={number} className='page-item'>
            <PageLink onClick={() => paginate(number)} href='#!' className='page-link'>
              {number}
            </PageLink>
          </PageNumber>
        ))}
      </Wrapper>
    </nav>
  );
};

export default Pagination;

