import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import {IMessage} from "@stomp/stompjs";
import {INameStory} from "../Interfaces";
import {IGetName} from "../Redux/reducers/UserReducer";
import {pushUserName} from "../Redux/actions/userActions";

export let clientStomp: StompJs.Client;
clientStomp = new StompJs.Client();
// @ts-ignore
clientStomp.webSocketFactory = () => new SockJS('https://poker-api.r2ls.ru/ws');
clientStomp.activate();

export const ApiWebsocket: any = {
    onSubscribe: (
        getState: any,
        getNameStory: any,
        setSubscribedState: any,
        pushUserName: any,
        removeUser: any,
    ) => {clientStomp.onConnect = () => {
            setSubscribedState()
            clientStomp.subscribe('/topic/room/topic-changed', (message: IMessage) => {
                getNameStory(JSON.parse(message.body))
            });
            clientStomp.subscribe('/topic/room/im-here', () => {
                const userName = {
                    name: getState().user.name
                };
                // sent other users i am here
                ApiWebsocket.sendUserNameMeToo(userName)
            });
            clientStomp.subscribe('/topic/room/im-here-too', (message: IMessage) => {
                // console.log(`im-here-too ${JSON.parse(message.body).name}`)
                pushUserName(JSON.parse(message.body))
            });
            clientStomp.subscribe('/topic/room/i-left', (message: IMessage) => {
                // console.log(`remove ${JSON.parse(message.body).name}`)
                removeUser(JSON.parse(message.body))
            });
        }
    },
    sendTaskName: (data: INameStory) => {
        clientStomp.publish({destination: '/app/room/topic-changed', body: JSON.stringify(data)});
    },
    sendUserName: (data: IGetName) => {
        // console.log('/app/room/im-here')
        clientStomp.publish({destination: '/app/room/im-here', body: JSON.stringify(data)});
    },
    sendUserNameMeToo: (data: IGetName) => {
        // console.log(`im-here-too SEND ${JSON.stringify(data)}`)
        clientStomp.publish({destination: '/app/room/im-here-too', body: JSON.stringify(data)});
    },
    removeUser: (data: IGetName) => {
        clientStomp.publish({destination: '/app/room/i-left', body: JSON.stringify(data)});
    },
}