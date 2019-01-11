import React from 'react';
import { number, node, arrayOf } from 'prop-types';
import styled from 'styled-components';

const ValentiReview = ({ children, scores }) => (
  <Container scores={scores} className="valenti-review ignored-by-content">
    {children}
  </Container>
);

ValentiReview.propTypes = {
  children: node.isRequired,
  scores: arrayOf(number).isRequired,
};

export default ValentiReview;

const Container = styled.span`
  display: block;
  padding: 10px;
  color: #808080;
  background: #eeeeee;

  #cb-review-title {
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 16px;
    color: #808080;
    margin: 0 0 15px 0;
    width: 100%;
  }

  .cb-bar {
    width: 100%;
    margin: 0 0 12px 0;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 12px;
    color: #808080;

    .cb-criteria-score {
      float: right;
    }

    .cb-overlay {
      height: 20px;
      margin-top: 2px;
      display: block;
      width: 100%;
      background: #fff;

      &:after {
        display: block;
        height: 100%;
        content: '';
        background-color: #eb9812;
      }
    }

    ${({ scores }) =>
      scores
        .map(
          score => `
        .cb-overlay.score${score}:after {
          width: ${score}%;
        }
      `,
        )
        .join('')}
  }

  .cb-pros-cons {
    display: inline-block;
    width: 50%;

    .cb-title {
      text-align: center;
      letter-spacing: 1px;
      text-transform: uppercase;
      font-size: 16px;
      line-height: 40px;
      height: 40px;
      color: #808080;
    }

    ul {
      padding: 0 20px;
      list-style-type: square;
      list-style-position: inside;
      margin: 0;

      li {
        font-size: 14px;
        margin-bottom: 5px;
      }
    }
  }

  .cb-cons-list {
    float: right;
  }

  .cb-hide {
    display: none;
  }

  .cb-score-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 130px;
    width: 65%;
    color: #eb9812;
    margin: 15px auto 30px auto;
    border: 3px solid #eb9812;
    padding: 15px 0;

    .score {
      font-size: 65px;
    }

    .score-title {
      font-size: 16px;
      letter-spacing: 1px;
      text-transform: uppercase;
    }

    & > span {
      line-height: 1;
      text-align: center;

      .h2 {
        font-size: 14px;
        margin: 0 0 10px;
      }
    }
  }

  .cb-user-rating {
    margin-bottom: 0;

    #cb-vote {
      width: 100%;
      position: relative;
      text-align: center;
    }
  }
`;
