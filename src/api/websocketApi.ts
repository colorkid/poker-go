import SockJS from "sockjs-client";
import * as StompJs from "@stomp/stompjs";
import {IMessage} from "@stomp/stompjs";
import {INameStory} from "../Interfaces";
import {IGetName} from "../Redux/reducers/UserReducer";
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
        showCard: any,
        newGame: any,
    ) => {
        clientStomp.onConnect = () => {
            setSubscribedState()
            clientStomp.subscribe('/topic/room/topic-changed', (message: IMessage) => {
                getNameStory(JSON.parse(message.body))
                newGame()
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
                votedUser(JSON.parse(message.body))
            });
            clientStomp.subscribe('/topic/room/open-cards', () => {
                const userState = getState().user;
                const userNameScore = {
                    name: userState.name,
                    score: userState.number
                };
                clientStomp.publish({destination: '/app/room/my-score', body: JSON.stringify(userNameScore)});
            });
            clientStomp.subscribe('/topic/room/my-score', (message: IMessage) => {
                showCard(JSON.parse(message.body))
            });
            clientStomp.subscribe('/topic/room/re-vote', (message: IMessage) => {
                console.log('1')
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
        clientStomp.publish({destination: '/app/room/i-voted', body: JSON.stringify(data)});
    },
    openCards: (data: any) => {
        clientStomp.publish({destination: '/app/room/open-cards', body: JSON.stringify(data)});
    },
    clearEstimations: (data: any) => {
        console.log(data)
        clientStomp.publish({destination: '/app/room/re-vote', body: JSON.stringify(data)});
    },
}