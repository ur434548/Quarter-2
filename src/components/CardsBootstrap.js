import Card from "react-bootstrap/Card";

function TextExample({ children , style, className}) {
  return ( 
    <Card
    className={className}
      style={{
        width: "18rem",
        height: "17rem",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        boxShadow:" 4px 5px 9px lightgrey",
        padding:"16px"
    
      }}
    >
      {children}
    
    </Card>
  );
}

export default TextExample;
