import Form from "react-bootstrap/Form";

const OurDropDown = ({ setFrom, setTo, setIsChecked, isChecked }) => {
  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="select__flight">
      <div className="select__flight_dep">
        <Form.Select size="lg" onChange={(e) => setFrom(e.target.value)}>
          <option>Select departure</option>
          <option value="PRG">Prague</option>
          <option value="BER">Berlin</option>
          <option value="WAW">Warsaw</option>
          <option value="PED">Pardubice</option>
        </Form.Select>
      </div>

      <div className="select__flight_arr">
        <Form.Select size="lg" onChange={(e) => setTo(e.target.value)}>
          <option>Select destination</option>
          <option value="VLC">Valencia</option>
          <option value="BCN">Barcelona</option>
          <option value="MAD">Madrid</option>
          <option value="MXP">Milano</option>
          <option value="ATH">Athens</option>
        </Form.Select>
      </div>
      <div>
        <Form onChange={() => handleOnChange()}>
          <Form.Check
            type="switch"
            id="custom-switch"
            label="Only direct flights"
          />
        </Form>
      </div>
    </div>
  );
};

export default OurDropDown;
