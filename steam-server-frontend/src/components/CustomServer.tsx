import { Service } from "../interfaces/types";
import { useAppDispatch } from "../redux/hooks";
import { useState } from "react";

const CustomServer = ({ service }: { service: Service }) => {
  const dispatch = useAppDispatch();
  const [updatedService, setUpdatedService] = useState<Service>(service);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setUpdatedService({ ...updatedService, [name]: value });
  };

  const handleClick = () => {
    setUpdatedService((prevService) => {
      const newService = { ...prevService, type: "promo" };
      dispatch({ type: "SERVICE_ADD", payload: newService });
      return newService;
    });
  };
  return (
    <div>
      <h1>CustomServer</h1>
      <div>
        <label>
          CPU:
          <input type="text" name="cpu" value={updatedService.cpu} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          RAM:
          <input type="text" name="ram" value={updatedService.ram} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Slots:
          <input type="number" name="slots" value={updatedService.slots} onChange={handleChange} />
        </label>
      </div>
      <div className="d-flex justify-content-center">
        <button className="btn-checkout" onClick={handleClick}>
          Conferma Configurazione
        </button>
      </div>
    </div>
  );
};
export default CustomServer;
