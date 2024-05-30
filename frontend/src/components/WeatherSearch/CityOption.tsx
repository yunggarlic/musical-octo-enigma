const CityOption = ({ data, handleClick }) => {
  return <button key={data.toString()} onClick={handleClick} />;
};

export default CityOption;
