import Login from "../components/Sign/Login/Login";
import { useAppDispatch, useAppSelector } from "../redux/hooks";

const Checkout = () => {
  console.log("sono in Checkout");
  const dispatch = useAppDispatch();

  const { user, isLoading } = useAppSelector((state) => state.userLogin);
  const { service } = useAppSelector((state) => state.userCheckout);

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h1 className="text-center text-warning">Server Selezionato</h1>
        </div>
        <div className="row">
          <div className="col-6 text-white">
            {user ? (
              <div>
                <h1>{user.username}</h1>
              </div>
            ) : (
              <div>
                <h1>Non sei loggato</h1>
                <h1>Accedi o Registrati</h1>
                <Login />
              </div>
            )}
          </div>
          <div className="col-6 text-white">
            <h1>CARRELLO</h1>
            {service ? (
              <>
                <h1>{service.game_name}</h1>
                <h2>Price: {service.price}€</h2>
                <h3>Location: {service.location}</h3>
                <h3>Slots: {service.slots}</h3>
                <h3>RAM: {service.ram}</h3>
                <h3>CPU: {service.cpu}</h3>
                <h3>Platform: {service.platform}</h3>
              </>
            ) : (
              <h1>Seleziona un server</h1>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Checkout;
