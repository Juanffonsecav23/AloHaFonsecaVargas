/* eslint-disable react/prop-types */
function Flex({ children, title }) {
    const flexStyle = {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    };
  
    return (
      <div>
        <h1 style={{ color: "var(--naranja-titulos)", marginLeft: "10px" }}>{title}</h1>
        <div style={flexStyle}>{children}</div>
      </div>
    );
  }
  
  export default Flex;