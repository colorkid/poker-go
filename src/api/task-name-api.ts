import {IApiWebSocket, INameStory} from "../Interfaces";
import {clientStomp} from './websocketApi'
import {IMessage} from "@stomp/stompjs";

export const taskNameApi: IApiWebSocket = {
    onSubscribe: (getMessage: (arg: INameStory) => void, setSubscribedState: () => void) => {
        clientStomp.onConnect = () => {
            setSubscribedState()
            clientStomp.subscribe('/topic/room/topic-changed', (message: IMessage) => {
                getMessage(JSON.parse(message.body))
            });
        }
    },
    sendMessage: (data: INameStory) => {
        clientStomp.publish({destination: '/app/room/topic-changed', body: JSON.stringify(data)});
    },
}