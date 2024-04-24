export function VideoCard(props: any) {
  return (
    <div className="flex justify-center w-200 items-center">
      <div className="w-full max-w-md overflow-hidden text-center text-white">
        <img className="" src={props.card_img} alt="" />
        <div className="grid grid-cols-5 mt-3">
          <img
            className="col-span-1 w-20 h-20 rounded-full"
            src={props.logo_img}
            alt=""
          />
          <div className="grid grid-rows-3 col-span-4 text-left items-center ml-2">
            <div className="text-md overflow-hidden">{props.title}</div>
            <div className="text-xs text-gray-400">{props.channel}</div>
            <div className="text-xs text-gray-400">
              {props.views} | {props.timestamp} ago
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
