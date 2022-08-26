import { Rings } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader">
      <Rings
        height="80"
        width="80"
        color="#ffcb05"
        radius="6"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="A carregar.."
      />
    </div>
  );
}

export default Loader;
