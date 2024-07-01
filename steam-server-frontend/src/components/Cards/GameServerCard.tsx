import { useState } from "react";
import { Subscription } from "../../interfaces/types";
import "./GameServerCard.scss";
const GameServerCard = ({ subscription }: { subscription: Subscription }) => {
  const [isSelected, setIsSelected] = useState(false);

  return (
    <>
      <div className={`servicetype-gs ${isSelected ? "active" : ""}`} key={subscription.game_server.id} onClick={() => setIsSelected(!isSelected)}>
        <div className="row gs-row">
          <div className="service-title">
            <div className="col-md-6">
              <div className="d-flex  justify-content-start">
                <strong className="text-white"> {subscription.game_server.game_name} </strong>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex align-items-center justify-content-start">
                <p style={{ marginRight: "12px" }}>tipo abbonamento: {subscription.subscription_type}</p>
                <button className="reactivate-button ms-auto">Modifica</button>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-md-4">
              <strong>Server</strong>
            </div>
            <div className="col-md-3">
              <strong>IP/SubDomain</strong>
            </div>
            <div className="col-md-3">
              <strong>Giocatori</strong>
            </div>
            <div className="col-md-2">
              <strong>Durata</strong>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 text-left">
              <div className="row" style={{ marginBottom: "12px" }}>
                <div className="col-md-3" style={{ marginRight: "6px" }}>
                  <img src="https://static.nitrado.net/cdn/gameicons/64/zomboid.jpg" className="service-game-picture" alt="" />{" "}
                </div>
                <div className="col-md-8">
                  <strong>{subscription.game_server.game_name}</strong>
                </div>
              </div>
              <p>Public Server {subscription.game_server.slots} Slots</p>
              <div className="d-flex align-items-baseline">
                <p style={{ marginRight: "6px" }}>Stato</p>
                <div>
                  <div className="status-indicator suspended" title="Si prega di attendere fino a quando il server avrà terminato l'ultima operazione."></div>
                </div>
              </div>

              <div>
                <strong>{subscription.game_server.status}</strong>
              </div>
              <br />
            </div>
            <div className="text-left col-md-3">
              <img src="/img/pbg.png" className="flag flag-de" /> {subscription.game_server.ip}
            </div>
            <div className="col-md-3 text-left">-</div>
            <div className="col-md-2 text-left">
              <div className="nd-svc-red">{subscription.game_server.duration} Giorni</div>{" "}
            </div>
          </div>
        </div>
        <div className={`row gs-row2 ${isSelected ? "visible" : "hidden"}`}>
          <div className="col-md-4">
            <span style={{ color: "grey" }}>ID {subscription.game_server.id} </span>
            <br />
            Ubicazione server
            <img src="/img/pbg.png" style={{ marginTop: "-3px" }} className="flag flag-de" title="Germania, Francoforte" />
            <br />
            <br />
            Valido fin al giorno:
            <br />
            {subscription.subscription_end}
            <br />
          </div>
          <div className="col-md-8">
            <a href="/ita/services/extendservice/15304900">&gt; Riattiva</a>
            <a href="/ita/services/deleteservice/15304900">&gt; Elimina il server adesso</a>
            <a>&gt; Commento</a>
            <a href="/ita/servicerights/edit/15304900">&gt; Gestione diritti di accesso</a>
            <a href="/ita/services/changedomain/15304900">&gt; Cambia sottodominio</a>
            <a href="/ita/order-gameserver/2/15304900">&gt; Cambia slot o RAM (memoria)</a>
            <a id="showlist_15304900">&gt; Mostra nella lista globale dei server</a>
            <a className="d-none" id="showtop_15304900" href="/ita/toplist/view/15304900">
              &gt; Alla pagina del mio server
            </a>
            <a href="/ita/services/autoextend/15304900">&gt; Gestisci estensione automatica</a>
          </div>
        </div>
      </div>
    </>
  );
};
export default GameServerCard;
