export const StyledJsx = () => {
  //hoverは対応していない
  return (
    <>
      <div className="container">
        <p className="title">- StyledJsx -</p>
        <button className="button">fight!!</button>
      </div>
      <style jsx="true">{`
    .container {
      border: solid 2px #392e;
      border-radius: 20px;
      padding: 8px;
      margin: 8px;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .title {
      margin: 0;
      color: #3d84a8;
    }
    .button {
      background-color: #abedd8;
      border: none;
      padding: 8px;
      border-radius: 8px;
      &:hover { 
        background-color: #464646;
        color: #fff;
        cursor: pointer;
      }
    `}</style>
    </>
  );
};
