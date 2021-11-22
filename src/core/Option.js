export default function Option(props) {
  return (
    <div
      className="option"
      onClick={() => {
        props.onOptionClick(props.name);
      }}
    >
      <div className="optionName">{props.name}</div>
      <div className="optionCode">{props.code}</div>
    </div>
  );
}
