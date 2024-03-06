
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

    const messages: Message[] = [{id: 1, value: "First message", sendOn: "now", flag: MessFlags.Send},
                                 {id: 2, value: "Second message", sendOn: "yesterday", flag: MessFlags.SendAndReceived},
                                 {id: 3, value: "Third message", sendOn: "09-09-2000", flag: MessFlags.Seen},
                                 {id: 4, value: "Fourth message", sendOn: "00-00-0000", flag: MessFlags.Incomming}]

    return (
        <div className="w-4/5 h-full flex flex-col justify-between">
            <div className="w-5/5 bg-neutral-900 h-16">

            </div>
            <div className="h-full bg-neutral-800">
                <ul>
                {
                    messages.map((ms) => {
                        return <li className="list-none" key={ms.id}>
                            <div className="rounded-full bg-neutral-600 max-w-fit p-1 text-sm text-slate-300 ">{ms.value}</div>
                        </li>
                    })
                }
                </ul>
            </div>
            <div className="w-5/5 bg-neutral-900 h-12">
                
            </div>
        </div>
    )
}
