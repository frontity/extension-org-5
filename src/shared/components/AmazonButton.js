import React from 'react';
import { node } from 'prop-types';
import styled from 'styled-components';

const AmazonButton = ({ children }) => <Container>{children}</Container>;

AmazonButton.propTypes = {
  children: node.isRequired,
};

export default AmazonButton;

const Container = styled.span`
  display: block;

  .gaz_amz_default {
    position: relative;
    display: block;
    padding: 5px;
    width: 230px;
    text-align: right;
    font-size: 18px;
    line-height: 1.42857;
    margin: 0 auto 10px;
    background-color: #666;
    color: #fff;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    box-sizing: border-box;
    text-decoration: none;
    -webkit-transition: background 200ms ease-in-out;
    -moz-transition: background 200ms ease-in-out;
    -ms-transition: background 200ms ease-in-out;
    -o-transition: background 200ms ease-in-out;
    transition: background 200ms ease-in-out;

    * {
      color: #fff;
    }

    .gaz_amz_logo {
      position: relative;
      display: block;
      float: left;
      margin-right: 10px;
      padding-top: 11px;
      width: 100px;
      text-align: left;

      img {
        max-width: 100%;
      }
    }

    .gaz_amz_buytext {
      position: relative;
      display: block;
      width: 100%;
      font-size: 14px;

      &:before {
        font-weight: 100;
        content: 'Cómpralo aquí';
      }
    }

    .gaz_amz_currency {
      position: relative;
      font-size: 12px;
      font-weight: 600;
      text-transform: uppercase;
      vertical-align: text-bottom;
      padding-right: 4px;
    }

    .gaz_amz_amount {
      position: relative;
      font-weight: 600;
      font-size: 18px;
      vertical-align: text-bottom;
    }

    .gaz_amz_currency_aft {
      display: none;
    }
  }
`;
