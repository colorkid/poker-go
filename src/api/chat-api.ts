import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import {IAllMessages} from "../Interfaces";

let clientStomp: StompJs.Client;

const sendMessage = (data: IAllMessages) => {
    clientStomp.publish({destination: '/app/message', body: JSON.stringify(data)});
}

const createChannel = (callBack: (arg: IAllMessages) => void) => {
    clientStomp = new StompJs.Client();
    // @ts-ignore
    clientStomp.webSocketFactory = () => new SockJS('http://45.84.225.139:8081/ws');
    clientStomp.activate();
    clientStomp.onConnect = () => {
        clientStomp.subscribe('/topic/chat', (message) => {
            callBack(JSON.parse(message.body))
        });
    };
}

const closeConnection = () => {
    clientStomp.deactivate();
}

export const chatApi = {
    start: createChannel,
    sendMessage,
    closeConnection,
}