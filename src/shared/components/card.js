import styled from "styled-components";

const StyledCard = styled.li`
  background: #fff;
  color: black;
  padding: 0.75rem 1rem;
  text-transform: capitalize;
  margin-bottom: 12px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  h1 {
    color: #666633;
    font-size: 16px;
    margin: 2px 0px !important;
  }
`;
const CardLogo = styled.div`
  display: flex;
  width: 30%;
  img {
    width: 100px;
    height: 100px;
    background-size: cover;
  }
`;
const CardMeta = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  flex: 1;
  flex-wrap: nowrap;
  height: 100%;
  p {
    font-size: 10px;
    color: grey;
    margin: 0px !important;
  }
  h4 {
    font-size: 11px;
    color: grey;
    margin: 2px !important;
  }
  .ratings {
    background: green;
    color: #fff;
    padding: 0.1rem;
    border-radius: 4px;
    margin-left: 4px;
    display: flex;
    flex: 1;
    flex-wrap: nowrap;
  }
  .expertise {
    text-overflow: ellipsis;
    -webkit-line-clamp: 1;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
`;
const Card = ({ children, title, image }) => {
  return (
    <StyledCard>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <CardLogo>
          <img src={image} alt={title} />
        </CardLogo>
        <CardMeta>
          <h1>{title} </h1>
          <p className="ratings"> 3.4 &#9733; /5 (100)</p>
          <p>
            <img
              alt="distance"
              style={{ width: "inherit", height: "11px" }}
              src="https://uxwing.com/wp-content/themes/uxwing/download/toys-childhood/kick-scooter-icon.svg"
            />{" "}
            2.3kms(10mins)
          </p>
          <h4>Expertise in</h4>
          <p className="expertise">
            Blouse, Kurta,Salwar Kameez, Lehenga, Jumpsuit, skirts
          </p>
        </CardMeta>
      </div>
      {children}
    </StyledCard>
  );
};

export default Card;
