import { GuideProductType } from '@/types/common';
import {
  extractHour,
  formatDate,
  formatDate2,
  formatTime,
  formatTimeRange,
  getTagName,
  getTagNameKor,
} from '@/utils';
import { MaterialSymbol } from 'react-material-symbols';

type PropsType = {
  src?: string;
  content: GuideProductType;
  classname?: string;
};

const TICKET_SET = [
  {
    top: '/images/ticket_top_blue.png',
    bottom: '/images/ticket_bottom_blue.png',
  },
  {
    top: '/images/ticket_top_green.png',
    bottom: '/images/ticket_bottom_green.png',
  },
  {
    top: '/images/ticket_top_pink.png',
    bottom: '/images/ticket_bottom_pink.png',
  },
  {
    top: '/images/ticket_top_yellow.png',
    bottom: '/images/ticket_bottom_yellow.png',
  },
  {
    top: '/images/ticket_top_red.png',
    bottom: '/images/ticket_bottom_red.png',
  },
];

const randomTicket = () => {
  const random = Math.floor(Math.random() * TICKET_SET.length);
  return TICKET_SET[random];
};

const Ticket = ({ src, content, classname }: PropsType) => {
  console.log(content);
  const ticket = randomTicket();
  return (
    <div>
      <div className={`relative text-white ${classname}`}>
        <img
          src={ticket.top}
          alt="Background"
          className={`size-full relative inset-0 bg-no-repeat bg-cover bg-center  `}
          style={{ backgroundImage: `url(${src})` }}
        />
        <div className="absolute top-[4.5rem] left-8">
          <div className="text-4xl font-black  py-2">{content.title}</div>
          {content.categories?.map((item, index) => (
            <span key={index} className="text-sm  font-light">
              #{getTagNameKor(item)}
            </span>
          ))}
        </div>
        <div
          className={`absolute bottom-14 left-8 grid grid-cols-2 grid-rows-1 gap-x-10 gap-y-3 *:max-w-32 `}
        >
          <div className="   ">
            <p className="text-xs font-bold font-poppins flex items-center  py-1.5">
              <MaterialSymbol
                icon="fmd_good"
                size={21}
                fill
                grade={-25}
                color="white"
                className="mr-2"
              />
              Location
            </p>
            <p className="text-base font-black line-clamp-2">{content.locationName}</p>
          </div>
          <div className="   ">
            <p className="text-xs font-bold font-poppins flex items-center  py-1.5">
              {' '}
              <MaterialSymbol
                icon="person"
                size={21}
                fill
                grade={-25}
                color="white"
                className="mr-2"
              />
              Host
            </p>
            <p className="text-base font-black">{content.nickname}</p>
          </div>{' '}
          <div className="   ">
            <p className="text-xs font-bold font-poppins flex items-center py-1.5">
              {' '}
              <MaterialSymbol
                icon="schedule"
                size={21}
                fill
                grade={-25}
                color="white"
                className="mr-2"
              />
              Time
            </p>
            <p className="text-base font-black">
              {' '}
              {formatTime(content.guideStartTime || '00:00') +
                '~' +
                formatTime(content.guideEndTime || '00:00')}
            </p>
          </div>{' '}
          <div className="   ">
            <p className="text-xs font-bold font-poppins flex items-center  py-1.5">
              {' '}
              <MaterialSymbol
                icon="date_range"
                size={21}
                fill
                grade={-25}
                color="white"
                className="mr-2"
              />
              Date
            </p>
            <p className="text-base font-black"> {formatDate2(content.guideStart)}</p>
          </div>
        </div>
      </div>
      <div className={`relative ${classname}`}>
        <img src={ticket.bottom} alt="Background" className={`size-full `} />
        <div className="absolute inset-0 flex items-center justify-center font-extrabold font-poppins text-[1.05rem] rotate-[-10deg;] transform bottom-6 -left-2 text-white ">
          Nice To Matthew
        </div>
      </div>
    </div>
  );
};

export default Ticket;
