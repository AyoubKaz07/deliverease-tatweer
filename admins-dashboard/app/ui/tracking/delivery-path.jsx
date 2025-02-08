import React from "react";

function DeliveryPath() {
  return (
    <div className=" justify-center grid">
      <h5 className="text-[#2080E2]  text-lg h-fit font-semibold">Delivaery Path</h5>
      <div className="flex gap-1 -mt-[30px] ">
        <div className="flex flex-col items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.6577 22.7533L12 23.3276L11.3423 22.7533C5.81131 17.9237 3 13.7068 3 10C3 4.75066 7.09705 1 12 1C16.9029 1 21 4.75066 21 10C21 13.7068 18.1887 17.9237 12.6577 22.7533ZM5 10C5 12.8492 7.30661 16.4335 12 20.6634C16.6934 16.4335 19 12.8492 19 10C19 5.8966 15.8359 3 12 3C8.16411 3 5 5.8966 5 10ZM7 11H13.5858L11.2929 13.2929L12.7071 14.7071L17.4142 10L12.7071 5.29289L11.2929 6.70711L13.5858 9H7V11Z"
              fill="#3C3C3C"
            />
          </svg>
          <svg
            className="line"
            width="2"
            height="79"
            viewBox="0 0 2 79"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="1"
              y1="79"
              x2="1"
              stroke="#BDBDBD"
              strokeWidth="2"
              strokeDasharray="6 6"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M13.0962 18.2554L12 19.2126L10.9038 18.2554C6.98842 14.8366 5 11.8112 5 9C5 5.02141 8.10349 2 12 2C15.8965 2 19 5.02141 19 9C19 11.8112 17.0116 14.8366 13.0962 18.2554ZM5.68555 14.8034C6.09614 15.3656 6.55352 15.9373 7.05748 16.519C5.19525 16.9384 4 17.5337 4 18C4 18.807 7.57914 20 12 20C16.4209 20 20 18.807 20 18C20 17.5337 18.8048 16.9384 16.9425 16.519C17.4465 15.9373 17.9039 15.3656 18.3144 14.8034C20.5633 15.4858 22 16.5804 22 18C22 20.5068 17.5203 22 12 22C6.47973 22 2 20.5068 2 18C2 16.5804 3.43674 15.4858 5.68555 14.8034ZM12 4C14.8038 4 17 6.13816 17 9C17 11.047 15.3727 13.5659 12 16.556C8.62733 13.5659 7 11.047 7 9C7 6.13816 9.19624 4 12 4ZM12 6C13.6569 6 15 7.34315 15 9C15 10.6569 13.6569 12 12 12C10.3431 12 9 10.6569 9 9C9 7.34315 10.3431 6 12 6ZM11 9C11 8.44772 11.4477 8 12 8C12.5523 8 13 8.44772 13 9C13 9.55228 12.5523 10 12 10C11.4477 10 11 9.55228 11 9Z"
              fill="#3C3C3C"
            />
          </svg>
        </div>
        <div className="flex text-sm flex-col justify-between">
          <div>
            <p className="font-medium">From</p>
            <p className="font-normal">benhamouda</p>
          </div>
          <div className="mb-[30px]">
            <p className="font-medium">Destination</p>
            <p className="font-normal">Wiam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliveryPath;
