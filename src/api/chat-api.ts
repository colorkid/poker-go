import {IAllMessages, IApiChat} from "../Interfaces";
import {clientStomp} from './websocketApi'
import {IMessage} from "@stomp/stompjs";

export const chatApi: IApiChat = {
    onSubscribe: (callBack: (arg: IAllMessages) => void) => {
        clientStomp.onConnect = () => {
            clientStomp.subscribe('/topic/chat', (message: IMessage) => {
                callBack(JSON.parse(message.body))
            });
        }
    },
    sendMessage: (data: IAllMessages) => {
        clientStomp.publish({destination: '/app/message', body: JSON.stringify(data)});
    },
}