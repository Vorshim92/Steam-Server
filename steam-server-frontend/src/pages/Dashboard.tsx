import axios from "axios";
import { getUserLogin } from "../redux/actionCreators/actionUserLogin";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { useEffect } from "react";
import GameServerCard from "../components/Cards/GameServerCard";
import SpinnerVorshim from "../components/Spinners/SpinnerVorshim";
import { ActionType } from "../redux/actionTypes/actionTypeUser";
import { User } from "../interfaces/types";
const Dashboard = () => {
  console.log("sono in dashboard");

  const dispatch = useAppDispatch();

  // setTimeout(() => {
  //   dispatch(getUserLogin());
  // }, 1000 * 30);

  const { user, isLoading } = useAppSelector((state) => state.userLogin);

  return (
    <>
      {isLoading ? (
        <div className="d-flex justify-content-center">
          <SpinnerVorshim />
        </div>
      ) : (
        <>
          <div className="row">
            <div className="col-sm-3 dash-sidebar">
              <div className="hidden-xs">
                <div className="content-box">
                  <div className="sb">
                    <div className="sb-profile">
                      <div className="sb-userinfoblock">
                        <a className="aplain" href="/ita/profile/show/Vorshim92">
                          <div className="sb-userinfo-icon">
                            <div className="up-usericon-s">
                              <img src="/users.nitrado/10576024.jpg" />
                            </div>
                          </div>
                          <div className="sb-userinfo-name">{user?.username}</div>
                        </a>
                        <a href="/ita/users/edit" className="ni ni-edit edit-pen"></a>
                        <br />
                        <div className="sb-userinfo-data">Credito</div>
                        <div className="sb-userinfo-value">&nbsp;&nbsp;0,00 EUR</div>
                        <br />
                        <div id="modalcontent0" className="d-none">
                          Sei sicuro di volerti disconnettere?
                        </div>
                        <a href="/ita/users/logout" className="sb-logout modal-confirm-link" data-modalid="modalcontent0"></a> <div className="sb-userinfo-data">User-ID</div>
                        <div className="sb-userinfo-value">{user?.id}</div>
                      </div>
                    </div>
                    <div className="sb-drop active">
                      <a href="/ita/services/index" className="sb-menu newicon3 newicon3Active">
                        I miei servizi
                      </a>
                      <div className="sb-svctypelist">
                        <a href="/ita/services/index#gameserver" className="nd-type-game">
                          Game Servers: <div className="sb-bubble">{user?.subscriptions && user?.subscriptions.length > 0 ? user?.subscriptions.length : 0}</div>
                        </a>
                        <a href="/ita/servicetypes/index" id="svcbuyerpop" className="nd-type-add">
                          Ordina servizio
                        </a>
                      </div>
                    </div>
                    <div className="sb-drop">
                      <a href="/ita/services/index" className="sb-menu newicon3 newicon3Active">
                        Il Mio Account
                      </a>
                    </div>
                    <div className="sb-drop">
                      <a href="/ita/services/index" className="sb-menu newicon3 newicon3Active">
                        Ricarica Account
                      </a>
                    </div>
                    <div className="sb-drop">
                      <a href="/ita/services/index" className="sb-menu newicon3 newicon3Active">
                        Riepilogo Account
                      </a>
                    </div>
                    <div className="sb-drop">
                      <a href="/ita/services/index" className="sb-menu newicon3 newicon3Active">
                        Parental Control
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-9 dash-rightbar">
              <div className="content-box">
                <div className="rb">
                  <h1 className="text-center">GAMESERVER:</h1>

                  {user?.subscriptions && user.subscriptions.map((subscription) => <GameServerCard subscription={subscription} key={subscription.game_server.id} />)}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Dashboard;
