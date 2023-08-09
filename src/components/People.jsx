import React from "react";
import styled from "styled-components";

const People = () => {
  return (
    <>
      <SPeople>
        <div className="wrapper-people">
          <div className="container-people">
            <div className="box-people">
              <div className="box-people_img">
                <img src="https://an2-img.amz.wtchn.net/image/v2/Y2UqG4H95j7GiAEiHOXXDA.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qUXdlREkwTUNKZExDSndJam9pTDNZeEwzQmxiM0JzWlM4d056aGxOamhoWmpOaFpUTmhOMlkzTkRrd01TNXFjR2NpZlEuWjJ0TWdSTjdDaXRPWUNHN0kyTy1sdDcwMUlXN2Q3TFRrQWN0eW8zMzZmQQ" />
              </div>
              <div className="box-people_info">
                <div className="people-name">로저 미첼</div>
                <div className="people-role">감독</div>
              </div>
            </div>
          </div>
        </div>
      </SPeople>
    </>
  );
};

export default People;

const SPeople = styled.li`
  .wrapper-people {
    display: block;

    .container-people {
      display: flex;
      position: relative;
      align-items: center;
      padding: 8px 0px;
      cursor: pointer;

      .box-people {
        display: flex;
        position: relative;
        flex: 1 1 0%;
        align-items: center;
        overflow: hidden;

        .box-people_img {
          display: flex;
          position: relative;
          flex-shrink: 0;
          justify-content: center;
          align-items: center;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          margin-right: 14px;
          overflow: hidden;

          img {
            position: absolute;
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }

        .box-people_info {
          overflow: hidden;

          .people-name {
            color: rgb(255, 255, 255);
            font-size: 16px;
            font-weight: 400;
            letter-spacing: 0px;
            line-height: 22px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .people-role {
            color: rgb(132, 134, 141);
            font-size: 13px;
            font-weight: 400;
            letter-spacing: 0px;
            white-space: nowrap;
            margin-top: 2px;
            overflow: hidden;
            text-overflow: ellipsis;
          }
        }
      }
    }
  }
`;
