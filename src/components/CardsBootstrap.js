import Card from "react-bootstrap/Card";

function TextExample({ children }) {
  return (
    <Card
      style={{
        width: "18rem",
        height: "15rem",
        gap: "25px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:" 4px 5px 9px lightgrey"
    
      }}
    >
      {children}
    </Card>
  );
}

export default TextExample;
