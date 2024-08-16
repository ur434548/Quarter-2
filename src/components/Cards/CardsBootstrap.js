import Card from "react-bootstrap/Card";

function TextExample({ children, className }) {
  return (
    <Card
      className={className}
      style={{
        width: "270px",
        height: "244px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
        padding: "16px",
      }}
    >
      {children}
    </Card>
  );
}

export default TextExample;
