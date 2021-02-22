import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import {IMessage} from "@stomp/stompjs";
import {INameStory} from "../Interfaces";
import {IGetName} from "../Redux/reducers/UserReducer";
import {pushUserName} from "../Redux/actions/userActions";
import {IVote} from "../Components/Cards/CardsContainer";

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
        votedUser: any,
    ) => {clientStomp.onConnect = () => {
            setSubscribedState()
            clientStomp.subscribe('/topic/room/topic-changed', (message: IMessage) => {
                getNameStory(JSON.parse(message.body))
            });
            clientStomp.subscribe('/topic/room/im-here', () => {
                const userName = {
                    name: getState().user.name
                };
                ApiWebsocket.sendUserNameMeToo(userName)
            });
            clientStomp.subscribe('/topic/room/im-here-too', (message: IMessage) => {
                pushUserName(JSON.parse(message.body))
            });
            clientStomp.subscribe('/topic/room/i-left', (message: IMessage) => {
                removeUser(JSON.parse(message.body))
            });
            clientStomp.subscribe('/topic/room/i-voted', (message: IMessage) => {
                // console.log(JSON.parse(message.body))
                votedUser(JSON.parse(message.body))
            });
            clientStomp.subscribe('/topic/room/my-score', (message: IMessage) => {
                // console.log(JSON.parse(message.body))
            });
            clientStomp.subscribe('/topic/room/open-cards', (message: IMessage) => {
                console.log('subscribe. open cards')
            });
        }
    },
    sendTaskName: (data: INameStory) => {
        clientStomp.publish({destination: '/app/room/topic-changed', body: JSON.stringify(data)});
    },
    sendUserName: (data: IGetName) => {
        clientStomp.publish({destination: '/app/room/im-here', body: JSON.stringify(data)});
    },
    sendUserNameMeToo: (data: IGetName) => {
        clientStomp.publish({destination: '/app/room/im-here-too', body: JSON.stringify(data)});
    },
    removeUser: (data: IGetName) => {
        clientStomp.publish({destination: '/app/room/i-left', body: JSON.stringify(data)});
    },
    vote: (data: IVote) => {
       //  console.log(data)
        clientStomp.publish({destination: '/app/room/i-voted', body: JSON.stringify(data)});
        clientStomp.publish({destination: '/app/room/my-score', body: JSON.stringify(data)});
    },
    openCards: () => {
        console.log('i send open cards')
        clientStomp.publish({destination: '/app/room/open-cards'});
    },
}