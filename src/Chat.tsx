import { useState } from "react";
import './message.css'

export default function Chat()
{
    enum MessFlags {
        Incomming = 0,
        Send = 1,
        SendAndReceived = 2,
        Seen = 3
    }
    type Message = {
        id: number;
        value: string;
        sendOn: string;
        flag: MessFlags;
    }

    const messages: Message[] = [{id: 1, value: "Send message", sendOn: "00-00-0000", flag: MessFlags.Send},
                                 {id: 2, value: "Send message", sendOn: "00-00-0000", flag: MessFlags.Send},
                                 {id: 3, value: "SendAndReceived message", sendOn: "00-00-0000", flag: MessFlags.SendAndReceived},
                                 {id: 4, value: "Incomming message", sendOn: "00-00-0000", flag: MessFlags.Incomming},
                                 {id: 5, value: "Incomming message", sendOn: "00-00-0000", flag: MessFlags.Incomming},
                                 {id: 6, value: "Seen message", sendOn: "00-00-0000", flag: MessFlags.Seen},
                                 {id: 7, value: "Seen message", sendOn: "00-00-0000", flag: MessFlags.Seen},
                                 {id: 8, value: "Incomming message", sendOn: "00-00-0000", flag: MessFlags.Incomming}]
    
    function outgoing(m: Message): boolean
    {
        return (m.flag === MessFlags.Seen || m.flag === MessFlags.Send || m.flag === MessFlags.SendAndReceived)
    }

    function groupMessages(inputArray: Message[]) : Message[][]
    {
        return inputArray.reduce((result: Message[][], currentElement, index, array) => {
            if (index === 0 || (currentElement.flag === MessFlags.Incomming && outgoing(array[index - 1])) || 
                (currentElement.flag !== MessFlags.Incomming && !outgoing(array[index - 1])))
                result.push([currentElement])
            else
                result[result.length - 1].push(currentElement);
            
            return result
        }, [])
    }

    console.log(groupMessages(messages));
    return (
        <div className="w-4/5 h-full flex flex-col justify-between">
            <div className="w-5/5 bg-neutral-900 h-16">

            </div>
            <div className="h-full bg-neutral-800 overflow-x-auto">
            {groupMessages(messages).map((msGroup, index) => {
                if(msGroup[0].flag === MessFlags.Incomming)
                {
                    return <ul key={index} className="group-custom-received list-none flex flex-col items-start text-slate-300 mx-2 my-1">{
                        msGroup.map(ms => {
                            return <li key={ms.id} className=" bg-neutral-600 max-w-fit p-1 px-2 my-px text-sm">{ms.value}</li>
                    })}</ul>
                }
                else
                {
                    return <ul key={index} className="group-custom-send list-none flex flex-col items-end text-slate-300 mx-2 my-1">{
                        msGroup.map(ms => {
                            return <li key={ms.id} className=" bg-neutral-600 max-w-fit p-1 px-2 my-px text-sm">{ms.value}</li>
                    })}</ul>
                }
                
            })}
            </div>
            <div className="w-5/5 bg-neutral-900 h-12">
                <input type="text" className=""/>
                <button onClick={() => {}}></button>
            </div>
        </div>
    )
}
