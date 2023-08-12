import React from "react";
import styled from "styled-components";

const People = (people) => {
  return (
    <>
      {people.people && (
        <SPeople>
          <div className="wrapper-people">
            <div className="container-people">
              <div className="box-people">
                <div className="box-people_img">
                  <img
                    alt="사람"
                    src={`https://image.tmdb.org/t/p/w500${people.people.profile_path}`}
                  />
                </div>
                <div className="box-people_info">
                  <div className="people-name">{people.people.name}</div>
                  <div className="people-role">
                    {people.people.known_for_department === "Acting"
                      ? "배우"
                      : "기타"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SPeople>
      )}
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
