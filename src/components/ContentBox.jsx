import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ContentBox = (props) => {
  return (
    <>
      <SContentBox>
        <div>
          <Link to="/" className="content-link">
            <div className="link-wrapper">
              <div className="link-container">
                <div className="link-container2">
                  <div className="link-container3">
                    <div className="img-container">
                      <img
                        src="https://an2-img.amz.wtchn.net/image/v2/cUd87tC-O7nptoEl-XXcKw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5EQXdlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5USXpNekV3TmpJeE5EUXlNemd3TkRBaWZRLjVVYmg1NnAzYTF4aTdtSUtnY2RTTmhYSDBaSXRmVWVrUUNabm9vQ2N4Qnc"
                        alt="검색"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </SContentBox>
    </>
  );
};

export default ContentBox;

const SContentBox = styled.li`
  display: inline-block;
  position: relative;
  vertical-align: top;
  padding: 0px 8px;
  cursor: pointer;

  @media screen and (min-width: 103em) {
    width: 13%;
  }
  .content-link {
    display: block;
    outline: #000;
    text-decoration: none;
    color: #fff;
    background-color: transparent;
    cursor: pointer;

    .link-wrapper {
      white-space: pre-wrap;
      display: block;

      .link-container {
        position: relative;
        background-image: linear-gradient(rgba(0, 0, 0, 0), rgb(0, 0, 0));
        border-radius: 4px;
        overflow: hidden;

        .link-container2 {
          position: relative;
          z-index: 2;
          padding-top: 100%;

          .link-container3 {
            content: "";
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;

            .img-container {
              position: absolute;
              top: 0px;
              left: 0px;
              width: 100%;
              height: 100%;
              border-radius: 4px;
              overflow: hidden;

              img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: initial;
              }
            }
          }
        }
      }
    }
  }
`;
