import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";

export let clientStomp: StompJs.Client;
clientStomp = new StompJs.Client();
// @ts-ignore
clientStomp.webSocketFactory = () => new SockJS('https://poker-api.r2ls.ru/ws');
clientStomp.activate();

