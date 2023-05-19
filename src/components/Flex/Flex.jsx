function Flex({ children, title }) {
    const flexStyle = {
      display: "flex",
      justifyContent: "space-evenly",
      flexWrap: "wrap",
    };
  
    return (
      <div>
        <h2 style={{ color: "orange" }}>{title}</h2>
        <div style={flexStyle}>{children}</div>
      </div>
    );
  }
  
  export default Flex;