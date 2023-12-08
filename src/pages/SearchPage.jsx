import styled from "styled-components";
import { GlobalLayout } from "../global";
import { search } from "../global/store/searchSlice";
import { useNavigate } from "react-router-dom";

const SearchPage = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeHandle = (event) => {
    setKeyword(event.target.value);
  };

  const onSubmitHandle = (event) => {
    event.preventDefault();
    dispatch(search(keyword));
    navigate(`/search/${keyword}`);
  };
  return (
    <GlobalLayout>
      <SSearchPage>
        <div className="container">
          <form className="container-search" onSubmit={onSubmitHandle}>
            <label>
              <input
                autoComplete="off"
                id="query"
                name="query"
                placeholder="콘텐츠, 태그, 인물, 리스트 검색"
                type="search"
                value={keyword}
                className="form-input"
                onChange={onChangeHandle}
              />

              <div className="form-icon">
                <BiSearch />
              </div>
            </label>
          </form>
        </div>
      </SSearchPage>
    </GlobalLayout>
  );
};

export default SearchPage;

const SSearchPage = styled.div`
  .container {
    padding: 32px 0px 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .container-search {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      label {
        position: relative;
        display: flex;
        align-items: center;
        width: 80%;
        height: 100%;
      }

      .form-icon {
        position: absolute;
        left: 14px;
        top: 55%;
        transform: translateY(-50%);
        color: #6b7280;
      }

      .form-input {
        padding: 10px 40px;
        border: none;
        border-radius: 60px;
        font-size: 16px;
        width: 100%;
        height: 80px;
        outline: none;
        transition: border-color 0.3s;
        background: rgb(34, 35, 38);
        caret-color: rgb(248, 47, 98);

        &:focus {
          color: white;
        }
      }
    }
  }
`;
